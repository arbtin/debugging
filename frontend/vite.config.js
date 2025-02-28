import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,            // Use globals like `describe`, `it`, etc.
    environment: 'jsdom',     // Use jsdom as the testing environment
    setupFiles: './src/setupTests.js', // Optional: to configure any global setup like jest-dom
    transformMode: {
      web: [/\.[jt]sx?$/],    // Handle JSX/TSX files
    },
  },
});
