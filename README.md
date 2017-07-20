# Lazy Evaluation

Simple and small library to do lazy evaluation (and memoization) with Javascript.

## Example

### Basic

```javascript
import lazy from 'lazy-eval';

let counter = 0;
const executor = () => {
  counter += 1;
  return 'result';
};
const lazyVal = lazy(executor);

console.log(counter); // 0
console.log(lazyVal()); // 'result'
console.log(counter); // 1
console.log(lazyVal()); // 'result'
console.log(counter); // 1
console.log(lazyVal.isLazy); // true
```

### Then operator

```
import lazy from 'lazy-eval';

let counter = 0;
const lazyVal = lazy(() => {
  counter += 1;
  return 1;
});
const lazyOp = lazyVal.then((v1) => lazy(() => {
  counter += 1;
  return v1 + 1;
}));
console.log(counter); // 1
console.log(lazyOp()); //  2
console.log(counter); // 2
console.log(lazyOp()); //  2
console.log(counter); // 2
```

### Map operator

```
import lazy from 'lazy-eval';

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
```

## Also supports types

```typescript
import { default as lazy, Lazy } from 'lazy-eval';

let counter = 0;
const executor = (): string => {
  counter += 1;
  return 'result';
};
const lazyVal: Lazy<string> = lazy(executor);

console.log(counter); // 0
console.log(lazyVal()); // 'result'
console.log(counter); // 1
console.log(lazyVal()); // 'result'
console.log(counter); // 1
console.log(lazyVal.isLazy); // true
```
