// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'node:path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineNuxtConfig({
  content: {
    experimental: {
      clientDB: true
    }
  },
  app: {
    head: {
      script: [
        // { src: 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.1/cdn/components/icon/icon.js', type: 'module' },
      ],
    }
  },
  compatibilityDate: '2024-11-01',
  build: {
    transpile: ['@shoelace-style/shoelace'],
  },
  modules: ['@nuxt/content', '@nuxtjs/i18n', '@pinia/nuxt'],
  vite: {
    // Required for Shoelace
    optimizeDeps: {
      include: ['@shoelace-style/shoelace']
    },
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: path.resolve(__dirname, 'node_modules/@shoelace-style/shoelace/dist/assets'),
            dest: path.resolve(__dirname, 'public/shoelace/'),
          },
        ],
      }),
    ],
  },
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('sl-')
    },
  },
  css: [
    '@shoelace-style/shoelace/dist/themes/light.css',
    '@shoelace-style/shoelace/dist/themes/dark.css',
  ],

  ssr: false,
  devtools: { enabled: true },
  plugins: [
    { src: '~/plugins/shoelace.client.ts', mode: 'client' }
  ],
  i18n: {
    locales: [
      { code: 'en', name: 'English' },
      { code: 'fr', name: 'Français'},
      { code: 'es', name: 'Español' },
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: false
  }
})
 