const chrome = require('.')

const ps = chrome({
  uri: 'https://github.com/'
})
ps.on('error', console.error)
