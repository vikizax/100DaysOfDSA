/**
Given a sorted array, create a new array containing squares of all 
the numbers of the input array in the sorted order.

Example 1:
Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]
 */
/**
 *
 * @param {number[]} arr
 */
function getSortedSquares(arr) {
  let min_i = 0;
  let max_i = arr.length - 1;
  const squares = Array(arr.length).fill(0);
  let sq_i = squares.length - 1;
  while (min_i <= max_i) {
    const min_i_sq = arr[min_i] * arr[min_i];
    const max_i_sq = arr[max_i] * arr[max_i];

    if (max_i_sq > min_i_sq) {
      squares[sq_i--] = max_i_sq;
      max_i -= 1;
    } else {
      squares[sq_i--] = min_i_sq;
      min_i += 1;
    }
  }
  return squares;
}

// console.log(getSortedSquares([-2,-1,0,2,3]), "== [0,1,4,4,9]")

/**
Given an array of unsorted numbers, find all unique triplets in it that add up to zero.
Also avoid duplicat triplets.
Example 1:

Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
Explanation: There are four unique triplets whose sum is equal to zero.

 */
/**
 * @param {number[]} arr - unsorted number array;
 */
function searchTriplets(arr) {
  // sorting arr in ascending order
  arr.sort((a, b) => a - b);
  const triplets = [];
  // x + y + z = 0
  // y + z = -x;

  for (let x = 0; x < arr.length; x++) {
    if (x > 0 && arr[x] === arr[x - 1]) {
      continue;
    } else {
      findPair(arr, -arr[x], x + 1, triplets);
    }
  }

  return triplets;
}

/**
 *
 * @param {number[]} arr - array of numbers
 * @param {number} target - negative target
 * @param {number} min_i - left most pointer
 * @param {number[]} triplets - reference array to keep triplets
 */
function findPair(arr, target, min_i, triplets) {
  let max_i = arr.length - 1;
  while (min_i < max_i) {
    const current_sum = arr[min_i] + arr[max_i];
    if (current_sum === target) {
      // found y + z = -x
      // keep [-(-x), y, z]
      triplets.push([-target, arr[min_i], arr[max_i]]);
      min_i += 1;
      max_i -= 1;

      // avoid duplicates
      while (min_i < max_i && arr[min_i] === arr[min_i - 1]) {
        min_i += 1;
      }
      while (min_i < max_i && arr[max_i] === arr[max_i + 1]) {
        max_i -= 1;
      }
    } else if (target > current_sum) {
      min_i += 1;
    } else {
      max_i -= 1;
    }
  }
}
