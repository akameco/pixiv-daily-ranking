import test from 'ava';
import m from './';

test('fetch links', async t => {
	t.true(Array.isArray(await m()));
});
