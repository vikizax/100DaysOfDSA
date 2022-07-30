/**

Currying is a useful technique used in JavaScript applications.

Please implement a curry() function, which accepts a function and return a curried one.

Here is an example

const join = (a, b, c) => {
   return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)

curriedJoin(1, 2, 3) // '1_2_3'

curriedJoin(1)(2, 3) // '1_2_3'

curriedJoin(1, 2)(3) // '1_2_3'
 */

/**
 *
 * @param {Function} fn
 * @returns
 */
function curry(fn) {
  return function curriedFn(...args) {
    if (args.length >= fn.length) return fn.apply(this, args);
    return function (...next) {
      return curriedFn.call(this, ...args, ...next);
    };
  };
}

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join);

// console.log(curriedJoin(1, 2, 3)); // '1_2_3'

// console.log(curriedJoin(1)(2, 3)); // '1_2_3'

// console.log(curriedJoin(1, 2)(3)); // '1_2_3'

/**
 *
 * @param {Function} fn
 * @description Improvised to support place holder
 */
function curryImproved(fn) {
  return function curriedFn(...args) {
    const valid =
      args.length >= fn.length &&
      !args.slice(0, fn.length).includes(curry.placeholder);
    if (valid) return fn(...args);
    return function (...next) {
      const result = args.map((arg) =>
        arg === curry.placeholder && next.length ? next.shift() : arg
      );
      return curriedFn(...result, ...next);
    };
  };
}

curry.placeholder = Symbol()

const curriedJoin1 = curryImproved(join);
const _ = curry.placeholder;
console.log(curriedJoin1(1, 2, 3)); // '1_2_3'
console.log(curriedJoin1(_, 2)(1, 3)); // '1_2_3'
console.log(curriedJoin1(_, _, _)(1)(_, 3)(2)); // '1_2_3'

