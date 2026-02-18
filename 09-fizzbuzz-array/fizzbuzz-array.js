//
//
// -----------------------------------------
// Method 1: low level(forEach, for loop)

const fizzBuzzArray = (num) => {
  const numsArr = [];

  for (let i = 1; i <= num; i++) {
    numsArr.push(i);
  }

  numsArr.forEach((num, idx) => {
    if (num % 5 === 0 && num % 3 === 0) {
      numsArr[idx] = "FizzBuzz";
    } else if (num % 3 === 0) {
      numsArr[idx] = "Fizz";
    } else if (num % 5 === 0) {
      numsArr[idx] = "Buzz";
    }
  });

  return numsArr;
};

// -----------------------------------------
// Method 2: (map, for loop) {NOT to change original arr}

const fizzBuzzArray2 = (num) => {
  const numsArr = [];

  for (let i = 1; i <= num; i++) numsArr.push(i);

  const fizzBuzzResult = numsArr.map((num) => {
    if (num % 5 === 0 && num % 3 === 0) {
      return "FizzBuzz";
    } else if (num % 5 === 0) {
      return "Buzz";
    } else if (num % 3 === 0) {
      return "Fizz";
    } else {
      return num;
    }
  });

  return fizzBuzzResult;
};

// -----------------------------------------
// Method 2: (map, for loop, ternary)

const fizzBuzzArray3 = (num) => {
  const numsArr = [];

  for (let i = 1; i <= num; i++) numsArr.push(i);

  const fizzBuzzResult = numsArr.map((num) =>
    num % 15 === 0
      ? "FizzBuzz"
      : num % 3 === 0
        ? "Fizz"
        : num % 5 === 0
          ? "Buzz"
          : num,
  );

  return fizzBuzzResult;
};

// -----------------------------------------
// Method 4: (reduce + ternary)

const fizzBuzzArray4 = (num) => {
  const numsArr = [];

  for (let i = 1; i <= num; i++) numsArr.push(i);

  const fizzBuzzResult = numsArr.reduce((acc, curNum) => {
    acc.push(
      curNum % 15 === 0
        ? "FizzBuzz"
        : curNum % 3 === 0
          ? "Fizz"
          : curNum % 5 === 0
            ? "Buzz"
            : curNum,
    );

    return acc;
  }, []);

  return fizzBuzzResult;
};
