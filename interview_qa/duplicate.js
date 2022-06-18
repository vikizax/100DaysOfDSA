// write function to print all the duplicates letters/aplhabets along with their number of occurance.
/**
 *
 * @param {string} str
 */
function duplicate(str) {
  str = str.replace(/\s/g, "").toLowerCase();
  let keyMap = {};
  for (let i = 0; i < str.length; i++) {
    const currentAplha = str[i];
    if (!(currentAplha in keyMap)) {
      keyMap[currentAplha] = 0;
    }
    keyMap[currentAplha] += 1;
  }

  for (let [key, value] of Object.entries(keyMap)) {
    if (value > 1) {
      console.log(key, " ", value);
    }
  }
}

duplicate("Hello World! How are you?");
