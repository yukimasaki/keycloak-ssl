// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      issuer: process.env.ISSUER,
      authOrigin: process.env.AUTH_ORIGIN,
      authSecret: process.env.AUTH_SECRET,
    },
  },
  modules: [
    'nuxt-quasar-ui',
    '@sidebase/nuxt-auth',
  ],
  auth: {
    provider: {
      type: 'authjs'
    },
    globalAppMiddleware: {
      isEnabled: false,
    },
  },
})
