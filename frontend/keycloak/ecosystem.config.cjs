module.exports = {
  apps: [
    {
      name: 'nuxt',
      exec_mode: 'cluster',
      instances: '-1',
      script: '.output/server/index.mjs',
      args: 'start',
      env: {
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        AUTH_ORIGIN: process.env.AUTH_ORIGIN,
      },
    },
  ],
}
