/**
 *
 * Kadane’s Algorithm
 * The idea of Kadane’s algorithm is to maintain a maximum subarray sum ending at every index ‘i’ of the given array and
 * update the maximum sum obtained by comparing it with the maximum sum of the subarray ending at every index ‘i’.
 * At any given index ‘i’ of the array, we can either:
 * Append the element at index ‘i’ to the maximum sum subarray(so just add the element at index ‘i’ to the maximum you’ve found so far).
 * Start a new subarray starting from index ‘i’.
 * Appending an element at index ‘i’ to the maximum sum subarray obtained so far is beneficial
 * if the sum till index ‘i-1’ is non-negative, otherwise it is better to start a new subarray starting from index ‘i’ and
 * update the maximum sum obtained accordingly.
 */

/**
 *
 * @param {number[]} arr
 */
function maximumSubArraySum(arr) {
  let sum = 0;
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    maxSum = Math.max(sum, maxSum);
    if (sum < 0) {
      sum = 0;
    }
  }

  return maxSum;
}

console.log(maximumSubArraySum([-1, 2, -2, 5, 7, -3, 1]), "=== 12");
console.log(maximumSubArraySum([1, -2, -3, 4, -1, 2, 1]), "=== 6");
