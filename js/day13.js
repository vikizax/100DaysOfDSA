/**
Given two strings s and p, return an array of all the start indices of p's anagrams in s. 
You may return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of 
a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
 */

/**
 *
 * @param {string} s - string that may contain the p anagram
 * @param {string} p - string pattern - having N! anagram
 * @returns {number[]} - array of start index of anagrams
 */
function findAnagrams(s, p) {
  const p_map = new Map();

  for (let p_i = 0; p_i < p.length; p_i++) {
    const current_c = p[p_i];
    if (!p_map.has(current_c)) {
      p_map.set(current_c, 0);
    }
    p_map.set(current_c, p_map.get(current_c) + 1);
  }

  let window_start = 0;
  let matched_cond = 0;
  const start_index_arr = [];

  for (let window_end = 0; window_end < s.length; window_end++) {
    const right_char = s[window_end];
    if (p_map.has(right_char)) {
      p_map.set(right_char, p_map.get(right_char) - 1);
      if (p_map.get(right_char) === 0) matched_cond += 1;
    }

    if (matched_cond === p_map.size) {
      start_index_arr.push(window_start);
    }

    const window_size = window_end - window_start + 1;

    if (window_size >= p.length) {
      const left_char = s[window_start];
      if (p_map.has(left_char)) {
        if (p_map.get(left_char) === 0) matched_cond -= 1;
        p_map.set(left_char, p_map.get(left_char) + 1);
      }
      window_start++;
    }
  }
  return start_index_arr;
}

console.log(findAnagrams("cbaebabacd", "abc"), "== [0,6]");
console.log(findAnagrams("abab", "ab"), "== [0,1,2]");
