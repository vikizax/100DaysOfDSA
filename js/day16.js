/**
 * Two Pointers Pattern !!
 * In problems where we deal with sorted arrays (or LinkedLists) and
 * need to find a set of elements that fulfill certain constraints,
 * the Two Pointers approach becomes quite useful.
 * The set of elements could be a pair, a triplet or even a subarray.
 */

/**
Given an array of integers nums (sorted) and an integer target, 
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
  let min_i = 0;
  let max_i = nums.length - 1;

  let pair_i = [];

  while (min_i !== max_i) {
    const sum = nums[min_i] + nums[max_i];
    if (sum === target) {
      pair_i = [min_i, max_i];
      break;
    }

    if (sum > target) {
      max_i -= 1;
    }

    if (sum < target) {
      min_i += 1;
    }
  }

  return pair_i;
}

console.log(twoSum([2, 7, 11, 15], 9), "== [0,1]");
console.log(twoSum([2,3,4], 6), "== [0,2]");