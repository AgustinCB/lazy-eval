"use strict";
exports.__esModule = true;
var lazy_1 = require("../lib/lazy");
var counter = 0;
var executor = function () {
    counter += 1;
    return 'result';
};
var lazyVal = lazy_1["default"](executor);
console.log(counter); // 0
console.log(lazyVal()); // 'result'
console.log(counter); // 1
console.log(lazyVal()); // 'result'
console.log(counter); // 1
console.log(lazyVal.isLazy); // true
