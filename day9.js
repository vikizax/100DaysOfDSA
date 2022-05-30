// Maximum sum subarray of size k
/**
 *
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
function getMaximumSumOfSizeK(arr, k) {
  let maxSum = -Infinity;
  let windowStart = 0;
  let currentWindowSum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    currentWindowSum += arr[windowEnd];

    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, currentWindowSum);
      currentWindowSum -= arr[windowStart];
      windowStart++;
    }
  }

  return maxSum;
}

// console.log(getMaximumSumOfSizeK([2, 1, 5, 1, 3, 2], 3), "== 9");

// Smallest Subarray with a Greater sum
// Input: [2, 1, 5, 2, 3, 2], S=7
// Output: 2
// length of smallest contigous subarray whose sum is greater or equal to s
/**
 *
 * @param {number[]} arr
 * @param {number} sum
 */
function smallestSubArraySize(arr, sum) {
  let windowStart = 0;
  let currentWindowSum = 0;
  let smallestSubArray = Infinity;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    currentWindowSum += arr[windowEnd];

    while (currentWindowSum >= sum) {
      smallestSubArray = Math.min(
        smallestSubArray,
        windowEnd - windowStart + 1
      );
      currentWindowSum -= arr[windowStart];
      windowStart++;
    }
  }
  if (smallestSubArray < Infinity) return smallestSubArray;
  return 0;
}

// console.log(smallestSubArraySize([2, 1, 5, 2, 3, 2], 7), "== 2");

// Given a string, find the length of the longest substring in it with no more than K distinct characters.
// Input: String="araaci", K=2
// Output: 4
// extends: should have exact distinct character else return -1
/**
 *
 * @param {string} str
 * @param {number} k
 */
function longest_substring_with_k_distinct(str, k) {
  let window_start = 0;
  const charFrequency = {};
  let max_length = 0;
  for (let window_end = 0; window_end < str.length; window_end++) {
    const rightChar = str[window_end];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar]++;

    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[window_start];
      charFrequency[leftChar]--;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
      window_start++;
    }
    max_length = Math.max(max_length, window_end - window_start + 1);
  }

  if (Object.keys(charFrequency).length !== k) return -1;

  return max_length;
}

console.log(longest_substring_with_k_distinct("cbbebi", 3), "== 5");
console.log(longest_substring_with_k_distinct("cbbebi", 10), "== -1");
console.log(longest_substring_with_k_distinct("araaci", 1), "== 2");
console.log(longest_substring_with_k_distinct("araaci", 2), "== 4");
console.log(longest_substring_with_k_distinct("aabacbebebe", 3), "== 7");
console.log(longest_substring_with_k_distinct("repggxrpnrvy", 12), "== -1");
