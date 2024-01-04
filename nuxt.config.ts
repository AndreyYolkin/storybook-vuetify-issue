// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    'vuetify-nuxt-module',
  ],
  i18n: {
    locales: ['en', 'fr', 'ar'],
    defaultLocale: 'en',
  },

  devtools: {
    enabled: true,
  },
})
