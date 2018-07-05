var mathlib = require('./mathlib')();     //notice the extra invocation parentheses!
console.log(mathlib);
mathlib.add(10,2);
mathlib.multiply(4,6);
mathlib.square(4);
mathlib.random(2,53);