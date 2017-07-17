import { default as lazy, Lazy } from '../lib/lazy';

let counter = 0;
const executor = (): string => {
  counter += 1;
  return 'result';
};
const lazyVal: Lazy<string> = lazy(executor);

console.log(lazyVal()); // 'result'
console.log(counter); // 1
console.log(lazyVal()); // 'result'
console.log(counter); // 1
console.log(lazyVal.isLazy); // true
