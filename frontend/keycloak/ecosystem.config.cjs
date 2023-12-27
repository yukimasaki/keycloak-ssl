module.exports = {
  apps: [
    {
      name: 'nuxt',
      exec_mode: 'cluster',
      instances: '-1',
      script: '.output/server/index.mjs',
      args: 'start',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      env: {
        // reason: `process.env`だと読み込めないらしいのでハードコーディングしている
        NEXTAUTH_URL: `https://app.youmaro.jp`,
        AUTH_ORIGIN: `https://app.youmaro.jp/api/auth`,
      },
    },
  ],
}
