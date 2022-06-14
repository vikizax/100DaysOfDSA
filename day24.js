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

console.log(backspace_compare("xy#z", "xzz#"), "== true");
console.log(backspace_compare("xywrrmp", "xywrrmu#p"), "== true");
console.log(backspace_compare("ab##", "c#d#"), "== true");
console.log(backspace_compare("a#c", "b"), "== false");
console.log(backspace_compare("nzp#o#g", "b#nzp#o#g"), "== true");
console.log(backspace_compare("xywrrmp", "xywrrm#p"), "== false");
console.log(backspace_compare("bbbextm", "bbb#extm"), "== false");
