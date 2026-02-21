//
//

// ------------------------------------
// Method 1: (filter, includes)
const arrayIntersection = (arr1, arr2) => {
  const intersectionArr = arr1.filter((el) => arr2.includes(el));

  return intersectionArr;
};

// ------------------------------------
// Method 2: (reduce, includes)
const arrayIntersection2 = (arr1, arr2) => {
  const intersectionArr = arr1.reduce((acc, el) => {
    if (arr2.includes(el)) {
      acc.push(el);
    }
    return acc;
  }, []);

  return intersectionArr;
};

// ------------------------------------
// Method 3: (low-level: for loop, includes)
const arrayIntersection3 = (arr1, arr2) => {
  const intersectionArr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !intersectionArr.includes(arr1[i])) {
      intersectionArr.push(arr1[i]);
    }
  }

  return intersectionArr;
};

// ------------------------------------
// Method 4: (set, for loop, includes)
const arrayIntersection4 = (arr1, arr2) => {
  const set1 = new Set(arr1);
  const intersectionArr = [];

  for (let num of arr2) {
    if (set1.has(num)) {
      intersectionArr.push(num);
    }
  }

  return intersectionArr;
};

const result = arrayIntersection4([1, 2, 3, 4, 5], [1, 3, 5, 7, 9]);
console.log(result);
