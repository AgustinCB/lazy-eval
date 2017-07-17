import lazy from '../lib/lazy';
import test from 'ava';

test('basic usage', t => {
  let counter = 0;
  const executor = () => {
    counter += 1;
    return 'result';
  };
  const lazyVal = lazy(executor);
  t.is(lazyVal(), 'result');
  t.is(counter, 1);
  t.is(lazyVal(), 'result');
  t.is(counter, 1);
  t.is(lazyVal.isLazy, true);
});
