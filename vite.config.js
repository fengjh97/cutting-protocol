import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base 设为相对路径,GitHub Pages 子路径部署也能正确加载资源
export default defineConfig({
  plugins: [react()],
  base: './',
});
