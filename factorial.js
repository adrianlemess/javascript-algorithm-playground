const getFactorial = (n) => {
    if (n === 0) {
        return 1;
    }

    return n * getFactorial(n - 1);
}


[getFactorial(10),
getFactorial(0),
getFactorial(2),
getFactorial(5)]