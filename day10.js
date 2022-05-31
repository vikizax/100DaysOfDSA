// You are visiting a farm to collect fruits. The farm has a single row of fruit trees. You will be given two baskets, and your goal is to pick as many fruits as possible to be placed in the given baskets.

// You will be given an array of characters where each character represents a fruit tree. The farm has following restrictions:

// Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
// You can start with any tree, but you can’t skip a tree once you have started.
// You will pick exactly one fruit from every tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
// Write a function to return the maximum number of fruits in both baskets.

// Example 1:

// Input: Fruit=['A', 'B', 'C', 'A', 'C']
// Output: 3
// Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

// Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
// Output: 5
// Explanation: We can put 3 'B' in one basket and two 'C' in the other basket.
// This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']

/** JAVA CODE :P
import java.util.*;

class MaxFruitCountOf2Types {
  public static int findLength(char[] arr) {
    int fruit_dist = 2;
    if(arr.length == 0) return 0;
    if(arr.length <= 2) return arr.length;

    HashMap <Character, Integer> f_feq = new HashMap<>();

    int basket_1 = 0;
    int max_fruits = 0;

    for(int basket_2 = 0; basket_2 < arr.length; basket_2++) {
      char b2_fruit = arr[basket_2];
      if(!f_feq.containsKey(b2_fruit)) {
        System.out.println("key assign " + b2_fruit);
        f_feq.put(b2_fruit, 0);
      }
      System.out.println(f_feq.get(b2_fruit));
      f_feq.replace(b2_fruit, f_feq.get(b2_fruit) + 1);

      System.out.println(f_feq.size());
      System.out.println(f_feq);

      while(f_feq.size() > fruit_dist) {
        char b1_fruit = arr[basket_1];
        f_feq.replace(b1_fruit, f_feq.get(b1_fruit) - 1);

        if(f_feq.get(b1_fruit) == 0) {
          f_feq.remove(b1_fruit);
        }
        basket_1 ++;
      }
      max_fruits = Math.max(max_fruits, basket_2 - basket_1 + 1);
    }
    return max_fruits;
  }
}
*/

/**
 *
 * @param {string[]} arr each el represents a tree (different fruit source)
 * @returns max fruit count
 */
function findLength(arr) {
  const fruit_dist = 2;
  if (arr.length == 0) return 0;
  if (arr.length <= 2) return arr.length;

  const f_freq = {};

  let basket_1 = 0;
  let max_fruits = 0;

  for (let basket_2 = 0; basket_2 < arr.length; basket_2++) {
    let b2_fruit = arr[basket_2];
    if (!(b2_fruit in f_freq)) {
      f_freq[b2_fruit] = 0;
    }
    f_freq[b2_fruit] += 1;

    while (Object.keys(f_freq).length > fruit_dist) {
      let b1_fruit = arr[basket_1];
      f_freq[b1_fruit] -= 1;

      if (f_freq[b1_fruit] === 0) {
        delete f_freq[b1_fruit];
      }
      basket_1++;
    }
    max_fruits = Math.max(max_fruits, basket_2 - basket_1 + 1);
  }
  return max_fruits;
}

// console.log(findLength(['A', 'B', 'C', 'A', 'C']), '== 3');
// console.log(findLength(['A', 'B', 'C', 'B', 'B', 'C']), '== 5');

// Given a string, find the length of the longest substring, which has all distinct characters.
/**
 *
 * @param {string} str alphabets array
 * @returns {number} max length of sub array with all unique alphabets
 */
function getLongestSubStringLength(str) {
  let window_start = 0;
  let max_length = 0;
  const aplh_freq = {};

  for (let window_end = 0; window_end < str.length; window_end++) {
    const right_alph = str[window_end];
    if (!(right_alph in aplh_freq)) {
      aplh_freq[right_alph] = 0;
    }

    aplh_freq[right_alph] += 1;

    while (aplh_freq[right_alph] > 1) {
      let left_alph = str[window_start];
      if (left_alph == right_alph) aplh_freq[right_alph] -= 1;

      if (aplh_freq[right_alph] === 0) {
        delete aplh_freq[right_alph];
      }
      window_start++;
    }

    max_length = Math.max(max_length, window_end - window_start + 1);
  }

  return max_length;
}

// console.log(getLongestSubStringLength("aabccbb"), "== 3");
// console.log(getLongestSubStringLength("abbbb"), "== 2");
// console.log(getLongestSubStringLength("abccde"), "== 3");

function getLongestSubStringLengthImproved(str) {
  let window_start = 0;
  let max_length = 0;
  const aplh_freq = {};

  for (let window_end = 0; window_end < str.length; window_end++) {
    const right_alph = str[window_end];
    if (right_alph in aplh_freq) {
      window_start = Math.max(window_start, aplh_freq[right_alph] + 1);
    }

    // store the index value: position it was found
    aplh_freq[right_alph] = window_end;

    max_length = Math.max(max_length, window_end - window_start + 1);
  }

  return max_length;
}

console.log(getLongestSubStringLengthImproved("aabccbb"), "== 3");
console.log(getLongestSubStringLengthImproved("abbbb"), "== 2");
console.log(getLongestSubStringLengthImproved("abccde"), "== 3");
