function find_permutations(nums) {
  let numsLength = nums.length;
  const result = [];
  const permutations = [];
  permutations.push([]);

  for (let i = 0; i < numsLength; i++) {
    const currentNumner = nums[i];

    const perLength = permutations.length;

    for (let j = 0; j < perLength; j++) {
      const toUpdatePermutation = permutations.shift();

      for (let k = 0; k < toUpdatePermutation.length + 1; k++) {
        const newPermutation = toUpdatePermutation.slice(0);
        newPermutation.splice(k, 0, currentNumner);

        if (newPermutation.length === numsLength) {
          result.push(newPermutation);
        } else {
          permutations.push(newPermutation);
        }
      }
    }
  }
  return result;
}

console.log("Here are all the permutations:");
const result = find_permutations([1, 3, 5]);
result.forEach((permutation) => {
  console.log(permutation);
});
