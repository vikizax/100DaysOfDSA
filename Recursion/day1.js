/**
 * Day 1: Recursion
 * Source: https://www.geeksforgeeks.org/recursion/
 */
// example add number 1 to n
function sumToN(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n >= 1) return n + sumToN(n - 1);
}
/**
 * 4 + < 3 + < 2 + < 1
 */
// console.log(sumToN(4), "=== 10");

// find factorial of n
function factorial(n) {
  if (n === 0) return 1;
  if (n === 1) return 1;
  if (n > 1) return n * factorial(n - 1);
}

// console.log(factorial(2), "=== 2");
// console.log(factorial(3), "=== 6");
// console.log(factorial(5), "=== 120");

// find fibonacci sum to n
function fibonacciSumToN(n) {
  if (n < 2) {
    return 1;
  } else {
    return fibonacciSumToN(n - 2) + fibonacciSumToN(n - 1);
  }
}

console.log(fibonacciSumToN(7));

/**
 * @description print fibonacci to n
 * @param {number} n
 * @returns {number[]}
 */
function fibonacciNumToN(n) {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];
  else {
    const fibArr = fibonacciNumToN(n - 1);
    fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
    return fibArr;
  }
}

// console.log(fibonacciNumToN(7).join(","));
