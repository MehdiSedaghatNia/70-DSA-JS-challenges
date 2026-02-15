//
//
// ------------------------------------
// Mehtod 1: (filter, indexOf)

const removeDuplicates = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};

// --Explanation
/*
Think of it as two questions for each item:
Question 1: When did this value FIRST appear in the array? (asked to indexOf)
Question 2: Where am I RIGHT NOW in the loop? (given by filter)
If the answers are the SAME:
This is the FIRST time we're seeing this value → KEEP IT
If the answers are DIFFERENT:
We've seen this value BEFORE → This is a DUPLICATE → REMOVE IT
Example with colors:
javascript
const colors = ['red', 'blue', 'red', 'green'];
// positions:   0      1       2       3
Going through each:
Position 0 ('red'):
First time 'red' appeared? At position 0
Where am I now? Position 0
Same? YES → KEEP
Position 1 ('blue'):
First time 'blue' appeared? At position 1
Where am I now? Position 1
Same? YES → KEEP
Position 2 ('red'):
First time 'red' appeared? At position 0
Where am I now? Position 2
Same? NO → REMOVE (it's a duplicate)
Position 3 ('green'):
First time 'green' appeared? At position 3
Where am I now? Position 3
Same? YES → KEEP
Result: ['red', 'blue', 'green']
*/

// ------------------------------------
// Mehtod 2: low-level(for loop, includes)

const removeDuplicates2 = (arr) => {
  const uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }

  return uniqueArr;
};

// ------------------------------------
// Mehtod 3: set

const removeDuplicates3 = (arr) => {
  return Array.from(new Set(arr));
};
