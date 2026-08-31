import {defineConfig} from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  plugins: [react()],
  test: {
    include: ['**/*.test.tsx', '**/*.test.ts'],
    globals: true,
    environment: 'jsdom',
  },
});
