import packageJson from './package.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    '@nuxt/ui-pro',
  ],
  modules: [
    '@nuxtjs/seo',
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/device',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@vite-pwa/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: true,
    },
  ],
  imports: {
    dirs: [
      'composables/**',
      'stores/**',
    ],
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'ko',
      },
    },
  },
  css: [
    '~/assets/scss/style.scss',
  ],
  site: {
    url: 'https://monitors.dewdew.world',
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
  },
  ui: {
    prefix: 'DD',
  },
  runtimeConfig: {
    public: {
      serviceVersion: JSON.stringify(packageJson.version),
    },
  },
  sourcemap: {
    server: true,
    client: true,
  },
  compatibilityDate: '2024-11-25',
  vite: {
    build: {
      sourcemap: true,
      cssMinify: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          passes: 3,
        },
        mangle: true,
      },
    },
  },
  typescript: {
    shim: false,
  },
  eslint: {
    config: {
      stylistic: true,
    },
    checker: true,
  },
  i18n: {
    langDir: './locales',
    locales: [
      { code: 'ko', file: 'ko.ts' },
      { code: 'en', file: 'en.ts' },
    ],
    defaultLocale: 'ko',
    strategy: 'no_prefix',
  },
  icon: {
    serverBundle: 'remote',
  },
  pinia: {
    storesDirs: [
      './stores/**',
    ],
  },
  pwa: {
    scope: '/',
    base: '/',
    injectRegister: 'auto',
    registerType: 'autoUpdate',
    workbox: {
      navigateFallback: undefined,
      globPatterns: ['**/*.{js,json,css,html,txt,svg,png,ico,webp,woff,woff2,ttf,eot,otf,wasm}', '/'],
      runtimeCaching: [{
        urlPattern: '/',
        handler: 'NetworkFirst',
      }],
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },
  stylelint: {
    lintOnStart: true,
  },
  vueuse: {
    ssrHandlers: false,
  },
})
