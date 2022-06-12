/**
 * Print the pattern to nth
 *
 *12345..n
 *1234..
 *123
 *12
 *1
 *12
 *123
 *1234
 *12345..n
 * @param {number} n
 */
function printPatternDownUp(n) {
  if (n == 1) {
    console.log(1);
    return;
  }
  let str = "";
  for (let i = 1; i <= n; i++) {
    str += i;
  }
  console.log(str);
  printPatternDownUp(n - 1);
  str = "";
  for (let i = 1; i <= n; i++) {
    str += i;
  }
  console.log(str);
}

// printPatternDownUp(6);

/**
 *You are given an array of integers ARR[] of size N consisting of zeros and ones.
 *You have to select a subset and flip bits of that subset.
 *You have to return the count of maximum one’s that you can obtain by
 *flipping chosen sub-array at most once.
 *A flip operation is one in which you turn 1 into 0 and 0 into 1.
 *For Example:
 *If you are given an array {1, 1, 0, 0, 1} then you will have to
 *return the count of maximum one’s you can obtain by flipping anyone chosen
 *sub-array at most once, so here you will clearly choose sub-array from
 *the index 2 to 3 and then flip it's bits.
 *So, the final array comes out to be {1, 1, 1, 1, 1}
 *which contains five ones and so you will return 5.
 * @param {number[]} arr array of numbers
 * @param {number} n length of the array
 * @returns {number} max occurance of 1
 */
function flipBitsMax1Count(arr, n) {
  let oneCounter = 0;
  let zeroCounter = 0;
  let maxZeroCounter = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] === 1) {
      zeroCounter--;
      oneCounter++;
      continue;
    }

    if (zeroCounter < 0) {
      zeroCounter = 0;
      zeroCounter += 1;
    } else {
      zeroCounter += 1;
    }
    maxZeroCounter = Math.max(zeroCounter, maxZeroCounter);
  }

  return maxZeroCounter + oneCounter;
}

console.log(flipBitsMax1Count([1, 0, 0, 1, 0], 5), "== 4");
console.log(flipBitsMax1Count([1, 1, 1, 0], 4), "== 4");
console.log(flipBitsMax1Count([0, 0, 1, 0, 0], 5), "== 4");
console.log(flipBitsMax1Count([1, 1, 0, 0, 1], 5), "== 5");

/**
 *You have been given a vector/list 'ARR' consisting of ‘N’ integers. You are also given a positive integer ‘K’.
 *Let’s define a vector/list 'CONCAT' of size 'N * K' formed by concatenating 'ARR' ‘K’ times. 
 For example, if 'ARR' = [0, -1, 2] and 'K' = 3, then 'CONCAT' is given by [0, -1, 2, 0, -1, 2, 0, -1, 2].
 *Your task is to find the maximum possible sum of any non-empty subarray (contagious) of 'CONCAT'.
 *For the first test case, vector 'CONCAT' is obtained by concatenating vector [1, 3] three times.
 *'CONCAT' = [1, 3, 1, 3, 1, 3]
 *The subarray with a maximum sum of 12 is [1, 3, 1, 3, 1, 3].
 *For the second test case, vector 'CONCAT' is obtained by concatenating vector [1, -2, 1] two times.
 *'CONCAT' = [1, -2, 1, 1, -2, 1]
 *The subarray with a maximum sum of 2 is [1, 1].
 * @param {number[]} arr arrau of numbers
 * @param {number} n size of array
 * @param {number} k times to concatinate
 * @returns number
 */
function maxSubSumKConcat(arr, n, k) {
  // drawback of this approch: will lead to timeout issue if the test case arr is very
  //large and as well as concatination times is greater.
  let sum = 0;
  let maxSum = 0;

  for (let i = 0; i < n * k; i++) {
    let access = i % n;
    sum += arr[access];
    maxSum = Math.max(sum, maxSum);
    if (sum < 0) {
      sum = 0;
    }
  }
  console.log("final maxSum: ", maxSum);
  return maxSum;
}

// console.log(maxSubSumKConcat([1, 3], 2, 3), "== 12");
// console.log(maxSubSumKConcat([1, -2, 1], 3, 2), "== 2");
// console.log(maxSubSumKConcat([7, -278, -38, -4, -5, 10], 6, 7), "== 17");
// console.log(maxSubSumKConcat([-17, -278, -38, -4, -5, -67], 6, 7), "== -4");
// console.log(maxSubSumKConcat([-1, -2], 2, 7), "== 0");
