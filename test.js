import test from 'ava';
import m from './';

test(t => {
	console.log('Is io.js?', m);
	t.is(typeof m, 'boolean');
});
