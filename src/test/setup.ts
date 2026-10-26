import { beforeEach, vi } from 'vitest';

const createMediaQueryList = (query: string): MediaQueryList => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn((query: string) => createMediaQueryList(query)),
});

class IntersectionObserverMock implements IntersectionObserver {
  readonly root = null;
  readonly rootMargin = '';
  readonly thresholds: readonly number[] = [];

  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = vi.fn((): IntersectionObserverEntry[] => []);
}

class ResizeObserverMock implements ResizeObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);
vi.stubGlobal('ResizeObserver', ResizeObserverMock);

Element.prototype.scrollIntoView = vi.fn();

beforeEach(() => {
  window.localStorage.clear();
  Object.defineProperty(window.navigator, 'language', {
    configurable: true,
    value: 'en-US',
  });
  Object.defineProperty(window.navigator, 'languages', {
    configurable: true,
    value: ['en-US', 'en'],
  });
});
