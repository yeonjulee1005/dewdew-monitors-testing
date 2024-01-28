import packageJson from './package.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'ko'
      },
      meta: [
        { property: 'Imagetoolbar', content: 'no' }
      ],
      link: [
        { rel: 'canonical', href: 'https://monitors.dewdew.world' }
      ]
    }
  },
  extends: [
    '@nuxt/ui-pro'
  ],
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/devtools',
    '@nuxtjs/robots',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/i18n',
    'nuxt-icon',
    'nuxt-simple-sitemap',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  runtimeConfig: {
    public: {
      serviceVersion: JSON.stringify(packageJson.version)
    }
  },
  css: [
    '~/assets/scss/style.scss'
  ],
  ui: {
    prefix: 'DD'
  },
  components: [
    {
      path: '~/components',
      pathPrefix: true
    }
  ],
  imports: {
    dirs: [
      'composables/**',
      'stores/**'
    ]
  },
  pinia: {
    storesDirs: [
      './stores/**'
    ]
  },
  vite: {
    build: {
      sourcemap: true,
      cssMinify: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    }
  },
  i18n: {
    langDir: './locales',
    locales: [
      { code: 'ko', file: 'ko.ts' },
      { code: 'en', file: 'en.ts' }
    ],
    defaultLocale: 'ko',
    strategy: 'no_prefix'
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true
    }
  },
  stylelint: {
    lintOnStart: true
  },
  vueuse: {
    ssrHandlers: false
  },
  typescript: {
    shim: false
  },
  robots: {
    rules: [
      { UserAgent: '*', Allow: '/' }
    ]
  },
  site: {
    url: 'https://monitors.dewdew.world'
  }
})
