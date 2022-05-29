// Find the inverse of a number n, given that given number is valid for inverse
// eg: 132 will be 312
/**
 * @param {number} n
 * @returns {number}
 */
function getInverse(n) {
  let position = 1;
  let inverseNum = 0;
  while (n != 0) {
    const remainder = n % 10;
    inverseNum += position * Math.pow(10, remainder - 1);
    n = Math.floor(n / 10);
    position++;
  }

  return inverseNum;
}

// console.log(getInverse(21345), "== 12354");

// Rotate a number n, k times
//where k can be -ve or +ve
// k +ve -> rotate from back to front
// k -ve -> rotate from front to back
// for eg: n = 2134 : k = 2, output= 3421
// for eg: n = 2156 : k = -2, output= 5621
/**
 * @param {number} n given number
 * @param {number} k rotation
 */
function rotateNumberToK(n, k) {
  const digitCount = countDigit(n);
  let rotatedNumber = 0;
  let rotateTo = k;
  if (k === digitCount || k === 0 || k === -digitCount) return n;
  if (k > digitCount || k < -digitCount) {
    k = k % digitCount;
    rotateTo = k;
  }
  if (k < 0) {
    rotateTo = digitCount + k;
  }

  // get the digits that is part of rotation
  let rotatedDigits = n % Math.pow(10, rotateTo);
  // remove the rotation digits from the original number -> get the remaining digits
  n = Math.floor(n / Math.pow(10, rotateTo));
  // multiply to the 10^(countDigit - rotateTo)
  rotatedDigits *= Math.pow(10, digitCount - rotateTo);
  // add the final rotateDigits result with the remaining digits
  rotatedNumber = rotatedDigits + n;
  return rotatedNumber;
}
/**
 * @param {number} n
 * @returns {number}
 */
function countDigit(n) {
  let count = 0;
  while (n != 0) {
    count++;
    n = Math.floor(n / 10);
  }
  return count;
}
console.log(rotateNumberToK(123, 0), "== 123");
console.log(rotateNumberToK(123, 3), "== 123");
console.log(rotateNumberToK(123, 1), "== 312");
console.log(rotateNumberToK(123, -1), "== 231");
console.log(rotateNumberToK(123, 6), "== 123");
console.log(rotateNumberToK(123, 4), "== 312");
console.log(rotateNumberToK(123, 5), "== 321");
console.log(rotateNumberToK(123, -4), "== 231");
 