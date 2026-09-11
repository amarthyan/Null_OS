import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    port: 3000,
    host: true,
    watch: {
      ignored: [
        '**/NullOS-app/**',
        '**/build-exe/**',
        '**/dist-electron/**',
        '**/release/**',
        '**/dist/**',
        '**/*.dat',
        '**/testfile*',
        '**/*.bin',
        '**/node_modules/**',
        '**/*.tmp/**',
        '**/*.dll',
        '**/*.asar'
      ]
    }
  }
});
