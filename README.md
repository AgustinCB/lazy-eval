# Lazy Evaluation

Simple and small library to do lazy evaluation (and memoization) with Javascript.

## Example

```javascript
import lazy from '../lib/lazy';

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
```

## Also supports types

```typescript
import { default as lazy, Lazy }from '../lib/lazy';

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
```
