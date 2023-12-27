// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ['@storyblok/nuxt', { accessToken: '7NYTxgSdhhRJIQlQfeeHuAtt' }],
    '@nuxtjs/tailwindcss',
  ],
})
