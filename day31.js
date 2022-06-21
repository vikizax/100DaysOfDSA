/** 
Cycle in a Circular Array (hard)#
We are given an array containing positive and negative numbers. 
Suppose the array contains a number ‘M’ at a particular index. 
Now, if ‘M’ is positive we will move forward ‘M’ indices and 
if ‘M’ is negative move backwards ‘M’ indices. 
You should assume that the array is circular which means two things:

If, while moving forward, we reach the end of the array, 
we will jump to the first element to continue the movement.
If, while moving backward, we reach the beginning of the array, 
we will jump to the last element to continue the movement.
Write a method to determine if the array has a cycle. 
The cycle should have more than one element and should follow 
one direction which means the cycle should not contain both 
forward and backward movements.

Example 1:

Input: [1, 2, -1, 2, 2]
Output: true
Explanation: The array has a cycle among indices: 0 -> 1 -> 3 -> 0

Example 2:

Input: [2, 1, -1, -2]
Output: false
Explanation: The array does not have any cycle.
*/
/**
 *
 * @param {number[]} arr
 */
function circular_array_loop_exists(arr) {
  for (let sIndex = 0; sIndex < arr.length; sIndex++) {
    let isForward = arr[sIndex] >= 0;
    let slow = sIndex;
    let fast = sIndex;

    while (true) {
      slow = next_index(arr, isForward, slow);
      fast = next_index(arr, isForward, fast);

      if (slow === -1 || fast === -1) break;

      fast = next_index(arr, isForward, fast);

      if (fast === -1 || slow === fast) break;
    }

    if (slow !== -1 && fast !== -1 && slow === fast) return true;
  }
  return false;
}

/**
 *
 * @param {number[]} arr - steps array
 * @param {boolean} isForward - forward or backward
 * @param {number} pointer - index
 * @returns {number}
 */
function next_index(arr, isForward, pointer) {
  let direction = arr[pointer] >= 0;

  if (direction !== isForward) return -1;

  let next_index = (pointer + arr[pointer]) % arr.length;

  // turns negative index to positive representation
  if (next_index < 0) {
    next_index += arr.length;
  }

  // if the next index return back to the current
  if (next_index === pointer) return -1;

  return next_index;
}

console.log(circular_array_loop_exists([1, 2, -1, 2, 2]), "== true");
console.log(circular_array_loop_exists([2, 2, -1, 2]), "== true");
console.log(circular_array_loop_exists([2, 1, -1, -2]), "== false");
