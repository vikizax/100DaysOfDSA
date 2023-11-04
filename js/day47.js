/**
Find the First K Missing Positive Numbers (hard)#
Given an unsorted array containing numbers and a number ‘k’, find the first ‘k’ missing positive numbers in the array.

Example 1:
Input: [3, -1, 4, 5, 5], k=3
Output: [1, 2, 6]
Explanation: The smallest missing positive numbers are 1, 2 and 6.

Example 2:
Input: [2, 3, 4], k=3
Output: [1, 5, 6]
Explanation: The smallest missing positive numbers are 1, 5 and 6.

Example 3:
Input: [-2, -3, 4], k=2
Output: [1, 2]
Explanation: The smallest missing positive numbers are 1 and 2.
 */

function find_first_k_missing_positive(arr, k) {
  let missingNumbers = [];

  let iter = 0;
  const length = arr.length;
  while (iter < arr.length) {
    const swapIdx = arr[iter] - 1;

    if (arr[iter] > 0 && arr[iter] <= length && arr[iter] !== arr[swapIdx]) {
      [arr[iter], arr[swapIdx]] = [arr[swapIdx], arr[iter]];
    } else {
      iter += 1;
    }
  }

  const extraNumbers = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (missingNumbers.length < k) {
      if (i !== arr[i] - 1) {
        missingNumbers.push(i + 1);
        extraNumbers.add(arr[i]);
      }
    }
  }

  iter = 1;
  while (missingNumbers.length < k) {
    const candidateNumber = iter + length;
    if (!extraNumbers.has(candidateNumber)) {
      missingNumbers.push(candidateNumber);
    }
    iter += 1;
  }

  return missingNumbers;
}

console.log(find_first_k_missing_positive([3, -1, 4, 5, 5], 3));
console.log(find_first_k_missing_positive([2, 3, 4], 3));
console.log(find_first_k_missing_positive([2, 3, 4, 7, 11], 5));
