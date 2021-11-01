import { LinkedList } from "./linkedList/singly-linkedList.js";
import { DoublyLinkedList } from "./linkedList/doubly-linkedList.js";
import { CircularLinkedList } from "./linkedList/circular-linkedList.js";
import {
  fibonacciSequence,
  addToArrayEnd,
  addToArrayBeginning,
  removeFromEnd,
  removeFromArrayBeginning,
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

const ThreeMatrices = newMultidimensionalArray();
console.log(ThreeMatrices);

traverseThreeDimensionalArray(ThreeMatrices);
