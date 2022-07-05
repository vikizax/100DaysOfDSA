/*
Problem Statement#
We are given an array containing n objects. Each object, when created, was assigned a unique number from the range 1 to n based on their creation sequence. This means that the object with sequence number 3 was created just before the object with sequence number 4.

Write a function to sort the objects in-place on their creation sequence number in O(n)
O(n)
 and without using any extra space. For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.

Example 1:
Input: [3, 1, 5, 4, 2]
Output: [1, 2, 3, 4, 5]

Example 2:
Input: [2, 6, 4, 3, 1, 5]
Output: [1, 2, 3, 4, 5, 6]
*/

/**
 *
 * @param {number[]} nums
 */
function cyclic_sort(nums) {
  let i = 0;
  while (i < nums.length) {
    const swapRangeIdx = nums[i] - 1;
    if (nums[i] !== nums[swapRangeIdx]) {
      [nums[i], nums[swapRangeIdx]] = [nums[swapRangeIdx], nums[i]];
    } else {
      i += 1;
    }
  }

  return nums;
}

// console.log(`${cyclic_sort([3, 1, 5, 4, 2])}`);
// console.log(`${cyclic_sort([2, 6, 4, 3, 1, 5])}`);
// console.log(`${cyclic_sort([1, 5, 6, 4, 3, 2])}`);

/**
Problem Statement#
We are given an array containing n distinct numbers taken from the range 0 to n. Since the array has only n numbers out of the total n+1 numbers, find the missing number.

Example 1:

Input: [4, 0, 3, 1]
Output: 2
Example 2:

Input: [8, 3, 5, 2, 4, 6, 0, 1]
Output: 7
*/
/**
 *
 * @param {number[]} nums
 * @returns {number}
 */
function find_missing_number(nums) {
  let iter = 0;

  while (iter < nums.length) {
    const swapIdx = nums[iter];
    if (nums[iter] < nums.length - 1 && nums[iter] !== nums[swapIdx]) {
      [nums[iter], nums[swapIdx]] = [nums[swapIdx], nums[iter]];
    } else {
      iter += 1;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i !== nums[i]) return i;
  }

  return null;
}

console.log(find_missing_number([4, 0, 3, 1]));
console.log(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1]));
