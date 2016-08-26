# linux-chrome

Launch a fresh Google Chrome on Linux.

## Example

```js
const chrome = require('linux-chrome')

const ps = chrome({ uri: 'https://github.com/' })
ps.on('error', console.error)
```

## Installation

```js
$ npm install linux-chrome
```

Google Chrome needs to be installed on your system as well.

## API

### ps = chrome(opts)

Returns a `child_process` object.

Options:

- `display`: Set process.env.DISPLAY to `:${opts.display}` for xvfb support
- `proxy`: Proxy server settings
- `dataDir`: Data dir, defaults to `/tmp/$RANDOM`

## License

MIT
