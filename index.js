const spawn = require('child_process').spawn

module.exports = (opts, cb) => {
  const env = Object.assign({}, process.env)
  if (opts.display) env.DISPLAY = `:${opts.display}`

  const dataDir = opts.dataDir ||
    `/tmp/${Math.random().toString(16).slice(2)}`
  const args = [
    opts.proxy && `--proxy-server=${opts.proxy}`,
    `--user-data-dir=${dataDir}`,
    '--disable-restore-session-state',
    '--no-default-browser-check',
    '--start-maximized',
    '--disable-default-apps',
    '--disable-sync',
    '--enable-fixed-layout',
    '--no-first-run',
    '--noerrdialogs',
    opts.uri
  ].filter(Boolean)

  return spawn('google-chrome', args, { env })
}
