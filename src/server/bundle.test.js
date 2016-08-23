import test from 'ava';

import bundle from './bundle';

test('bundle()', t => {

  const fn = bundle();

  t.is(typeof fn, 'function');
});
