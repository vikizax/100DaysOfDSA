/**
Problem Statement#
Given a set with distinct elements, find all of its distinct subsets.
 */

function findSubsets(nums) {
  const subsets = [];
  subsets.push([]);
  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];

    const subsetsLength = subsets.length;

    for (let j = 0; j < subsetsLength; j++) {
      const newSubset = subsets[j].slice(0);
      newSubset.push(currentNumber);
      subsets.push(newSubset);
    }
  }
  return subsets;
}

console.log(`Here is the list of subsets: `);
let result = findSubsets([1, 3]);
result.forEach((subset) => {
  console.log(subset);
});
console.log(`Here is the list of subsets: `);
result = findSubsets([1, 5, 3]);
result.forEach((subset) => {
  console.log(subset);
});