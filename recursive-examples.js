// Sum the numbers of an array
const recursiveSum = (arrayItems) => {
  if (arrayItems.length === 1) {
    return arrayItems[arrayItems.length - 1];
  }

  const currentValue = arrayItems.shift();
  return currentValue + recursiveSum(arrayItems);
};

recursiveSum([1, 3, 10, 20, 120]);

// Count the numbers in a list

const countList = (list) => {
  if (!list[0]) return 0;
  list.shift();
  return 1 + countList(list);
};

// Find the highest number

[1, 20, 31, 123, 432, 12, 302];

const getHighestNumber = (arrayItems) => {
  if (arrayItems.length === 2) {
    if (arrayItems[0] > arrayItems[1]) {
      return arrayItems[0];
    } else {
      return arrayItems[1];
    }
  }
  const currentNumber = arrayItems.shift();
  const sub_max = getHighestNumber(arrayItems);

  if (currentNumber > sub_max) {
    return currentNumber;
  } else {
    return sub_max;
  }
};

var binarySearch = (arr, elem) => {
  if (arr.length === 1) {
    return arr[0];
  }

  var middleNumber = arr[arr.length / 2];
};
