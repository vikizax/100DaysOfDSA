/**
Similar Problems
Problem Statement#
We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’. 
The array has only one duplicate but it can be repeated multiple times. 
Find that duplicate number without using any extra space. You are, however, allowed to modify the input array.

Example 1:
Input: [1, 4, 4, 3, 2]
Output: 4

Example 2:
Input: [2, 1, 3, 3, 5, 4]
Output: 3
 */

/**
 *
 * @param {number[]} nums
 * @returns
 */
function find_duplicate(nums) {
  if (nums === undefined || nums.length === 0 || nums === null) return -1;
  let iter = 0;
  while (iter < nums.length) {
    const swapIdx = nums[iter] - 1;
    if (nums[iter] !== nums[swapIdx]) {
      [nums[iter], nums[swapIdx]] = [nums[swapIdx], nums[iter]];
    } else {
      iter += 1;
    }
  }

  for (let iter = 0; iter < nums.length; iter++) {
    if (iter !== nums[iter] - 1) return nums[iter];
  }

  return -1;
}

/**
 * inner loop approach #2
 * 
   while (iter < nums.length) {
    if (nums[iter] !== iter + 1) {
      const swapIdx = nums[iter] - 1;
      if (nums[iter] !== nums[swapIdx]) {
        [nums[iter], nums[swapIdx]] = [nums[swapIdx], nums[iter]];
      } else {
        return nums[iter];
      }
    } else {
      iter += 1;
    }
  }
 */

// console.log(find_duplicate([1, 4, 4, 3, 2]));
// console.log(find_duplicate([2, 1, 3, 3, 5, 4]));
// console.log(find_duplicate([2, 4, 1, 4, 4]));

/** 
Problem Statement#
We are given an unsorted array containing n numbers taken from the range 1 to n.
The array has some numbers appearing twice, find all these duplicate numbers using constant space.

Example 1:
Input: [3, 4, 4, 5, 5]
Output: [4, 5]

Example 2:
Input: [5, 4, 7, 2, 3, 5, 3]
Output: [3, 5] */

/**
 * @param {number[]} nums
 * @returns {number[]}
 */
function find_all_duplicates(nums) {
  if (nums == null || nums == undefined || nums.length === 0) return [];
  const duplicateNumbers = [];
  let iter = 0;

  while (iter < nums.length) {
    const swapIdx = nums[iter] - 1;
    if (nums[iter] !== nums[swapIdx]) {
      [nums[iter], nums[swapIdx]] = [nums[swapIdx], nums[iter]];
    } else {
      iter += 1;
    }
  }

  for (let iter = 0; iter < nums.length; iter++) {
    if (iter !== nums[iter] - 1) duplicateNumbers.push(nums[iter]);
  }

  return duplicateNumbers;
}


console.log(find_all_duplicates([3, 4, 4, 5, 5]));
console.log(find_all_duplicates([5, 4, 7, 2, 3, 5, 3]));