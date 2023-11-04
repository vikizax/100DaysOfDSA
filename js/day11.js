/**
 Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

Example 1:

Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
Output: 6
Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.
 */

/**
 *
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
function length_of_longest_substring(arr, k) {
  let window_start = 0;
  let max_length = 0;
  let ones_count = 0;

  for (let window_end = 0; window_end < arr.length; window_end++) {
    if (arr[window_end] === 1) {
      ones_count += 1;
    }
    let window_size = window_end - window_start + 1;
    if (window_size - ones_count > k) {
      if (arr[window_start] === 1) ones_count -= 1;
      window_start++;
      window_size = window_end - window_start + 1;
    }
    max_length = Math.max(max_length, window_size);
  }

  return max_length;
}

// console.log(
//   length_of_longest_substring([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2),
//   "== 6"
// );
// console.log(
//   length_of_longest_substring([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3),
//   "== 9"
// );

/**
 Given a string with lowercase letters only, if you are allowed to replace no more than k letters with any letter, 
 find the length of the longest substring having the same letters after replacement.

Example 1:

Input: String="aabccbb", k=2
Output: 5
Explanation: Replace the two 'c' with 'b' to have the longest repeating substring "bbbbb".
 */

/**
 *
 * @param {string} str
 * @param {number} k
 * @returns {number}
 */
function length_of_longest_substring1(str, k) {
    let window_start = 0;
    let max_length = 0;
    const char_freq = new Map();
    let max_char_freq = 0;
    for(let window_end = 0; window_end < str.length; window_end++) {
        const right_char = str[window_end];
        if(!char_freq.has(right_char)) {
            char_freq.set(right_char, 0);
        }
        char_freq.set(right_char, char_freq.get(right_char) + 1);

        max_char_freq = Math.max(max_char_freq, char_freq.get(right_char));
        let window_size = window_end - window_start + 1;

        if(window_size - max_char_freq > k) {
            const left_char = str[window_start]
            char_freq.set(left_char, char_freq.get(left_char) - 1);
            window_start++;
            window_size-=1;
        }
        max_length = Math.max(max_length, window_size);
    }
    return max_length;
}

console.log(
  length_of_longest_substring1('aabccbb', 2),
  "== 5"
);
console.log(
  length_of_longest_substring1('abccde', 1),
  "== 3"
);