/* eslint-disable no-extend-native */
Array.prototype.findIndex = undefined;
import test from 'ava';
import m from './';

const f = [10, 20, 30, 40];

test(t => {
	t.is(m(f, x => x === 30), 2);
	t.is(m(f, x => x === 'noop'), -1);
});
