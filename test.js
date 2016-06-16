/* eslint-disable no-extend-native */
import test from 'ava';

Array.prototype.findIndex = undefined;
const m = require('./');

const f = [10, 20, 30, 40];

test(t => {
	t.is(m(f, x => x === 30), 2);
	t.is(m(f, x => x === 'noop'), -1);
});
