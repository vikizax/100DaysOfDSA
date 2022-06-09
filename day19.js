// Problem Statement#
// Given an array of unsorted numbers and a target number,
//find a triplet in the array whose sum is as close to the target
//number as possible, return the sum of the triplet.
//If there are more than one such triplet, return the sum of the triplet with the smallest sum.

// Example 1:

// Input: [-2, 0, 1, 2], target=2
// Output: 1
// Explanation: The triplet [-2, 1, 2] has the closest sum to the target.

/**
 * @param {number[]} arr
 * @param {number} target_sum
 */
function triplet_sum_closest_to_target(arr, target_sum) {
  arr.sort((a, b) => a - b);
  let smallest_diff = Infinity;
  for (let x = 0; x < arr.length - 2; x++) {
    let left = x + 1;
    let right = arr.length - 1;

    while (left < right) {
      const current_diff = target_sum - arr[x] - arr[left] - arr[right];

      if (current_diff === 0) return target_sum;

      if (
        Math.abs(current_diff) < Math.abs(smallest_diff) ||
        (Math.abs(current_diff) === Math.abs(smallest_diff) &&
          current_diff > smallest_diff)
      ) {
        smallest_diff = current_diff;
      }

      if (current_diff > 0) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }
  return target_sum - smallest_diff;
}

// console.log(triplet_sum_closest_to_target([1, 0, 1, 1], 100) , "=== 3");
// console.log(triplet_sum_closest_to_target([-3, -1, 1, 2], 1), "== 0");
// console.log(triplet_sum_closest_to_target([-2, 0, 1, 2], 2), "== 1");

// Problem Statement#
// Given an array arr of unsorted numbers and a target sum, count all
// triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k
// are three different indices. Write a function to return the count of such triplets.

// Example 1:

// Input: [-1, 0, 2, 3], target=3
// Output: 2
// Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]
/**
 *
 * @param {number[]} arr
 * @param {number} target
 * @returns {number} count of triplet less than target
 */
function triplet_with_smaller_sum_count(arr, target) {
  arr.sort((a, b) => a - b);
  let triplet_count = 0;

  for (let x = 0; x < arr.length - 2; x++) {
    let left = x + 1;
    let right = arr.length - 1;
    // arr[x] + arr[y] + arr[z] < target
    // arr[y] + arr[z] < target - arr[x]
    while (left < right) {
      const current_target = target - arr[x];
      const current_pair_sum = arr[left] + arr[right];
      if (current_target > current_pair_sum) {
        triplet_count += right - left;
        left++;
      } else {
        right--;
      }
    }
  }

  return triplet_count;
}

// console.log(triplet_with_smaller_sum_count([-1, 0, 2, 3], 3));
// console.log(triplet_with_smaller_sum_count([-1, 4, 2, 1, 3], 5));

// instead of getting the count of such triplets return the array of triplet instead

function triplet_with_smaller_sum(arr, target) {
  arr.sort((a, b) => a - b);
  const triplets = [];

  for (let x = 0; x < arr.length - 2; x++) {
    let left = x + 1;
    let right = arr.length - 1;
    // arr[x] + arr[y] + arr[z] < target
    // arr[y] + arr[z] < target - arr[x]
    while (left < right) {
      const current_target = target - arr[x];
      const current_pair_sum = arr[left] + arr[right];
      if (current_target > current_pair_sum) {
        for (let i = right; i > left; i--) {
          triplets.push([arr[x], arr[left], arr[i]]);
        }
        left++;
      } else {
        right--;
      }
    }
  }

  return triplets;
}

console.log(
  triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5),
  "== [ [ -1, 1, 4 ], [ -1, 1, 3 ], [ -1, 1, 2 ], [ -1, 2, 3 ] ]"
);
