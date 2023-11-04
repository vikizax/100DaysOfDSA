/**
 * REVISION TIME ! Day 1 to Day 9!
 */

// maxium sub array sum!
/**
 *
 * @param {number[]} arr
 */
function maximumSubArraySum(arr) {
  let maxSum = -Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    maxSum = Math.max(maxSum, sum);
    if (sum < 0) sum = 0;
  }

  return maxSum;
}

// console.log(maximumSubArraySum([-1, 2, -2, 5, 7, -3, 1]), "=== 12");
// console.log(maximumSubArraySum([1, -2, -3, 4, -1, 2, 1]), "=== 6");

/**
 * @description print given pattern to n
 * 1
 * 1 2
 * 1 2 3
 * 1 2 3 ..n
 * @param {number} n
 */
function printPattern1(n) {
  if (n === 0) return;
  let pattern = "";
  printPattern1(n - 1);
  for (let i = 1; i <= n; i++) {
    pattern += i;
  }
  console.log(pattern);
}
// printPattern1(5);

/**
 * Given array of 0s and 1s
 * flip 0s of subarray to get the maxium number of 1s
 * flip bits : 1 -> 0, 0 -> 1
 * return the maxium number of 1s
 */
/**
 * @param {number[]} arr
 * @returns {number}
 */
function flipBitsMax1Count(arr) {
  let count1s = 0;
  let count0s = 0;
  let max0counts = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count0s -= 1;
      count1s += 1;
    }
    if (count0s < 0) {
      count0s = 0;
    }
    if (arr[i] === 0) {
      count0s += 1;
    }

    max0counts = Math.max(max0counts, count0s);
  }

  return count1s + max0counts;
}
// console.log(flipBitsMax1Count([1, 0, 0, 1, 0], 5), "== 4");
// console.log(flipBitsMax1Count([1, 1, 1, 0], 4), "== 4");
// console.log(flipBitsMax1Count([0, 0, 1, 0, 0], 5), "== 4");
// console.log(flipBitsMax1Count([1, 1, 0, 0, 1], 5), "== 5");

/**
 * Find the maximum subarray sum of subarray of an given array after K time concatination operation
 * for eg: K = 2, arr = [1,2]
 * concat arr is [1,2,1,2]
 * max sub arr sum will be 6
 */
/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
function maxSubSumKConcat(arr, k) {
  let concatLength = arr.length * k;
  let sum = 0;
  let maxSum = -Infinity;

  for (let i = 0; i < concatLength; i++) {
    sum += arr[i % arr.length];
    maxSum = Math.max(sum, maxSum);

    if (sum < 0) sum = 0;
  }
  return maxSum;
}
// console.log(maxSubSumKConcat([1, 3], 3), "== 12");
// console.log(maxSubSumKConcat([1, -2, 1], 2), "== 2");
// console.log(maxSubSumKConcat([7, -278, -38, -4, -5, 10], 7), "== 17");
// console.log(maxSubSumKConcat([-17, -278, -38, -4, -5, -67], 7), "== -4");
/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
function maxSubSumKConcatOptimised(arr, k) {
  let arrSum = 0;
  if (k === 1) {
    return kadanes(arr, k);
  }

  for (let x = 0; x < arr.length; x++) {
    arrSum += arr[x];
  }

  if (arrSum <= 0) {
    return kadanes(arr, 2);
  } else {
    let maxSum = kadanes(arr, 2);
    maxSum += (k - 2) * arrSum;
    return maxSum;
  }
}
/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
function kadanes(arr, k) {
  let concatLength = arr.length * k;
  let sum = 0;
  let maxSum = -Infinity;

  for (let i = 0; i < concatLength; i++) {
    sum += arr[i % arr.length];
    maxSum = Math.max(sum, maxSum);

    if (sum < 0) sum = 0;
  }
  return maxSum;
}
// console.log(maxSubSumKConcatOptimised([7, -278, -38, -4, -5, 10], 7), "== 17");

// Sieve of Eratosthenes O(log(log(n)))
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
  const isPrime = Array(n + 1).fill(true, 2, n + 1);
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
// console.log(countPrimesOptimised(1000202));

// Maximum sum subarray of size k
/**
 *
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
function getMaximumSumOfSizeK(arr, k) {
  let windowStart = 0;
  let max = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    sum += arr[windowEnd];

    if (windowEnd >= k - 1) {
      max = Math.max(max, sum);
      sum -= arr[windowStart];
      windowStart++;
    }
  }
  return max;
}
// console.log(getMaximumSumOfSizeK([2, 1, 5, 1, 3, 2], 3), "== 9");

// Smallest Subarray with a Greater sum
/**
 *
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */
function smallestSubArraySize(arr, target) {
  let windowStart = 0;
  let sum = 0;
  let minLength = Number.MAX_SAFE_INTEGER;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    sum += arr[windowEnd];

    while (sum >= target) {
      if (sum === target)
        minLength = Math.min(minLength, windowEnd - windowStart + 1);
      sum -= arr[windowStart];
      windowStart++;
    }
  }

  if (minLength < Number.MAX_SAFE_INTEGER) return minLength;
  return 0;
}
// console.log(smallestSubArraySize([2, 1, 5, 2, 3, 2], 7), "== 2");

// Given a string, find the length of the longest substring in
// it with no more than K distinct characters.
/**
 *
 * @param {string} str
 * @param {number} k
 */
function longest_substring_with_k_distinct(str, k) {
  let windowStart = 0;
  let charMap = {};
  let maxLength = Number.MIN_SAFE_INTEGER;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in charMap)) {
      charMap[rightChar] = 0;
    }
    charMap[rightChar] += 1;

    while (Object.keys(charMap).length > k) {
      const leftChar = str[windowStart];
      if (leftChar in charMap) charMap[leftChar] -= 1;
      if (charMap[leftChar] === 0) delete charMap[leftChar];
      windowStart++;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  if (Object.keys(charMap).length !== k) return -1;
  return maxLength;
}

// console.log(longest_substring_with_k_distinct("cbbebi", 3), "== 5");
// console.log(longest_substring_with_k_distinct("cbbebi", 10), "== -1");
// console.log(longest_substring_with_k_distinct("araaci", 1), "== 2");
// console.log(longest_substring_with_k_distinct("araaci", 2), "== 4");
// console.log(longest_substring_with_k_distinct("aabacbebebe", 3), "== 7");
// console.log(longest_substring_with_k_distinct("repggxrpnrvy", 12), "== -1");
