/**
Given a set of numbers that might contain duplicates, find all of its distinct subsets.

Example 1:

Input: [1, 3, 3]
Output: [], [1], [3], [1,3], [3,3], [1,3,3]
Example 2:

Input: [1, 5, 3, 3]
Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3], [3,3], [1,3,3], [3,3,5], [1,5,3,3] 
 */

function findSubsets(nums) {
  const subset = [];
  subset.push([]);

  let startIndex = 0,
    endIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    startIndex = 0;

    if (i > 0 && nums[i] === nums[i - 1]) {
      startIndex = endIndex + 1;
    }

    endIndex = subset.length - 1;

    for (let k = startIndex; k < endIndex + 1; k++) {
      const newSubset = subset[k].slice(0);
      newSubset.push(nums[i]);

      subset.push(newSubset);
    }
  }

  return subset;
}

console.log("Here is the list of subsets: ");
let result = findSubsets([1, 3, 3]);
result.forEach((subset) => {
  console.log(subset);
});

console.log("Here is the list of subsets: ");
result = findSubsets([1, 5, 3, 3]);
result.forEach((subset) => {
  console.log(subset);
});
