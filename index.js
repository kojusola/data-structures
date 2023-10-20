// import { LinkedList } from "./linkedList/singly-linkedList.js";
// import { DoublyLinkedList } from "./linkedList/doubly-linkedList.js";
// import { CircularLinkedList } from "./linkedList/circular-linkedList.js";
// import {
//   fibonacciSequence,
//   addToArrayEnd,
//   addToArrayBeginning,
//   removeFromEnd,
//   removeFromArrayBeginning,
//   concatArrays,
//   isEven,
// } from "./arrays/singleDimensionalArray.js";
// import { numberOfItems } from "./questions/questionOne.js";

// import {
//   traverseTwoDimensionalArray,
//   newMultidimensionalArray,
//   traverseThreeDimensionalArray,
// } from "./arrays/twoDimensionalArray.js";
// const list = new DoublyLinkedList();
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

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

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

// const names = ["bob", ["steve", "michael", "bob", "chris"]];
// const result = numberOfItems(names, "chris");
// console.log(result);

// const testArrayCompare = [
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 5, 4],
//   [1, 2, 3, 4],
// ];

// function compare(test) {
//   const testArray = test.length;
//   for (let i = 0; i < test[0].length; i++) {
//     let each = test[0][i];
//     for (let j = 1; j < testArray; j++) {
//       console.log(each);
//       console.log(test[j][i]);
//       if (each == test[j][i]) {
//         console.log(true);
//       } else {
//         console.log(false);
//       }
//     }
//   }
// }
// compare(testArrayCompare);

// var findDisappearedNumbers = function (nums) {
//   const numsLength = nums.length + 1;
//   const allValues = [...Array(numsLength).keys()];
//   allValues.shift();
//   console.log(allValues);
//   const missing = allValues.filter((x) => !nums.includes(x));
//   console.log(missing);
//   return missing;
// };

// var missingNumber = function (nums) {
//   const numsLength = nums.length;
//   const allValues = [...Array(numsLength).keys()];
//   console.log(allValues);
//   const missing = allValues.filter((x) => !nums.includes(x));
//   console.log(missing[0]);
//   return missing[0];
// };

//  let hashTable = new Map();

//  for (let i = 0; i < nums.length; i++) {
//    hashTable.set(nums[i], true);
//  }

//  console.log(hashTable);

//  let result = [];

//  for (let i = 1; i <= nums.length; i++) {
//    if (!hashTable.has(i)) {
//      result.push(i);
//    }
//  }

//  return result;

// var findDisappearedNumbers = function (nums) {
//   let duplicateMap = {};
//   let results = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (!duplicateMap[nums[i]]) {
//       duplicateMap[nums[i]] = 0;
//     }
//     duplicateMap[nums[i]]++;
//   }
//   console.log(duplicateMap);
//   for (let i = 1; i <= nums.length; i++) {
//     if (!duplicateMap.hasOwnProperty(i)) {
//       results.push(i);
//     }
//   }
//   console.log(results);
//   return results;
// };

// findDisappearedNumbers([1, 1]);

// const node = {
//   value: 1,
//   next: null,
// };

// function createLinkedList(value) {
//   node.value = value;
//   node.next = null;
//   return node;
// }

// function append(node, value) {
//   let newNode = createLinkedList(value);
//   let current = node;
//   if (current.next === null) {
//     current.next = newNode;
//   } else {
//     while (current) {
//       if (current.next === null) {
//         current.next = newNode;
//         break;
//       }
//       current = current.next;
//     }
//   }
//   return node;
// }

// function prepend(node, value) {
//   let newNode = createLinkedList(value);
//   newNode.next = node;
//   node = newNode;
//   return node;
// }

// function deleteNode(node, value) {
//   let current = node;
//   if (current.value === value) {
//     node = current.next;
//     current = null;
//     return node;
//   } else {
//     while (current && current.next) {
//       if (current.next.value === value) {
//         current.next = current.next.next;
//         return node;
//       }
//       current = current.next;
//     }
//   }
// }

// function TraverseALinkedList(node) {
//   let current = node;
//   console.log(current.value);
//   while (current) {
//     console.log(current.value);
//     current = current.next;
//     console.log(current);
//   }
// }

// const result = createLinkedList(2);
// const appendedNode = append(result, 3);
// TraverseALinkedList(appendedNode);
// append(result, 4);
// prepend(result, 1);
// const logger = deleteNode(result, 3);
// console.log(logger);

// console.log(appendedNode);

// function sumOfNumbers(arrayOfNumbers) {
//   let total = 0;
//   console.log("Length of the array", arrayOfNumbers.length);
//   for (let i = 0; i < arrayOfNumbers.length; i++) {
//     total = total + arrayOfNumbers[i];
//   }
//   return total;
// }

// sumOfNumbers([
//   1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1,
//   2, 3, 4, 5, 1, 2, 3, 4, 90, 99, 100, 10000, 100000, 1000000, 10000000,
// ]);

