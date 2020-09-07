function isAnagramString(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let str1Reversed = "";
  for (let char of str1) {
    str1Reversed = `${char}${str1Reversed}`;
  }

  console.log(str1Reversed);
  return str1Reversed === str2;
}

const isAnagramMap = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const map = new Map();

  for (let char of str1) {
    const count = map.has(char) ? map.get(char) + 1 : 1;
    map.set(char, count);
  }

  for (let char of str2) {
    if (!map.has(char)) return false;
    const count = map.get(char) - 1;
    if (count === 0) {
      map.delete(char);
      continue;
    }
    map.set(char, count);
  }

  return map.size === 0;
};

console.time("String isAnagram");
isAnagramString("ilegra", "argeli");
console.timeEnd("String isAnagram");

console.time("Map isAnagram");
isAnagramMap("ilegra", "argeli");
console.timeEnd("Map isAnagram");
