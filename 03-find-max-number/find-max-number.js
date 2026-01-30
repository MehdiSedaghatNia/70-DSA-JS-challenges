// Method 1: (Math.max)

const findMaxNumber = (numsArr) => {
  Math.max(...numsArr);
};

// ----------------------------------
// Method 2: (low level | for loop)

const findMaxNumber2 = (numsArr) => {
  let max = numsArr[0];

  for (let i = 1; i < numsArr.length; i++) {
    if (numsArr[i] > max) max = numsArr[i];
  }

  return max;
};

// ----------------------------------
// Method 3: (reduce | ternary)

const findMaxNumber3 = (numsArr) => {
  const maxNum = numsArr.reduce((acc, curNum) => (curNum > acc ? curNum : acc));

  return maxNum;
};

// ----------------------------------
// Method 4: (sort)

const findMaxNumber4 = (numsArr) => {
  const sortedArr = [...numsArr].sort((a, b) => b - a);
  const maxNum = sortedArr[0];
  return maxNum;
};
