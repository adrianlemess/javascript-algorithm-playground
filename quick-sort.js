const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  } else {
    let pivo = arr.shift();
    let menores = arr.filter((test) => test <= pivo);
    let maiores = arr.filter((test) => test > pivo);
    return [...quickSort(menores), pivo, ...quickSort(maiores)];
  }
};

quickSort([2, 3, 1, 6, 4]);
