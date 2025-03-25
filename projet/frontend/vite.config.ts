import { defineConfig, loadEnv, ConfigEnv, UserConfigExport } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default ({ mode }: ConfigEnv): UserConfigExport => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [react()],

    server: {
      host: true,
      watch: {
        usePolling: true,
      },
    },
  });
};