// check if given strings are anagram 
/**
 *
 * @param {string} str1
 * @param {string} str2
 */
function anagram(str1, str2) {
  let compare1 = str1.replace(/\s/g, "");
  let compare2 = str2.replace(/\s/g, "");

  let keyMap = {};
  let compareMap = {};
  for (let i = 0; i < compare1.length; i++) {
    const currentAplha = compare1[i];
    if (!(currentAplha in keyMap)) {
      keyMap[currentAplha] = 0;
    }
    keyMap[currentAplha] += 1;
  }

  for (let i = 0; i < compare2.length; i++) {
    const currentAplha = compare2[i];
    if (!(currentAplha in compareMap)) {
      compareMap[currentAplha] = 0;
    }
    if (keyMap[currentAplha] < compareMap[currentAplha]) return false;
  }

  return true;
}

console.log(anagram("eleven plus two", "twelve plus two"));
