//
//
// ----------------------------------
// Method 1: (split + reverse + join)

const reverseStr = (str) => str.split("").reverse().join("");

// ----------------------------------
// Method 2: (for loop)

const reverseStr2 = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
};
