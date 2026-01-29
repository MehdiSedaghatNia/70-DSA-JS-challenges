//

// Method 1: (Lower Lvl method => for loop)

function countOccurrences(str, char) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

// ------------------------------------
// Method 2: (split)

const countOccurrences2 = (str, char) => str.split(char).length - 1;

// ------------------------------------
// Method 3: (Array.from, filter)

const countOccurrences3 = (str, char) => {
  const strArr = Array.from(str);
  const matchingCharArr = strArr.filter((el) => el === char);
  const count = matchingCharArr.length;
  return count;
};

// ------------------------------------
// Method 4: (spread, reduce, ternary)

const countOccurrences4 = (str, char) => {
  const strArr = [...str];

  const count = strArr.reduce((accumulator, currentChar) => {
    if (currentChar === char) {
      return accumulator + 1;
    } else {
      return accumulator;
    }
  }, 0);

  return count;
};

// OR (Ternary)
const countOccurrences5 = (str, char) =>
  str.split("").reduce((acc, charArr) => (charArr === char ? acc + 1 : acc), 0);

// ------------------------------------
