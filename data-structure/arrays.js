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
};
