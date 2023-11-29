// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      authUrl: process.env.NUXT_PUBLIC_AUTH_URL,
      authRealm: process.env.NUXT_PUBLIC_AUTH_REALM,
      authClientId: process.env.NUXT_PUBLIC_AUTH_CLIENT_ID,
    },
  },
})
