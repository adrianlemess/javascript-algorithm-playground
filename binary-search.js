const binarySearch = (list, item) => {
  if (!Array.isArray(list)) {
    throw new Error("Is not a list");
  }
  let lowIndex = 0;
  let highIndex = list.length - 1;
  let findedElement = null;

  while (lowIndex <= highIndex) {
    middleIndex = Math.floor((lowIndex + highIndex) / 2);

    if (list[middleIndex] === item) {
      findedElement = middleIndex;
      break;
      // 52 <= 413
    } else if (list[middleIndex] <= item) {
      lowIndex = middleIndex;
    } else {
      highIndex = middleIndex;
    }
  }
  return findedElement;
};

const numbers = [1, 2, 20, 25, 52, 132, 220, 413, 1230, 5234];

const index52 = binarySearch(numbers, 52);
const index413 = binarySearch(numbers, 413);

const words = [
  "avocado",
  "banana",
  "blackberries",
  "figs",
  "grapefruit",
  "grapes",
  "jackfruit",
];

const indexGrapes = binarySearch(words, "grapes");
const indexAvocado = binarySearch(words, "avocado");

// Need to be ordenated
// Get the middle item and check if is more or lesscomo
