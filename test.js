import test from 'ava';
import m from './';

test('fetch links', async t => {
	console.log(await m());
	t.true(Array.isArray(await m()));
});
