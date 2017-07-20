const lazy = require('../lib/lazy').default;

let counter = 0;
const lazyVal = lazy(() => {
  counter += 1;
  return 1;
});
const lazyOp = lazyVal.map(v => {
  counter += 1;
  return v + 1;
});
console.log(counter); // 0
console.log(lazyOp()); //  2
console.log(counter); // 2
console.log(lazyOp()); //  2
console.log(counter); // 2
