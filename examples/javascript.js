const lazy = require('../lib/lazy').default;

let counter = 0;
const executor = () => {
  counter += 1;
  return 'result';
};
const lazyVal = lazy(executor);

console.log(lazyVal()); // 'result'
console.log(counter); // 1
console.log(lazyVal()); // 'result'
console.log(counter); // 1
console.log(lazyVal.isLazy); // true
