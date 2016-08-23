import test from 'ava';

import { proxy } from './server';

test('call', t => {

  const p = devproxy();

  t.is(typeof p, 'function');
});
