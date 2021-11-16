import { LinkedList } from "./linkedList/singly-linkedList.js";
import { DoublyLinkedList } from "./linkedList/doubly-linkedList.js";
import { CircularLinkedList } from "./linkedList/circular-linkedList.js";
import {
  fibonacciSequence,
  addToArrayEnd,
  addToArrayBeginning,
  removeFromEnd,
  removeFromArrayBeginning,
  concatArrays,
  isEven,
} from "./arrays/singleDimensionalArray.js";

import {
  traverseTwoDimensionalArray,
  newMultidimensionalArray,
  traverseThreeDimensionalArray,
} from "./arrays/twoDimensionalArray.js";
const list = new DoublyLinkedList();
//LISTS

// list.prepend(3);
// list.prepend(4);
// list.prepend(5);
// list.append(2);
// list.append(9);
// console.log(list.search(2));
// list.delete(3);
// LinkedList.print(list.head);
// LinkedList.print(LinkedList.removeAtIndex(list.head, 0));
// DoublyLinkedList.print(list.head);

// const list = new CircularLinkedList();

// list.prepend(3);
// list.prepend(4);
// list.prepend(5);
// list.append(2);
// list.append(1);
// console.log(list);
// console.log(list.search(9));
// CircularLinkedList.print(list.head);

//ARRAYS

// One Dimensional Arrays

// fibonacciSequence();
// addToArrayEnd(7);
// let numbers = [1, 2, 3, 4, 5, 6];
// addToArrayBeginning(7, numbers);
// removeFromEnd(numbers);
// removeFromArrayBeginning(numbers);
// numbers.splice(4, 1);
// console.log(numbers);
// numbers.splice(3, 0, 6, 7, 8);
// console.log(numbers);

// multi dimensional arrays

// const numbers = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 0],
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 0],
// ];

// traverseTwoDimensionalArray(numbers);

// const ThreeMatrices = newMultidimensionalArray();
// console.log(ThreeMatrices);

// traverseThreeDimensionalArray(ThreeMatrices);
// console.log(concatArrays());

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// numbers.every(isEven);
// numbers.some(isEven);
// numbers.forEach((x) => console.log(x % 2 === 0));
//maps
// let result = numbers.map(isEven);
// console.log(result);
// filters
// const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);
// reduce
// const AddAllNumbers = numbers.reduce((previous, current) => previous + current);
// console.log(AddAllNumbers);

// for...of loop
// for (const n of numbers) {
//   console.log(n % 2 === 0 ? "even" : "odd");
// }

// @@ iterator

// let iterator = numbers[Symbol.iterator]();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// iterator = numbers[Symbol.iterator]();
// for (const n of iterator) {
//   console.log(n);
// }

// entries

// let aEntries = numbers.entries();
// console.log(aEntries.next().value);
// console.log(aEntries.next().value);
// console.log(aEntries.next().value);

// aEntries = numbers.entries();
// for (const n of aEntries) {
//   console.log(n);
// }

//fill method
// let numbersCopy = Array.of(1, 2, 3, 4, 5, 6);
// numbersCopy.fill(1, 3, 5);
// console.log(numbersCopy);

// let ones = Array(6).fill(1);
// console.log(ones);
