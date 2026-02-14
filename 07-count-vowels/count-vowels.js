//
//
const vowels = ["a", "o", "e", "u", "i"];

// -------------------------------------
// Method 1: low level
const countVowels = (str) => {
  let numOfVowels = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      numOfVowels++;
    }
  }

  return numOfVowels;
};

// -------------------------------------
// Method 2: (split + filter + includes)

const countVowels2 = (str) => {
  const numOfVowels = str.split("").filter((el) => vowels.includes(el));
  return numOfVowels.length;
};

// -------------------------------------
// Method 3: (reduce)
// --if clause
const countVowels3 = (str) => {
  const numOfVowels = str
    .split("")
    .reduce((acc, curChar) => (vowels.includes(curChar) ? (acc += 1) : acc), 0);
  return numOfVowels;
};
// --ternary

const countVowels4 = (str) => {
  const numOfVowels = str.split("").reduce((acc, curChar) => {
    if (vowels.includes(curChar)) {
      acc += 1;
    }

    return acc;
  }, 0);

  return numOfVowels;
};

// -------------------------------------
// Method 4: (map + filter)
const countVowels5 = (str) => {
  const vowelchecks = str.split("").map((el) => vowels.includes(el));
  const trueVowels = vowelchecks.filter(Boolean);
  const numOfVowels = trueVowels.length;
  return numOfVowels;
};

// -------------------------------------
// Method 5: (filter + find)
const countVowels6 = (str) => {
  const numOfVowels = str
    .split("")
    .filter((el) => vowels.find((vowel) => vowel === el)).length;
  return numOfVowels;
};
