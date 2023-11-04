/**
Given a string and a pattern, find the smallest substring in the g
iven string which has all the character occurrences of the given pattern.

Example 1:
Input: String="aabdec", Pattern="abc"
Output: "abdec"
Explanation: The smallest substring having all characters of the pattern is "abdec"

Example 2:
Input: String="aabdec", Pattern="abac"
Output: "aabdec"
Explanation: The smallest substring having all character occurrences of the pattern is "aabdec"

Example 3:
Input: String="abdbca", Pattern="abc"
Output: "bca"
Explanation: The smallest substring having all characters of the pattern is "bca".

Example 4:
Input: String="adcad", Pattern="abc"
Output: ""
Explanation: No substring in the given string has all characters of the pattern.
*/

/**
 *
 * @param {string} str
 * @param {string} pattern
 * @returns {srting} smallest substring that contains pattern
 */
function find_substring(str, pattern) {
  if (pattern.length > str.length || str.length === 0 || pattern.length === 0)
    return "";

  const p_map = new Map();
  for (let p_i = 0; p_i < pattern.length; p_i++) {
    const current_char = pattern[p_i];
    if (!p_map.has(current_char)) {
      p_map.set(current_char, 0);
    }
    p_map.set(current_char, p_map.get(current_char) + 1);
  }

  let window_start = 0;
  let sub_arr_start_index = Infinity;
  let min_length = str.length + 1;
  let matched_cond = 0;

  for (let window_end = 0; window_end < str.length; window_end++) {
    const right_char = str[window_end];
    if (p_map.has(right_char)) {
      p_map.set(right_char, p_map.get(right_char) - 1);
      if (p_map.get(right_char) >= 0) matched_cond += 1;
    }

    while (matched_cond === pattern.length) {
      const window_size = window_end - window_start + 1;
      if (min_length > window_size) {
        min_length = window_size;
        sub_arr_start_index = window_start;
      }

      const left_char = str[window_start];
      if (p_map.has(left_char)) {
        if (p_map.get(left_char) === 0) matched_cond -= 1;
        p_map.set(left_char, p_map.get(left_char) + 1);
      }
      window_start++;
    }
  }
  return str.substring(sub_arr_start_index, sub_arr_start_index + min_length);
}
console.log(find_substring("adobecodebanc", "abc"));
