/**
 * Day 31 qns optimisation from O(n^2) to O(n) time complexity
 */ /**
 * @param {number} n given number
 * @param {number} k rotation
 */
/**
 *
 * @param {number[]} arr
 */
function circular_array_loop_exists(arr) {
  let seen = Array(arr.length).fill(true);
  for (let sIndex = 0; sIndex < arr.length; sIndex++) {
    // console.log(seen, sIndex);
    if (seen[sIndex] === false) continue;
    let isForward = arr[sIndex] >= 0;
    let slow = sIndex;
    let fast = sIndex;
    let isSlowValid = true;
    let isFastValid = true;
    while (true) {
      slow = next_index(arr, slow);
      fast = next_index(arr, next_index(arr, fast));
      //   console.log(slow, fast);
      isSlowValid = isValid(arr, sIndex, isForward, slow);
      isFastValid = isValid(arr, sIndex, isForward, fast);
      if (isSlowValid === false || isFastValid === false || slow === fast) {
        // console.log("INSIDE");
        // console.log(slow, fast);
        break;
      }
    }
    if (isSlowValid !== false && fast === slow) return true;
    else {
      seen[sIndex] = false;
      seen[slow] = false;
      seen[fast] = false;
    }
  }
  return false;
}

/**
 *
 * @param {number[]} arr - steps array
 * @param {number} pointer - index
 * @returns {number}
 */
function next_index(arr, pointer) {
  let next_index = (pointer + arr[pointer]) % arr.length;
  // turns negative index to positive representation
  if (next_index < 0) {
    next_index += arr.length;
  }
  return next_index;
}

/**
 *
 * @param {number[]} arr - steps array
 * @param {number} pointer - old index
 * @param {boolean} isForward - forward or backward
 * @param {number} newPointer - new index
 * @returns {number}
 */
function isValid(arr, startIndex, isForward, pointer, isSlow) {
  let direction = arr[pointer] >= 0;
  // if direction changes
  if (direction !== isForward) return false;
  // if the next index return back to the current
  if (pointer === startIndex) return false;

  return true;
}

console.log(circular_array_loop_exists([1, 2, -1, 2, 2]), "== true");
console.log(circular_array_loop_exists([2, 2, -1, 2]), "== true");
console.log(circular_array_loop_exists([2, 1, -1, -2]), "== false");
console.log(circular_array_loop_exists([-2, 1, -1, -2, -2]), "== false");
