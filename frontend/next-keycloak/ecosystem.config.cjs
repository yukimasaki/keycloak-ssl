module.exports = {
  apps: [
    {
      name: 'next',
      exec_mode: 'cluster',
      instances: '-1',
      script: 'yarn start',
      args: 'start',
      time: true,
      log_date_format: 'YYYY-MM-DD HH:mm Z',
    },
  ],
}
