import react from '@vitejs/plugin-react';
import type { UserConfig } from 'vite';
import { defineConfig } from 'vite';
import type { InlineConfig } from 'vitest';

// https://vitejs.dev/config/
export default defineConfig({
  clearScreen: false, //salvar e atualizar pagina automatico
  plugins: [react()],
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    setupFiles: ['./test/setup.ts'],
    environment: 'happy-dom',
  },
} as UserConfig & {
  test: InlineConfig;
});
