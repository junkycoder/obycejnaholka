import test from 'ava';

import devproxy from './proxy';

test('call', t => {

  const proxy = devproxy();

  t.is(typeof proxy, 'function');
});
