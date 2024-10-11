import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom', // Use jsdom for DOM manipulation in tests
    setupFiles: './vitest.setup.ts', // Setup file to configure testing-library
  },
});
