// optimise solution 1 of day 6: using Sieve of Eratosthenes O(log(log(n)))
// count prime to < n
/**
 *
 * @param {number} n
 */
function countPrimes(n) {
  const result = checkPrime(n);
  return result;
}

/**
 *
 * @param {number} n
 * @returns {number} count of prime number till n
 */
function checkPrime(n) {
  let primeCount = 0;
  const isPrime = Array(n + 1).fill(true, 1, n + 1);

  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (j = i * 2; j <= n; j = j + i) {
        isPrime[j] = false;
      }
    }
  }

  for (let k = 2; k < n; k++) {
    if (isPrime[k]) {
      primeCount++;
    }
  }
  return primeCount;
}

// console.log(countPrimes(4));

// optimise solution 2 of day 6: using Sieve of Eratosthenes O(log(log(n)))
// count prime to < n
/**
 *
 * @param {number} n
 * @returns {number}
 */
function countPrimesOptimised(n) {
  const result = checkPrimeOptimised(n);
  return result;
}

/**
 *
 * @param {number} n
 * @returns {number} count of prime number till n
 */
function checkPrimeOptimised(n) {
  let primeCount = 0;
  const isPrime = Array(n + 1).fill(true, 1, n + 1);

  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      primeCount++;
      for (j = i * i; j <= n; j = j + i) {
        isPrime[j] = false;
      }
    }
  }

  return primeCount;
}

// console.log(countPrimesOptimised(10200101));

/**
 *
 * @param {number} n
 * @returns {number}
 */
function countPrimesOptimised2(n) {
  const result = checkPrimeOptimised2(n);
  return result;
}

function checkPrimeOptimised2(n) {
  const isPrime = Array(n + 1).fill(true, 1, n + 1);
  const prime = [];
  const smallestPrimeFactor = Array(n + 1);
  let primeCount = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      prime.push(i);
      primeCount++;
      smallestPrimeFactor[i] = i;
    }

    for (
      let j = 0;
      j < prime.length &&
      i * prime[j] < n &&
      prime[j] <= smallestPrimeFactor[i];
      j++
    ) {
      isPrime[i * prime[j]] = false;
      smallestPrimeFactor[i * prime[j]] = prime[j];
    }
  }

  return primeCount;
}

// console.log(countPrimesOptimised2(10200101));

// Using iterative approach print fibonacci series till < n
/**
 *
 * @param {number} n
 */
function printFibonacciSerie(n) {
  let a = 0,
    b = 1,
    c = 0;

  for (let i = 0; i < n; i++) {
    console.log(a);
    c = a + b;
    a = b;
    b = c;
  }
}

// printFibonacciSerie(10);

// Using iterative approach: Count digits in a number n
/**
 * @param {number} n
 * @returns {number}
 */
function countDigits(n) {
  let digitCount = 0;

  while (n != 0) {
    const currentLastDigit = n % 10;
    digitCount += currentLastDigit;
    n = Math.floor(n / 10);
  }

  return digitCount;
}

// console.log(countDigits(1239982123123));

// Print the digits of a given number n from left to right
// for eg:
// n= 123, outout: 1,2,3
// n = 23123, output: 2,3,1,2,3
/**
 *
 * @param {number} n
 */
function printDigitsLToR(n) {
  let temp_n = n;
  let base = 0;

  while (temp_n != 0) {
    base++;
    temp_n = Math.floor(temp_n / 10);
  }

  let ten_base = Math.pow(10, base - 1);

  while (ten_base != 0) {
    const currentDigit = Math.floor(n / ten_base);
    console.log(currentDigit);
    n %= ten_base;
    ten_base = Math.floor(ten_base / 10);
  }
}
// printDigitsLToR(1239982123123);

// Find the inverse of a number n, given that given number is valid for inverse
// eg: 132 will be 312
// /**
//  * @param {number} n
//  * @returns {number}
//  */
// function getInverse(n) {
//   const inverseArr = [];
//   const numArr = [];
//   let position = 0;
//   while (n != 0) {
//     const remainder = n % 10;
//     numArr.push(remainder);
//     n = Math.floor(n / 10);
//     inverseArr[remainder]
//   }

//   console.log(numArr);
// }

// /**
//  * @param {number} n
//  * @returns {number}
//  */
// function getDigitCount(n) {
//   let count = 0;
//   while (n != 0) {
//     count++;
//     n = Math.floor(n / 10);
//   }
//   return count;
// }

// getInverse(123765);