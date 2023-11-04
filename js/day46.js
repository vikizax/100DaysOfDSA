/**
Find the Smallest Missing Positive Number (medium)#
Given an unsorted array containing numbers, find the smallest missing positive number in it.

Note: Positive numbers start from ‘1’.

Example 1:

Input: [-3, 1, 5, 4, 2]
Output: 3
Explanation: The smallest missing positive number is '3'
Example 2:

Input: [3, -2, 0, 1, 2]
Output: 4
Example 3:

Input: [3, 2, 5, 1]
Output: 4
*/

function find_first_smallest_missing_positive(nums) {
  if (nums === null || nums === undefined || nums.length === 0) return -1;

  let iter = 0;
  const length = nums.length;
  while (iter < length) {
    const swapIdx = nums[iter] - 1;

    if (
      nums[iter] > 0 &&
      nums[iter] <= length &&
      nums[iter] !== nums[swapIdx]
    ) {
      [nums[iter], nums[swapIdx]] = [nums[swapIdx], nums[iter]];
    } else {
      iter += 1;
    }
  }

  for(let i = 0; i < nums.length; i++) {
    if(i !== nums[i] - 1) return i + 1;
  }

  return -1;
}

console.log(find_first_smallest_missing_positive([-3, 1, 5, 4, 2]));
console.log(find_first_smallest_missing_positive([3, -2, 0, 1, 2]));
console.log(find_first_smallest_missing_positive([3, 2, 5, 1]));