export const arrayMethods = () => {
  console.log("============================================");
  console.log("Fibonacci Sequence: first 20");
  const fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;
  fibonacci[2] = 1;
  for (let i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  console.log(fibonacci);
  console.log("============================================");
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log("Add to an Array");
  console.log("to the end");
  numbers.push(10);
  console.log(numbers);
  console.log("to the beginning");
  numbers.unshift(0);
  console.log(numbers);
  console.log("to the middle");
  numbers[11] = 11;
  numbers.splice(12, 0, 12, 13, 14);
  console.log(numbers);
  console.log("============================================");
  console.log("remove from an Array");
  console.log("from the end");
  numbers.pop();
  console.log(numbers);
  console.log("from the beginning");
  numbers.shift();
  console.log(numbers);
  console.log("from the middle");
  numbers.splice(4, 1);
  console.log(numbers);
  console.log("============================================");
  console.log("Two-dimensional and Multidimensional Array");
  console.log("============================================");
  console.log("Two-dimensional Array");
  let averageTemp = [
    [72, 75, 79, 79, 81, 81],
    [81, 79, 75, 75, 73, 73],
  ];
  console.log(averageTemp[0][0]);
  console.log(averageTemp[1][0]);
  console.log("print all from the two-dimensional array");
  for (let i = 0; i < averageTemp.length; i++) {
    for (let j = 0; j < averageTemp[i].length; j++) {
      console.log(averageTemp[i][j]);
    }
  }
  console.log("============================================");
  console.log("array methods");
  console.log("****slice: return a new array from specified index****");
  const str = "The quick brown fox jumps over the lazy dog.";
  const results = str.slice(0, 5);
  console.log(results);
  console.log("****Joining multiple arrays****");
  const positiveNumbers = [1, 2, 3];
  const negativeNumbers = [-3, -2, -1];
  let allNumbers = negativeNumbers.concat(0, positiveNumbers);
  console.log(allNumbers);
  console.log("****every method****");
  const hello = numbers.every((number) => {
    console.log(number);
    return number % 2 === 0;
  });
  console.log(hello);
  console.log("****some method****");
  const someResults = numbers.some((number) => {
    console.log(number);
    return number % 2 === 0;
  });
  console.log(someResults);
  console.log("****map method****");
  const mapResults = numbers.map((number) => {
    return number % 2 === 0;
  });
  console.log(mapResults);
  console.log("****filter method****");
  const filterResults = numbers.filter((number) => {
    return number % 2 === 0;
  });
  console.log(filterResults);
  console.log("****reduce method****");
  console.log("add all numbers");
  const reduceArray = [1, 2, 3, 4];
  const reduceResultOne = reduceArray.reduce(
    (acc, val) => (acc = acc + val),
    0
  );
  console.log(reduceResultOne);
  console.log("flatten Array");
  const reduceResultTwo = averageTemp.reduce((acc, val) => acc.concat(val), []);
  console.log(reduceResultTwo);
  console.log("Tallying Items");
  const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
  const reduceResultThree = fruits.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
  console.log(reduceResultThree);
  console.log("============================================");
  console.log("new Array Functionalities");
  for (const num of numbers) {
    console.log(num % 2 === 0 ? "even" : "odd");
  }
  console.log("***@@iterator***");
  let iterator = numbers[Symbol.iterator]();
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log("***ENTRIES***");
  let aEntries = numbers.entries();
  console.log(aEntries.next());
  console.log("***Keys***");
  let aKeys = numbers.keys();
  console.log(aKeys.next());
  console.log("***Values***");
  let aValues = numbers.values();
  console.log(aValues.next());
  console.log("***Creating a new array from an old one***");
  let newEvenNumbers = Array.from(numbers, (x) => x % 2 === 0);
  console.log(newEvenNumbers);
  console.log("***Creating an array***");
  let newNumbers = Array.of(10, 11, 12, 13);
  console.log(newNumbers);
  console.log("***Fill an array***");
  console.log(newNumbers.fill(0));
  console.log(newNumbers.fill(1, 2));
  console.log(newNumbers.fill(2, 1));
  console.log("============================================");
  console.log("Array Functions");
  console.log("***CopyWithin***");
  let copyArray = [1, 2, 3, 4, 5, 6];
  console.log(copyArray.copyWithin(0, 3));
  console.log(copyArray.copyWithin(1, 3, 5));
  console.log("***Sorting Array***");
  let sortArray = [5, 3, 4, 2, 6, 1];
  console.log(sortArray.sort((a, b) => a - b));
  function compare(a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }
  console.log(sortArray.sort(compare));
  console.log("***Sorting String Array***");
  const stringArray = ["john", "ana", "John", "Ana"];
  function stringCompare(a, b) {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
    return 0;
  }
  console.log(stringArray.sort(stringCompare));
};
