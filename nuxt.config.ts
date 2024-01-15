// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ['@storyblok/nuxt', { accessToken: process.env.NUXT_STORYBLOK_TOKEN }],
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],
  i18n: {
    strategy: 'prefix_except_default',
    locales: ['en', 'es'],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts'
  }
})
