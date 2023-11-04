// Problem Statement#
// Given an array with positive numbers and a positive target number,
// find all of its contiguous subarrays whose product is less than the target number.
//
// Example 1:
// Input: [2, 5, 3, 10], target=30
// Output: [2], [5], [2, 5], [3], [5, 3], [10]
// Explanation: There are six contiguous subarrays whose product is less than the target.
/**
 *
 * @param {number[]} arr
 * @param {number} target
 * @returns {number[]}
 */
function find_product_subarrays(arr, target) {
  let current_product = 1;
  let left = 0;
  const triplets = [];

  for (let right = 0; right < arr.length; right++) {
    current_product *= arr[right];

    while (current_product >= target && left <= right) {
      current_product /= arr[left++];
    }

    let subarr = [];
    for (let i = right; i > left - 1; i--) {
      subarr.unshift(arr[i]);
      const toAdd = Array.from(subarr);
      triplets.push(toAdd);
    }
  }
  return triplets;
}

console.log(find_product_subarrays([2, 5, 3, 10], 30));
console.log(find_product_subarrays([8, 2, 6, 5], 50));
