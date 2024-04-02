import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    localLayerAliases: true,
  },
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
    },
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@vee-validate/nuxt',
    'dayjs-nuxt',
    'nuxt-snackbar',
  ],
  snackbar: {
    bottom: true,
    right: true,
    duration: 3000,
  },
  css: [resolve('./assets/scss/utils/_variables.scss')],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/app.scss" as *;',
        },
      },
    },
  },
  components: [
    {
      prefix: 'General',
      path: resolve('./components/general'),
      global: true,
    },
    {
      prefix: 'Page',
      path: resolve('./components/pages'),
      global: true,
    },
    {
      prefix: 'Layout',
      path: resolve('./components/layout'),
      global: true,
    },
  ],
  imports: {
    dirs: [resolve('./stores'), '~/stores'],
  },
  pinia: {
    storesDirs: ['~/stores/**', '#/stores/**', '@/stores/**'],
  },
})
