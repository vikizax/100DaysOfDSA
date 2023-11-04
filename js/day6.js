// prime from n to m  : print if number is prime or not till
/**
 * @param {number[]} arr array of numbers
 * @param {number} n length of arr
 * @returns {string[]}
 */
function checkPrimeNaive(arr, n) {
  const isPrimeStack = [];
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 1; j <= arr[i]; j++) {
      if (arr[i] % j === 0) count++;
    }

    if (count > 2) isPrimeStack.push("Not Prime");
    else isPrimeStack.push("Prime");
  }
  return isPrimeStack;
}

// console.log(checkPrimeNaive([1, 8, 6, 3, 11, 19], 6));

/**
 * @param {number[]} arr array of numbers
 * @param {number} n length of arr
 * @returns {string[]}
 */
function checkPrimeOptimsed(arr, n) {
  const isPrimeStack = [];
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 2; j * j <= arr[i]; j++) {
      if (arr[i] % j === 0) {
        count++;
        break;
      }
    }
    if (arr[i] === 0 || arr[i] === 1) {
      isPrimeStack.push("Not Prime");
      continue;
    }
    if (count > 0) isPrimeStack.push("Not Prime");
    else isPrimeStack.push("Prime");
  }
  return isPrimeStack;
}

// console.log(checkPrimeOptimsed([1, 2, 8, 6, 3, 11, 19], 6));

// print all prime numbers between a range
function isPrime(n) {
  if (n === 0 || n === 1) return false;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
/**
 *
 * @param {number} n start
 * @param {number} m end
 */
function primeNumbersInRange(n, m) {
  for (let i = n; i <= m; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

// primeNumbersInRange(0, 10);



