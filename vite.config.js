import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

const page = (f) => resolve(import.meta.dirname, f);

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 700, // three.js is lazy-loaded by the landing mic only
    rollupOptions: {
      input: {
        home: page('index.html'),
        specials: page('specials.html'),
        festivals: page('festivals.html'),
        openMics: page('open-mics.html'),
        games: page('games.html'),
      },
    },
  },
});
