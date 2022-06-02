/**
Given a string and a pattern, find out if the string contains any permutation of the pattern.
Permutation is defined as the re-arranging of the characters of the string. For example, “abc”
has the following six permutations:
abc
acb
bac
bca
cab
cba
If a string has ‘n’ distinct characters, it will have n!
n!  -> permutations.
 */

/**
 *
 * @param {string} str
 * @param {string} pattern
 * @returns {boolean}
 */
const find_permutation = function (str, pattern) {
  if (pattern.length === 0 || pattern.length > str.length) return false;

  let window_start = 0;
  let match_conditions = 0;

  const kMap = new Map();

  for (let patter_i = 0; patter_i < pattern.length; patter_i++) {
    const current_char = pattern[patter_i];
    if (!kMap.has(current_char)) kMap.set(current_char, 0);
    kMap.set(current_char, kMap.get(current_char) + 1);
  }

  for (let window_end = 0; window_end < str.length; window_end++) {
    const right_char = str[window_end];
    if (kMap.has(right_char)) {
      kMap.set(right_char, kMap.get(right_char) - 1);

      if (kMap.get(right_char) === 0) match_conditions++;
    }

    if (match_conditions === kMap.size) return true;

    const window_size = window_end - window_start + 1;

    if (window_size >= pattern.length ) {
      const left_char = str[window_start];
      if (kMap.has(left_char)) {
        if (kMap.get(left_char) === 0) match_conditions += 1;
        kMap.set(left_char, kMap.get(left_char) + 1);
      }
      window_start++;
    }
  }

  return false;
};

console.log(find_permutation("odicf", "dc"));
