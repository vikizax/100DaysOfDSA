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
const circular_array_loop_exists = function (arr) {
  for (let sIndex = 0; sIndex < arr.length; sIndex++) {
    if (arr[sIndex] === 0) continue;
    let slow = sIndex;
    let fast = sIndex;
    const isForward = arr[sIndex] >= 0;
    while (true) {
      slow = next_index(arr, isForward, slow);
      fast = next_index(arr, isForward, next_index(arr, isForward, fast));
      if (slow === -1 || fast === -1) break;
      if (slow === fast) return true;
    }
    // mark all the visited index belonging to path from sIndex
    slow = sIndex;
    while (next_index(arr, isForward, slow) !== -1) {
      arr[slow] = 0;
      slow = next_index(arr, isForward, slow);
    }
  }

  return false;
};

function next_index(arr, isForward, pointer) {
  if (pointer === -1) return -1;
  const direction = arr[pointer] >= 0;
  if (isForward !== direction) return -1;
  let next = (pointer + arr[pointer]) % arr.length;
  if (next < 0) {
    next = next + arr.length;
  }
  if (next === pointer) return -1;
  return next;
}

console.log(circular_array_loop_exists([1, 2, -1, 2, 2]), "== true");
console.log(circular_array_loop_exists([2, 2, -1, 2]), "== true");
console.log(circular_array_loop_exists([2, 1, -1, -2]), "== false");
