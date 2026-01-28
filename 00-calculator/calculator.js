//
// Solution 1: (switch)

const calculator = (num1, num2, operator) => {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      throw new Error("Invalid Operator");
  }

  return result;
};

// --------------------------------------
// Solution 2: (if/else)

const calculator2 = (num1, num2, operator) => {
  let result;

  if (operator === "+") result = num1 + num2;
  if (operator === "-") result = num1 - num2;
  if (operator === "/") result = num1 / num2;
  if (operator === "*") result = num1 * num2;

  return result;
};

// --------------------------------------
// Solution 3: (eval())

const calculator3 = (num1, num2, operator) => {
  const expression = eval(`${num1} ${operator} ${num2}`);
  const result = eval(expression);
  return result;
};

// --------------------------------------
// Challenge Upgrade(by myself): A function that takes any number of arguments as number

// Solution 1: (reduce)

const calculator4 = (operator, ...numbers) => {
  return numbers.reduce((a, b) => eval(`${a} ${operator} ${b}`));
};

const result4 = calculator4("+", 5, 5, 5);
console.log(result4);

// --------------------------------------
// Solution 1: (eval())
const calculator5 = (operator, ...numbers) => {
  const expression = numbers.join(`${operator}`);
  const result = eval(expression);
  return result;
};

const result5 = calculator5("+", 4, 5, 6);
console.log(result5);
