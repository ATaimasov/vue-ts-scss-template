import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'; // optimize images requires plugins svgo and sharp

function makeAlias(relativePath: string) {
  return fileURLToPath(new URL(relativePath, import.meta.url));
}

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 4444,
  },
  build: {
    minify: 'esbuild',
    cssMinify: 'lightningcss', // if there is any conflicts just remove it (but it's very fast)
  },
  plugins: [
    vue(),
    vueDevTools(),
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
  ],
  resolve: {
    alias: {
      '@': makeAlias('src'),
      '@scripts': makeAlias('src/scripts'),
      // styles
      '@styles': makeAlias('src/styles'),
      '@abstracts': makeAlias('src/styles/abstracts'),
      '@scss-functions': makeAlias('src/styles/abstracts/functions'),
      '@scss-components': makeAlias('src/styles/components'),
      '@scss-ui': makeAlias('src/styles/components/ui/'),
      '@base': makeAlias('src/styles/base'),
      // components
      '@components': makeAlias('src/components'),
      '@ui': makeAlias('src/components/ui'),
      '@icons': makeAlias('src/components/icons'),
      '@views': makeAlias('src/views'),
      // assets
      '@assets': makeAlias('src/assets'),
      '@img': makeAlias('src/assets/img'),
      '@fonts': makeAlias('src/assets/fonts'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use '@styles/global' as *;
        `, // global styles
      },
    },
  },
});
