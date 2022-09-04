// REVISION PATTERN : Subsets

// get the unique subsets from provided distinct array of nums
const findSubsets = (nums) => {
  const subsets = [];
  subsets.push([]);

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const subsetLength = subsets.length;
    for (let k = 0; k < subsetLength; k++) {
      const copiedSubset = subsets[k].slice(0);
      copiedSubset.push(currentNumber);
      subsets.push(copiedSubset);
    }
  }
  return subsets;
};

let result = findSubsets([1, 3]);
console.log(...result);

// get the unique subsets from provided array of nums that can contain duplicates
const findSubsets2 = (nums) => {
    const subsets = [];
    let startIndx = 0, endIndx = 0;
    subsets.push([]);

    for(let i = 0; i < nums.length; i++) {
        startIndx = 0;
        const currentNumber = nums[i]
        const previousNumber = nums[i - 1]
        // check if duplicate
        if(i > 0 && currentNumber ===  previousNumber) {
            startIndx = endIndx + 1;
        }

        endIndx = subsets.length - 1;

        for(let k = startIndx; k < endIndx + 1; k++) {
            const copiedSubset = subsets[k].slice(0);
            copiedSubset.push(currentNumber);
            subsets.push(copiedSubset);
        }

    }
    return subsets;
};
result = findSubsets2([1, 3,3]);
console.log(...result);