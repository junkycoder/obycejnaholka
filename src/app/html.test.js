import test from 'ava';

import { createDocument } from './html';

test('createDocument', t => {

  const doc = createDocument('__CONTENT__');

  t.is(typeof doc, 'string');
  t.regex(doc, /__CONTENT__/);
});
