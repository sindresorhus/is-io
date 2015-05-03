'use strict';
var test = require('ava');
var isIo = require('./');

test(function (t) {
	console.log('Is io.js?', isIo);
	t.assert(typeof isIo === 'boolean');
	t.end();
});
