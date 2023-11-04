/**
Problem Statement#
We are given an unsorted array containing numbers taken from the range 1 to ‘n’. The array can have duplicates, which means some numbers will be missing. Find all those missing numbers.

Example 1:
Input: [2, 3, 1, 8, 2, 3, 5, 1]
Output: 4, 6, 7
Explanation: The array should have all numbers from 1 to 8, due to duplicates 4, 6, and 7 are missing.

Example 2:
Input: [2, 4, 1, 2]
Output: 3
*/
/**
 *
 * @param {number[]} nums
 * @returns
 */

function find_missing_numbers_(nums) {
  const missingNumbers = [];
  const arrayMarker = new Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    const markedIdx = nums[i] - 1;
    arrayMarker[markedIdx] = nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    if (arrayMarker[i] === 0) missingNumbers.push(i + 1);
  }

  return missingNumbers;
}

function find_missing_numbers_optimised(nums) {
  const missingNumbers = [];
  let i = 0;
  while (i < nums.length) {
    const swapIdx = nums[i] - 1;
    if (nums[i] !== nums[swapIdx]) {
      [nums[i], nums[swapIdx]] = [nums[swapIdx], nums[i]];
    } else {
      i += 1;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i !== nums[i] - 1) missingNumbers.push(i + 1);
  }

  return missingNumbers;
}

console.log(find_missing_numbers_([2, 3, 1, 8, 2, 3, 5, 1]));
console.log(find_missing_numbers_([2, 4, 1, 2]));
console.log(find_missing_numbers_([2, 3, 2, 1]));

console.log(find_missing_numbers_optimised([2, 3, 1, 8, 2, 3, 5, 1]));
console.log(find_missing_numbers_optimised([2, 4, 1, 2]));
console.log(find_missing_numbers_optimised([2, 3, 2, 1]));
