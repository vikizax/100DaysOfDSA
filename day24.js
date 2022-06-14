/** 
Comparing Strings containing Backspaces (medium)#
Given two strings containing backspaces (identified by the character ‘#’), 
check if the two strings are equal.

Example 1:

Input: str1="xy#z", str2="xzz#"
Output: true
Explanation: After applying backspaces the strings become "xz" and "xz" respectively.
Example 2:

Input: str1="xy#z", str2="xyz#"
Output: false
Explanation: After applying backspaces the strings become "xz" and "xy" respectively.
*/
/**
 *
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean} true if str1 and str2 equals else false
 */
function backspace_compare(str1, str2) {
  let p1 = str1.length - 1;
  let p2 = str2.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    let skc1 = skip_count(str1, p1);
    let skc2 = skip_count(str2, p2);
    if (skc1 < 0 && skc2 < 0) return true;

    if (skc1 < 0 || skc2 < 0) return false;

    if (str1[skc1] !== str2[skc2]) return false;

    p1 = skc1 - 1;
    p2 = skc2 - 1;
  }

  return true;
}

/**
 * @param {string} str
 * @param {number} p
 * @returns {number} number of characters to skip
 */
function skip_count(str, p) {
  let backspace = 0;
  while (p >= 0) {
    if (str[p] === "#") {
      backspace += 1;
    } else if (backspace > 0) {
      backspace -= 1;
    } else {
      break;
    }
    p -= 1;
  }

  return p;
}

// console.log(backspace_compare("xy#z", "xzz#"), "== true");
// console.log(backspace_compare("xywrrmp", "xywrrmu#p"), "== true");
// console.log(backspace_compare("ab##", "c#d#"), "== true");
// console.log(backspace_compare("a#c", "b"), "== false");
// console.log(backspace_compare("nzp#o#g", "b#nzp#o#g"), "== true");
// console.log(backspace_compare("xywrrmp", "xywrrm#p"), "== false");
// console.log(backspace_compare("bbbextm", "bbb#extm"), "== false");

/** 
Minimum Window Sort (medium)
Given an array, find the length of the smallest subarray in 
it which when sorted will sort the whole array.

Example 1:
Input: [1, 2, 5, 3, 7, 10, 9, 12]
Output: 5
Explanation: We need to sort only the subarray [5, 3, 7, 10, 9] to make the whole array sorted

Example 2:
Input: [1, 3, 2, 0, -1, 7, 10]
Output: 5
Explanation: We need to sort only the subarray [1, 3, 2, 0, -1] to make the whole array sorted
*/
/**
 *
 * @param {number[]} arr
 */
function shortest_window_sort(arr) {
  let low = 0;
  let high = arr.length - 1;

  // first unsorted element from low side
  while (low < arr.length - 1 && arr[low] <= arr[low + 1]) {
    low += 1;
  }

  if (low === arr.length - 1) return 0; // means arr is sorted already

  // first unsorted elemet from the high side
  while (high > 0 && arr[high] >= arr[high - 1]) {
    high -= 1;
  }

  let min_value = Number.MAX_SAFE_INTEGER;
  let max_value = Number.MIN_SAFE_INTEGER;
  // get the min and max value within first unorder numbers sub array
  for (let index = low; index < high + 1; index++) {
    min_value = Math.min(min_value, arr[index]);
    max_value = Math.max(max_value, arr[index]);
  }

  // correct the sub array size from low end
  // by comparing min value in sub array from the low end
  // if low end value is greater than than the min value of sub arr then
  // increase the window size from low end
  while (low > 0 && arr[low - 1] > min_value) {
    low -= 1;
  }

  // same way current sub array size from high end
  // if the max value of sub array is greater than the high end value
  // increase the window size from high end
  while (high < arr.length - 1 && arr[high + 1] < max_value) {
    high += 1;
  }

  // return the sub array size (or window size)
  return high - low + 1;
}

console.log(shortest_window_sort([1, 2, 5, 3, 7, 10, 9, 12]), "== 5");
console.log(shortest_window_sort([1, 3, 2, 0, -1, 7, 10]), "== 5");
console.log(shortest_window_sort([1, 2, 3]), "== 0");
console.log(shortest_window_sort([3, 2, 1]), "== 3");
