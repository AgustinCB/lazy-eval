import lazy from '../lib/lazy';
import test from 'ava';

test('basic usage', t => {
  let counter = 0;
  const executor = () => {
    counter += 1;
    return 'result';
  };
  const lazyVal = lazy(executor);
  t.is(counter, 0);
  t.is(lazyVal(), 'result');
  t.is(counter, 1);
  t.is(lazyVal(), 'result');
  t.is(counter, 1);
  t.is(lazyVal.isLazy, true);
});

test('then method', t => {
  let counter = 0;
  const lazyVal = lazy(() => {
    counter += 1;
    return 1;
  });
  const lazyOp = lazyVal.then((v1) => lazy(() => {
    counter += 1;
    return v1 + 1;
  }));
  t.is(counter, 1);
  t.is(lazyOp(), 2);
  t.is(counter, 2);
  t.is(lazyOp(), 2);
  t.is(counter, 2);
});

test('map method', t => {
  let counter = 0;
  const lazyVal = lazy(() => {
    counter += 1;
    return 1;
  });
  const lazyOp = lazyVal.map(v => {
    counter += 1;
    return v + 1;
  });
  t.is(counter, 0);
  t.is(lazyOp(), 2);
  t.is(counter, 2);
  t.is(lazyOp(), 2);
  t.is(counter, 2);
});