// var maxProfit = function (prices) {
//   let result = 0;
//   for (let i = 0; i < prices.length; i++) {
//     let difference = 0;
//     for (let j = i; j < prices.length; j++) {
//       difference = Math.max(difference, prices[j] - prices[i]);
//       console.log("difference", prices[i] - prices[j]);
//     }
//     console.log(result, "result");
//     result = Math.max(result, difference);
//   }
//   console.log(result);
//   return result;
// };

// maxProfit([7, 1, 5, 3, 6, 4]);

// const uniqueValues = new Set();

// let current = head;

// while (current !== null) {
//   if (uniqueValues.has(current)) {
//     return true;
//   }
//   uniqueValues.add(current);
//   current = current.next;
// }

// return false;

// // middle

//    slow = fast = head;

//    while (fast && fast.next) {
//      slow = slow.next;
//      fast = fast.next.next;
//    }

//    return slow;

// // reversing of the linkedlist

//  slow = fast = head;

//    while(fast && fast.next){
//        slow = slow.next;
//        fast = fast.next.next;
//    }

//     return slow;
// Chinomso Johnson8:53 PM
//  let s = head, f = head;
//     while(f && f.next) {
//         s = s.next;
//         f = f.next.next;
//     }

//     // Reverse second half of list
//     let prev;
//     while(s) {
//         const temp = s.next;
//         s.next = prev;
//         prev = s;
//         s = temp;
//     }

//     // Compare sides of middle
//     let a = head, b = prev;
//     while(b) {
//         if(a.val !== b.val) return false;
//         a = a.next;
//         b = b.next;
//     }
//     return true;

// //https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
// const preorder = function(root,nodeArr){
//       if(root != null){
//         nodeArr.push(root);
//         preorder(root.left,nodeArr);
//         preorder(root.right,nodeArr);
//       }
//     }
// var flatten = function(root) {
//      let res = [];
//       preorder(root,res);

//       for(let i = 1; i < res.length ; i++){
//           res[i-1].right = res[i];
//           res[i-1].left = null;
//       }
//       return root;
// };

// //https://leetcode.com/problems/binary-tree-postorder-traversal/
// //https://leetcode.com/problems/binary-tree-preorder-traversal/
// //https://leetcode.com/problems/binary-tree-inorder-traversal/
// //https://leetcode.com/problems/longest-palindrome/submissions/
// //https://leetcode.com/problems/find-the-difference/
// //https://leetcode.com/problems/ransom-note/

// // keep a counter hash of available characters
//   const availableChars = {};

//   // add our available characters
//   for (const char of magazine) {
//     if (!(char in availableChars)) availableChars[char] = 0;

//     availableChars[char] += 1;
//   }
//   console.log(availableChars)
//   for (const char of ransomNote) {
//     // if the character is not available or has been depleted to zero, return false
//     if (!(char in availableChars) || availableChars[char] === 0) return false;

//     availableChars[char] -= 1;
//   }

//   // otherwise, we had enough letters from magazine to create ransomNote
//   return true;

function closestNumbers(numbers) {
  let minimumDifference = 0;
  let minimumDifferenceArray = [];
  let left = 0;
  let right = 1;
  numbers.sort((a, b) => a - b);
  console.log(numbers);

  while (right < numbers.length) {
    minimumDifferenceArray.push(Math.abs(numbers[left] - numbers[right]));
    console.log(minimumDifferenceArray);
    left = right;
    right++;
  }
  minimumDifference = minimumDifferenceArray.reduce(function (p, v) {
    return p < v ? p : v;
  });
  console.log(minimumDifference);
  for (let i = 0; i < numbers.length; i++) {
    if (Math.abs(numbers[i] - numbers[i + 1]) == minimumDifference) {
      console.log(numbers[i] + " " + numbers[i + 1]);
    }
  }
  return 0;
}

closestNumbers([5, 10, 40, 6, 8, 9, 20, 1]);

const isPossibleToRearrange = (l, r, subs, s) => {
  console.log(subs);
  let freq = {};
  for (let i = l; i <= r; i++) {
    freq[s[i]]++;
  }
  console.log(freq);
  let oddCounts = 0;

  let frequencyEntries = Object.entries(freq);
  console.log(frequencyEntries);
  for (let [character, count] of frequencyEntries) {
    if (count % 2 == 1) {
      ++oddCounts;
      console.log(oddCounts);
    }
  }
  let changes = 0;
  if (oddCounts % 2 == 0) {
    changes = Math.floor(oddCounts / 2);
  } else {
    changes = Math.floor((oddCounts - 1) / 2);
  }
  return changes <= subs;
};
const palindromeChecker = (s, startIndex, endIndex, subs) => {
  let results = "";
  let length = startIndex.length;
  for (let i = 0; i < length; i++) {
    if (isPossibleToRearrange(startIndex[i], endIndex[i], subs[i], s)) {
      results += "1";
    } else {
      results += "0";
    }
  }
  console.log(results);
  return results;
};
console.log(palindromeChecker("abcba", [1, 1, 2], [4, 3, 3], [3, 3, 0]));
