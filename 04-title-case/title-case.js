// ----------------------------------
// Method 1: (split + slice + map + join)

const titleCase = (str) => {
  const strCaps = str
    .trim()
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

  return strCaps;
};

// ----------------------------------
// Method 2:(split + slice + for loop + join)

const titleCase2 = (str) => {
  const strCaps = str.trim().toLowerCase().split(" ");

  for (let i = 0; i < strCaps.length; i++) {
    strCaps[i] = strCaps[i][0].toUpperCase() + strCaps[i].slice(1);
  }

  return strCaps.join(" ");
};

// ----------------------------------
// Method 3:(split + slice + forEach + charAt + join)

const titleCase3 = (str) => {
  const wordsArr = str.trim().toLowerCase().split(" ");

  const capsWords = [];
  wordsArr.forEach((word) => {
    capsWords.push(word.charAt(0).toUpperCase() + word.slice(1));
  });

  return result.join(" ");
};
