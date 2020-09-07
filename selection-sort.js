const selectionSort = (arrayItems) => {
    if (!Array.isArray(arrayItems)) {
        throw new Error('is not an array');
    }
    const newArrayItems = [];
    for (let i = 0; i < arrayItems.length; i++) {
        let highestIndex = i; 

        for (let j = 0; j < arrayItems.length; j++) {
            if(arrayItems[j] > arrayItems[highestIndex]) { 
                highestIndex = j;
            }
        }
        newArrayItems.push(arrayItems[highestIndex]);
        arrayItems.splice(highestIndex, 1);
        i--;
    }

    return newArrayItems;
}


const arrayItems = [5, 1, 10, 20, 3];

selectionSort(arrayItems);