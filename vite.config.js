import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { resolve } from "path"; // for rollup multi-page
import { dirname } from 'node:path';

import injectHTML from "vite-plugin-html-inject"; // component approach in html
import { ViteMinifyPlugin } from "vite-plugin-minify"; // minify html in build
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"; // optimize images requires plugins svgo and sharp
import FullReload from "vite-plugin-full-reload"; // auto reload on changes


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
function makeAlias(relativePath) {
  return fileURLToPath(new URL(relativePath, import.meta.url));
}

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 4444,
  },
  build: {
    minify: "esbuild",
    cssMinify: "lightningcss", // if there is any conflicts just remove it (but it's very fast)
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        // add pages here if it's no SPA
        // about: resolve(__dirname, 'about.html'),
      },
    },
  },
  plugins: [
    injectHTML(),
    FullReload(["./scr/**/*"]),
    ViteImageOptimizer({
      exclude: /^sprite.svg$/, // if you need to exclude favicons: ['apple-touch-icon.png', 'web-app-manifest-192x192.png', 'web-app-manifest-512x512.png', 'favicon-48x48.png', 'favicon.svg']
      png: {
        quality: 90,
      },
      jpeg: {
        quality: 60,
      },
      jpg: {
        quality: 60,
      },
      webp: {
        lossless: true,
      },
      avif: {
        lossless: true,
      },
      cache: false,
    }),
    ViteMinifyPlugin({}),
  ],
  resolve: {
    alias: {
      "@": makeAlias("src"),
      "@scripts": makeAlias("src/scripts"),

      // styles
      "@styles": makeAlias("src/styles"),
      "@abstracts": makeAlias("src/styles/abstracts"),
      "@scss-functions": makeAlias("src/styles/abstracts/functions"),
      "@scss-components": makeAlias("src/styles/components"),
      "@scss-ui": makeAlias("src/styles/components/ui/"),
      "@base": makeAlias("src/styles/base"),

      // components
      "@components": makeAlias("src/components"),
      // '@molecules': makeAlias('./src/components/molecules'),
      // '@organisms': makeAlias('./src/components/organisms'),
      // '@templates': makeAlias('./src/components/templates'),

      // assets
      "@assets": makeAlias("src/assets"),
      "@img": makeAlias("src/assets/img"),
      "@fonts": makeAlias("src/assets/fonts"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ``, // global styles
      },
    },
  },
});
