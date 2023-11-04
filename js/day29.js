/**
 * Revision Time !: day10 -  day11
 */

// find the max amount of fruit a basket can contain
// you have two basket which will accept only one type of fruit with any number of amount
/**
 *
 * @param {string} arr - array of fruit types
 */
function find_max_fruit_count(arr) {
  const distinct = 2; // two basket with 1 each distinct fruit type (2)

  let window_start = 0;
  let max_count = 0;
  const fruitBasket = {};
  for (let window_end = 0; window_end < arr.length; window_end++) {
    const fruitType = arr[window_end];

    if (!(fruitType in fruitBasket)) {
      fruitBasket[fruitType] = 0;
    }
    fruitBasket[fruitType] += 1;

    while (Object.keys(fruitBasket).length > distinct) {
      const fruitType = arr[window_start];
      delete fruitBasket[fruitType];
      window_start += 1;
    }

    max_count = Math.max(max_count, window_end - window_start + 1);
  }
  return max_count;
}
// console.log(find_max_fruit_count(['A', 'B', 'C', 'A', 'C']), '== 3');
// console.log(find_max_fruit_count(['A', 'B', 'C', 'B', 'B', 'C']), '== 5');

// Given a string, find the length of the longest substring, which has all distinct characters.
/**
 *
 * @param {string} str alphabets array
 * @returns {number} max length of sub array with all unique alphabets
 */
function getLongestSubStringLength(str) {
  let window_start = 0;
  let maxCount = 0;
  const charMap = {};

  for (let window_end = 0; window_end < str.length; window_end++) {
    const current_char = str[window_end];

    if (current_char in charMap) {
      window_start = Math.max(window_start, charMap[current_char] + 1);
    }

    charMap[current_char] = window_end;

    maxCount = Math.max(maxCount, window_end - window_start + 1);
  }

  return maxCount;
}

// console.log(getLongestSubStringLength("aabccbb"), "== 3");
// console.log(getLongestSubStringLength("abbbb"), "== 2");
// console.log(getLongestSubStringLength("abccde"), "== 3");

// Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s,
// find the length of the longest contiguous subarray having all 1s.
/**
 *
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
function length_of_longest_substring(arr, k) {
  let window_start = 0;
  let maxSize = 0;
  let count_1 = 0;

  for (let window_end = 0; window_end < arr.length; window_end++) {
    if (arr[window_end] === 1) count_1 += 1;

    let window_size = window_end - window_start + 1;

    while (window_size - count_1 > k) {
      if (arr[window_start] === 1) count_1 -= 1;
      window_start += 1;
      window_size -= 1;
    }
    maxSize = Math.max(window_size, maxSize);
  }

  return maxSize;
}

// console.log(
//   length_of_longest_substring([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2),
//   "== 6"
// );
// console.log(
//   length_of_longest_substring([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3),
//   "== 9"
// );

// Given a string with lowercase letters only, if you are allowed to replace no more than k letters
// with any letter,
// find the length of the longest substring having the same letters after replacement.
/**
 *
 * @param {string} str
 * @param {number} k
 * @returns {number}
 */
function length_of_longest_substring1(str, k) {
  let window_start = 0;
  let max_size = 0;
  let char_map = {};
  let max_char_freq = 0;
  for (let window_end = 0; window_end < str.length; window_end++) {
    const current_char = str[window_end];
    if (!(current_char in char_map)) {
      char_map[current_char] = 0;
    }
    char_map[current_char] += 1;
    max_char_freq = Math.max(max_char_freq, char_map[current_char]);
    let window_size = window_end - window_start + 1;
    while (window_size - max_char_freq > k) {
      const current_char = str[window_start];
      char_map[current_char] -= 1;
      if (char_map[current_char] === 0) delete char_map[current_char];
      window_start += 1;
      window_size -= 1;
    }

    max_size = Math.max(max_size, window_size);
  }
  return max_size;
}

console.log(length_of_longest_substring1("aabccbb", 2), "== 5");
console.log(length_of_longest_substring1("abccde", 1), "== 3");
