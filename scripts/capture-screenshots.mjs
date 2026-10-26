import { spawn } from 'node:child_process';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const URL = process.argv[2] ?? 'https://chicmouse.com/';
const OUTPUT_PATH = process.argv[3] ?? '/tmp/chicmouse.png';
const THEME_ARG = process.argv[4];
const THEME = THEME_ARG === 'light' || THEME_ARG === 'dark' ? THEME_ARG : null;
const HEADLESS = process.env.HEADLESS !== 'false';
const VIEWPORT = { width: 1440, height: 900, deviceScaleFactor: 2 };

if (THEME_ARG !== undefined && THEME === null) {
  throw new Error('Theme must be "light" or "dark"');
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const waitForFile = async (path, timeoutMs = 15000) => {
  const startedAt = Date.now();
  while (Date.now() - startedAt < timeoutMs) {
    try {
      return await readFile(path, 'utf8');
    } catch {
      await sleep(100);
    }
  }
  throw new Error(`Timed out waiting for ${path}`);
};

const createCdpClient = (ws) => {
  let nextId = 1;
  const pending = new Map();

  ws.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);
    if (typeof message.id !== 'number') return;
    const resolver = pending.get(message.id);
    if (!resolver) return;
    pending.delete(message.id);
    if (message.error) {
      resolver.reject(new Error(message.error.message));
    } else {
      resolver.resolve(message.result);
    }
  });

  return (method, params = {}) =>
    new Promise((resolve, reject) => {
      const id = nextId++;
      pending.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });
};

const openWebSocket = (url) =>
  new Promise((resolve, reject) => {
    const ws = new WebSocket(url);
    ws.addEventListener('open', () => resolve(ws), { once: true });
    ws.addEventListener('error', () => reject(new Error('WebSocket connection failed')), { once: true });
  });

const profileDir = await mkdtemp(join(tmpdir(), 'portfolio-capture-'));
const chrome = spawn(
  CHROME_PATH,
  [
    ...(HEADLESS ? ['--headless=new'] : []),
    '--hide-scrollbars',
    '--force-device-scale-factor=2',
    '--window-size=1440,900',
    '--remote-debugging-port=0',
    `--user-data-dir=${profileDir}`,
    '--no-first-run',
    '--no-default-browser-check',
    'about:blank',
  ],
  { stdio: 'ignore' },
);

try {
  const [portLine] = (await waitForFile(join(profileDir, 'DevToolsActivePort'))).split('\n');
  const port = Number(portLine);
  if (!Number.isInteger(port) || port <= 0) {
    throw new Error('Chrome did not expose a valid DevTools port');
  }

  const targets = await fetch(`http://127.0.0.1:${port}/json/list`).then((response) => response.json());
  const page = targets.find((target) => target.type === 'page');
  if (!page?.webSocketDebuggerUrl) {
    throw new Error('Chrome did not expose a page target');
  }

  const ws = await openWebSocket(page.webSocketDebuggerUrl);
  const send = createCdpClient(ws);

  await send('Page.enable');
  await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride', {
    width: VIEWPORT.width,
    height: VIEWPORT.height,
    deviceScaleFactor: VIEWPORT.deviceScaleFactor,
    mobile: false,
  });
  await send('Emulation.setEmulatedMedia', {
    features: [
      ...(THEME === null ? [] : [{ name: 'prefers-color-scheme', value: THEME }]),
      { name: 'prefers-reduced-motion', value: 'reduce' },
    ],
  });
  await send('Page.addScriptToEvaluateOnNewDocument', {
    source: `try {
      if (location.hostname === 'chicmouse.com') {
        localStorage.setItem('chicmouse_cookie_consent', 'accepted');
      }
    } catch {}`,
  });

  await send('Page.navigate', { url: URL });

  const result = await send('Runtime.evaluate', {
    awaitPromise: true,
    returnByValue: true,
    expression: `(async () => {
      const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      const theme = ${JSON.stringify(THEME)};
      const startedAt = Date.now();
      while (document.readyState !== 'complete' && Date.now() - startedAt < 15000) {
        await sleep(100);
      }
      const challengeStartedAt = Date.now();
      while (
        /just a moment|un momento|verificación de seguridad/i.test(document.title) &&
        Date.now() - challengeStartedAt < 20000
      ) {
        await sleep(500);
      }
      if (theme !== null) {
        document.documentElement.setAttribute('data-theme', theme);
      }
      if (location.hostname.endsWith('npmjs.com')) {
        for (const button of document.querySelectorAll('button')) {
          const label = (button.getAttribute('aria-label') ?? '').toLowerCase();
          if (label.includes('dismiss') || label.includes('close')) {
            button.click();
          }
        }
        await sleep(250);
      }
      const languageSwitch = document.querySelector('[aria-label="Switch to English"]');
      if (languageSwitch instanceof HTMLElement) {
        languageSwitch.click();
        await sleep(500);
      }
      await Promise.race([
        document.fonts.ready,
        sleep(5000),
      ]);
      await Promise.all(
        Array.from(document.images)
          .filter((image) => !image.complete)
          .map((image) => new Promise((resolve) => {
            image.addEventListener('load', resolve, { once: true });
            image.addEventListener('error', resolve, { once: true });
          })),
      );
      await sleep(2000);
      return {
        title: document.title,
        width: window.innerWidth,
        height: window.innerHeight,
        theme: document.documentElement.getAttribute('data-theme'),
        hasCookieBanner: document.body.innerText.includes('We use cookies'),
      };
    })()`,
  });

  if (result.exceptionDetails) {
    throw new Error(result.exceptionDetails.text);
  }

  const pageState = result.result.value;
  if (pageState.hasCookieBanner) {
    throw new Error('Chicmouse cookie banner is still visible');
  }

  const screenshot = await send('Page.captureScreenshot', {
    format: 'png',
    fromSurface: true,
    captureBeyondViewport: false,
  });

  await writeFile(OUTPUT_PATH, Buffer.from(screenshot.data, 'base64'));
  console.log(`Captured ${pageState.title} (${pageState.width}x${pageState.height}) at ${OUTPUT_PATH}`);
  ws.close();
} finally {
  chrome.kill();
  await new Promise((resolve) => {
    if (chrome.exitCode !== null) {
      resolve();
      return;
    }
    chrome.once('exit', resolve);
    setTimeout(resolve, 3000);
  });
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      await rm(profileDir, { recursive: true, force: true });
      break;
    } catch {
      await sleep(250);
    }
  }
}
