import { LinkedList } from "./linkedList/singly-linkedList.js";
import { DoublyLinkedList } from "./linkedList/doubly-linkedList.js";
import { CircularLinkedList } from "./linkedList/circular-linkedList.js";

const list = new DoublyLinkedList();

list.prepend(3);
list.prepend(4);
list.prepend(5);
list.append(2);
list.append(9);
// console.log(list.search(2));
list.delete(3);
// LinkedList.print(list.head);
// LinkedList.print(LinkedList.removeAtIndex(list.head, 0));
DoublyLinkedList.print(list.head);

// const list = new CircularLinkedList();

// list.prepend(3);
// list.prepend(4);
// list.prepend(5);
// list.append(2);
// list.append(1);
// console.log(list);
// console.log(list.search(9));
// CircularLinkedList.print(list.head);
