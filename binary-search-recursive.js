
const binarySearch = (arrayItems, item, startIndex = 0, endIndex = arrayItems.length - 1) => {
    if (!Array.isArray(arrayItems)) {
        throw new Error('Is not a array');
    };        
    
    middleIndex = Math.floor((startIndex + endIndex) / 2)
    if (arrayItems.length === 0) return null;

    if (arrayItems[middleIndex] === item) {
        return middleIndex;
    } else if (arrayItems[middleIndex] <= item ){
        return binarySearch(arrayItems, item, middleIndex, endIndex)
    } else {
        return binarySearch(arrayItems, item, startIndex, middleIndex)
    }
}

const numbers = [1, 2, 20, 25, 52, 132, 220, 413, 1230, 5234];

const index413 = binarySearch(numbers, 413);
const index52 = binarySearch(numbers, 52);

const words = ['avocado', 'banana', 'blackberries', 'figs', 'grapefruit', 'grapes', 'jackfruit'];

const indexGrapes = binarySearch(words, 'grapes');
const indexAvocado = binarySearch(words, 'avocado');