import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  server: {
    open: true,
  },
  plugins: [
    ViteImageOptimizer({
      webp: {
        quality: 60,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
