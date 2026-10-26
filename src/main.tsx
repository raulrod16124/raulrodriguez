import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { I18nProvider } from './i18n'
import { pdfjs } from 'react-pdf'
import '@raulrod/tokens/styles.css'
import '@raulrod/ui/styles.css'
import './index.css'
import './styles/raulrod-ui-theme.css'

const localPdfWorker = `${import.meta.env.BASE_URL}pdf.worker.min.mjs`
let pdfWorkerSrc = localPdfWorker

Object.defineProperty(pdfjs.GlobalWorkerOptions, 'workerSrc', {
  configurable: true,
  get: () => pdfWorkerSrc,
  set: (value: string) => {
    if (!value.endsWith('pdf.worker.mjs')) {
      pdfWorkerSrc = value
    }
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <I18nProvider>
        <App />
      </I18nProvider>
    </BrowserRouter>
  </StrictMode>,
)
