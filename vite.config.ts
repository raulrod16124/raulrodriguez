import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const isProduction = process.env.NODE_ENV === 'production';
const repoName = 'raulrodriguez';

export default defineConfig({
  plugins: [react()],
  base: isProduction ? `/${repoName}/` : '/',
  build: {
    outDir: 'dist',
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
})
