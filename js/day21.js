// Problem Statement#
// Given an array containing 0s, 1s and 2s, sort the array in-place.
// You should treat numbers of the array as objects, hence, we can’t count 0s, 1s,
// and 2s to recreate the array.
// The flag of the Netherlands consists of three colors: red, white and blue; and
// since our input array also consists of three different numbers that
// is why it is called Dutch National Flag problem.
// Example 1:
// Input: [1, 0, 2, 1, 0]
// Output: [0, 0, 1, 1, 2]
/**
 *
 * @param {number[]} arr - array of 0s,1s and 2s only
 */
function dutch_flag_sort(arr) {
  let low = 0,
    high = arr.length - 1,
    iter = 0;

  while (iter <= high) {
    if (arr[iter] === 0) {
      [arr[iter], arr[low]] = [arr[low], arr[iter]];
      low++;
      iter++;
    } else if (arr[iter] === 2) {
      [arr[iter], arr[high]] = [arr[high], arr[iter]];
      high--;
    } else {
      iter++;
    }
  }

  return arr;
}
console.log(dutch_flag_sort([1, 0, 2, 1, 0]));

console.log(dutch_flag_sort([2, 2, 0, 1, 2, 0]));
