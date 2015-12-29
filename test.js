/* eslint-disable no-extend-native */
Array.prototype.findIndex = undefined;
import test from 'ava';
import fn from './';

const f = [10, 20, 30, 40];

test(t => {
	t.is(fn(f, x => x === 30), 2);
	t.is(fn(f, x => x === 'noop'), -1);
});
