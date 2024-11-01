const uniqueNumbers = new Set([2, 3, 4, 5]);
const numberSquareMap = new Map();

uniqueNumbers.forEach(num => {
  numberSquareMap.set(num, num * num);
});

console.log([...uniqueNumbers]);
console.log([...numberSquareMap]);
