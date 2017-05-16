# Deprecated

[io.js is no more.](https://nodejs.org/en/blog/announcements/foundation-v4-announce/)

---


# is-io [![Build Status](https://travis-ci.org/sindresorhus/is-io.svg?branch=master)](https://travis-ci.org/sindresorhus/is-io)

> Check if the runtime is io.js instead of Node.js


## Install

```
$ npm install --save is-io
```


## Usage

```js
const isIo = require('is-io');

if (isIo) {
	// Do something custom in io.js
} else {
	// And something else in Node.js
}
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
