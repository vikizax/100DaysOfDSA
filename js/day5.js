/**
 *You have been given a vector/list 'ARR' consisting of ‘N’ integers. You are also given a positive integer ‘K’.
 *Let’s define a vector/list 'CONCAT' of size 'N * K' formed by concatenating 'ARR' ‘K’ times. For example, if 'ARR' = [0, -1, 2] and 'K' = 3, then 'CONCAT' is given by [0, -1, 2, 0, -1, 2, 0, -1, 2].
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
 *
 * optimse solution for huge dataset
 */
function maxSubSumKConcat(arr, n, k) {
  let maxSubSum;
  let arrSum = 0;
  if (k === 1) {
    return kadanes(arr, n, k);
  }

  // case when concat time is greater  1< k <=n times
  // cumulated sum of all elements in given array arr
  for (let i = 0; i < n; i++) {
    arrSum += arr[i];
  }

  if (arrSum <= 0) {
    maxSubSum = kadanes(arr, n, 2);
  } else {
    maxSubSum = kadanes(arr, n, 2);
    maxSubSum += (k - 2) * arrSum;
  }
  return maxSubSum;
}

function kadanes(arr, n, k) {
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
  return maxSum;
}
