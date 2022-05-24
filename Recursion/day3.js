/**
 * @description Find the sum of all the digits of a given number using recursive approach
 * @param {number} n
 * @returns {number}
 */
function sumOfDigits(n) {
  if (n == 0) return 0;
  const lastDigit = n % 10;
  const remaining = Math.floor(n / 10);
  return sumOfDigits(remaining) + lastDigit;
}

// console.log(sumOfDigits(1214), "== 8");

/**
 * @description print given pattern to n
 * 1
 * 1 2
 * 1 2 3
 * 1 2 3 ..n
 * @param {number} n
 */
function printPatternUp(n) {
  let pattern = "";
  if (n === 0) return;
  printPatternUp(n - 1);
  for (let i = 1; i <= n; i++) {
    pattern += i;
  }
  console.log(pattern);
}

// printPatternUp(4);

/**
 * @description print given pattern to n
 * 1
 * 1 2
 * 1 2 3
 * 1 2 3 ..n
 * @param {number} n
 */
 function printPatternDown(n) {
    let pattern = "";
    if (n === 0) return;
    for (let i = 1; i <= n; i++) {
      pattern += i;
    }
    console.log(pattern);
    printPatternDown(n - 1);
  }
  
  printPatternDown(4);
  