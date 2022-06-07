/**
Given an array of integers nums (not sorted) and an integer target, 
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, 
and you may not use the same element twice.
You can return the answer in any order.


Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0,1]

> only one valid answer exists.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const y_map = {};

  for (let x = 0; x < nums.length; x++) {
    const num = nums[x];
    if (target - num in y_map) {
      return [y_map[target - num], x];
    }
    y_map[num] = x;
  }
  return y_map;
}

// console.log(twoSum([2, 7, 11, 15], 9), "== [0,1]");
// console.log(twoSum([3, 2, 4], 6), "== [1,2]");

/**
Given an array of sorted numbers, separate all duplicates from it in-place. 
You should not use any extra space; move all duplicates at the end of 
the array and after moving return the length of the subarray that has no duplicate in it.

Example 1:

Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].
*/
/**
 *
 * @param {number[]} arr
 */
function remove_duplicates(arr) {
  if (arr.length === 0) return 0;
  let next_non_dup = 1;
  let iter = 0;
  while (iter < arr.length) {
    if (arr[next_non_dup - 1] !== arr[iter]) {
      arr[next_non_dup] = arr[iter];
      next_non_dup += 1;
    }
    iter += 1;
  }

  return next_non_dup;
}

// console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]), "== 4");
// console.log(remove_duplicates([2, 2, 2, 11]), 2);

/**
Problem 1: Given an unsorted array of numbers and a target ‘key’, remove all instances 
of ‘key’ in-place and return the new length of the array.

Example 1:
Input: [3, 2, 3, 6, 3, 10, 9, 3], Key=3
Output: 4
Explanation: The first four elements after removing every 'Key' will be [2, 6, 10, 9].
 */
/**
 *
 * @param {number[]} arr
 * @param {number} key
 */
function removeOccurenceKLength(arr, key) {
  let next_num = 0;
  for (let iter = 0; iter < arr.length; iter++) {
    if (arr[iter] !== key) {
      arr[next_num] = arr[iter];
      next_num += 1;
    }
  }
  return next_num;
}
// console.log(removeOccurenceKLength([3, 2, 3, 6, 3, 10, 9, 3], 3), "== 4");

/**
Given two sorted arrays A and B, find the merged sorted array C by merging A and B.

Example:
A: [1, 2, 3, 4, 4]
B: [2, 4, 5, 5]
C: [1, 2, 2, 3, 4, 4, 4, 5, 5]
 */
/**
 *
 * @param {number[]} A
 * @param {number[]} B
 * @returns {number[]} merged A + B array
 */
function mergerTwoSortedArr(A, B) {
  let a_iter = 0;
  let b_iter = 0;
  const C = [];
  while (a_iter < A.length && b_iter < B.length) {
    if (A[a_iter] < B[b_iter]) {
      C.push(A[a_iter]);
      a_iter += 1;
    } else {
      C.push(B[b_iter]);
      b_iter += 1;
    }
  }

  while (a_iter < A.length) C.push(A[a_iter++]);
  while (b_iter < B.length) C.push(B[b_iter++]);

  return C;
}

console.log(
  mergerTwoSortedArr([1, 2, 3, 4, 4], [2, 4, 5, 5]),
  "== [1, 2, 2, 3, 4, 4, 4, 5, 5]"
);
