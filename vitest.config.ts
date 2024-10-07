import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react';

export default defineConfig({
    // @ts-ignore
    plugins: [react()],
    test: {
        include: ['**/*.test.tsx', '**/*.test.ts'],
        globals: true,
        environment: "jsdom",
    },
})