const orderBubbleSort = (arrayitems) => {
    if (!Array.isArray(arrayitems)) {
        throw new Error('Is not a arrayitems');
    };

    for (let i = 0; i < arrayitems.length; i++) {
        // arrayitems[i] = 5
        for (let j = i + 1; j < arrayitems.length; j++) {
            if (arrayitems[j] <= arrayitems[i] ) {
                [arrayitems[j], arrayitems[i]] = [arrayitems[i], arrayitems[j]]
            } 
        }
    }

}

const arrayitems = [5, 1, 10, 20, 3];
orderBubbleSort(arrayitems);