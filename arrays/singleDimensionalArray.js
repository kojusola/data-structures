// fibonacci sequence

export const fibonacciSequence = () => {
  let fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;

  for (let i = 2; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  for (let i = 0; i < fibonacci.length; i++) {
    console.log(fibonacci[i]);
  }
  console.log(fibonacci);
};

//adding at the end of an array
export const addToArrayEnd = (value) => {
  let numbers = [1, 2, 3, 4, 5, 6];
  numbers[numbers.length] = value;
  //   numbers.push(8);
  console.log(numbers);
};

//insert in front

export const addToArrayBeginning = (value, arrayNumbers) => {
  for (let i = arrayNumbers.length; i >= 0; i--) {
    arrayNumbers[i] = arrayNumbers[i - 1];
  }
  arrayNumbers[0] = value;
  //   arrayNumbers.unshift(2);
  console.log(arrayNumbers);
};

// remove at the end

export const removeFromEnd = (arrayValue) => {
  arrayValue.pop();
  console.log(arrayValue);
};

//remove from the beginning

export const removeFromArrayBeginning = (arrayNumbers) => {
  for (let i = 0; i < arrayNumbers.length; i++) {
    arrayNumbers[i] = arrayNumbers[i + 1];
  }
  //   arrayNumbers.shift();
  reIndex(arrayNumbers);
};

export const reIndex = (arrayNumbers) => {
  let newArray = [];
  for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] !== undefined) {
      newArray.push(arrayNumbers[i]);
    }
    arrayNumbers[i] = arrayNumbers[i + 1];
  }
  console.log(newArray);
};

//Adding and removing Elements from a specific position

//splice method: can be used to remove an element from a specific position in an array;

// numbers.splice(5, 3) : Would remove three elements starting from index 5
//numbers.splice(5, 0, 6, 7, 8): would remove zero numbers from index 5 and add numbers 6,7,8 to the list.

// Concat Arrays

export const concatArrays = () => {
  const zero = 0;
  const positiveNumbers = [1, 2, 3];
  const negativeNumbers = [-3, -2, -1];
  let numbers = negativeNumbers.concat(zero, positiveNumbers);
  return numbers;
};

export const isEven = (x) => {
  // returns true if x is a multiple of 2.
  console.log(x);
  return x % 2 === 0 ? true : false;
};
