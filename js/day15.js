/**
Words Concatenation (hard)#
Given a string and a list of words, find all the starting indices of substrings in the given string that are a concatenation of all the given words exactly once without any overlapping of words. It is given that all words are of the same length.

Example 1:0, 3, 6
Input: String="catfoxcat", Words=["cat", "fox"]
Output: [0, 3]
Explanation: The two substring containing both the words are "catfox" & "foxcat".

Example 2:
Input: String="catcatfoxfox", Words=["cat", "fox"]
Output: [3]
Explanation: The only substring containing both the words is "catfox".
 */
/**
 *
 * @param {string} str
 * @param {string[]} words
 */
function find_word_concatenation(str, words) {
  const word_freq_map = {};

  for (let w_i = 0; w_i < words.length; w_i++) {
    const current_word = words[w_i];
    if (!(current_word in word_freq_map)) {
      word_freq_map[current_word] = 0;
    }
    word_freq_map[current_word] += 1;
  }
  
  const start_indexes = [],
    word_count = words.length,
    word_length = words[0].length;

  for (
    let start_i = 0;
    start_i < (str.length - word_length * word_count) + 1;
    start_i++
  ) {
    const word_seen = {};

    for (let check_i = 0; check_i < word_count; check_i++) {
      const word_start_i = start_i + check_i * word_length;
      const current_word = str.substring(
        word_start_i,
        word_start_i + word_length
      );

      if (!(current_word in word_freq_map)) {
        break;
      }

      if (!(current_word in word_seen)) {
        word_seen[current_word] = 0;
      }
      word_seen[current_word] += 1;

      if (word_seen[current_word] > word_freq_map[current_word]) {
        break;
      }

      if (check_i + 1 === word_count) {
        start_indexes.push(start_i);
      }
    }
  }
  return start_indexes;
}
console.log(find_word_concatenation("catfoxcat", ["cat", "fox"]));
console.log(find_word_concatenation("catcatfoxfox", ["cat", "fox"]));
