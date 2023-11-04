// Quadruple Sum to Target (medium)#
// Given an array of unsorted numbers and a target number,
// find all unique quadruplets in it, whose sum is equal to the target number.

// Example 1:

// Input: [4, 1, 2, -1, 1, -3], target=1
// Output: [-3, -1, 1, 4], [-3, 1, 1, 2]
// Explanation: Both the quadruplets add up to the target.

/**
 * @param {number[]} nums
 * @param {number} target
 */
function fourSum(nums, target) {
  nums.sort((a, b) => a - b);
  let result = [];

  for (let first = 0; first < nums.length - 3; first++) {
    if (first > 0 && nums[first] === nums[first - 1]) continue;
    else {
      for (let second = first + 1; second < nums.length - 2; second++) {
        if (second > first + 1 && nums[second] === nums[second - 1]) continue;
        else {
          findPair(nums, target, first, second, result);
        }
      }
    }
  }
  return result;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} first
 * @param {number} second
 * @param {number[]} result
 */
function findPair(nums, target, first, second, result) {
  let left = second + 1;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[first] + nums[second] + nums[left] + nums[right];

    if (sum === target) {
      result.push([nums[first], nums[second], nums[left], nums[right]]);
      left++;
      right--;

      while (left < right && nums[left] === nums[left - 1]) left++;

      while (left < right && nums[right] === nums[right + 1]) right--;
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
}

// console.log(fourSum([4, 1, 2, -1, 1, -3], 1));
// console.log(fourSum([2, 0, -1, 1, -2, 2], 2));
console.log(fourSum([2, 2, 2, 2, 2], 8));
