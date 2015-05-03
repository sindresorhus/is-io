# is-io [![Build Status](https://travis-ci.org/sindresorhus/is-io.svg?branch=master)](https://travis-ci.org/sindresorhus/is-io)

> Check if the runtime is io.js instead of Node.js


## Install

```
$ npm install --save is-io
```


## Usage

```js
var isIo = require('is-io');

if (isIo) {
	// do something custom in io.js
} else {
	// and something else in Node.js
}
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
