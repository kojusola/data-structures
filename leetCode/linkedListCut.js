// creating a linked list;
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

//https://leetcode.com/problems/rotate-list/

var rotateRight = function (head, k) {
  // check if the head is empty;
  if (!head) return null;
  // check if head.next is empty, if empty means there is only one node an nothing to rotate.
  if (!head.next) return head;
  let length = 0;
  let temp = head;

  // the while loop is to find the length of the linked list
  while (temp != null) {
    temp = temp.next;
    length += 1;
  }

  // if k is greater than the length of the linked list, then we need to rotate the linked list by k % length of the linked list
  // because no matter how many times we rotate after the length of the linked list, the linked list rotation is just a multiple of the length of the linked list.
  // meaning a rotation of 1 and 6 in a linked list of length 5 will be the same as a rotation of 1 and 5.
  // original linked list = 1 -> 2 -> 3 -> 4 -> 5
  // rotated by 1 = 5 -> 1 -> 2 -> 3 -> 4
  // rotated by 6 = 1 -> 2 -> 3 -> 4 -> 5
  // and  6 % 5 = 1
  if (k > length) {
    k = k % length;
  }
  // This tries to get to the end node cut it and prepend it to the head node till the number of k is done.
  while (k > 0) {
    let prev;
    let cut = head;
    while (cut.next != null) {
      prev = cut;
      cut = cut.next;
    }
    prev.next = null;
    cut.next = head;
    head = cut;
    k--;
  }
  return head;
};

// 2. https://leetcode.com/problems/delete-node-in-a-linked-list/;

// just to delete a node in a linkedList, with just the node given.
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

// https://leetcode.com/problems/swap-nodes-in-pairs/solution/

var swapPairs = function (head) {
  // Dummy node acts as the prevNode for the head node
  // of the list and hence stores pointer to the head node.
  let dummy = new ListNode(-1);
  dummy.next = head;
  let prevNode = dummy;

  while (head != null && head.next != null) {
    // Nodes to be swapped
    let firstNode = head;
    let secondNode = head.next;

    // Swapping
    prevNode.next = secondNode;
    firstNode.next = secondNode.next;
    secondNode.next = firstNode;

    // Reinitializing the head and prevNode for next swap
    prevNode = firstNode; // prevNode is now the node before the nodes to be swapped like earlier when a dummy node was created.
    head = firstNode.next; // is the initial node to be swapped with it's next node.
  }

  // Return the new head node.
  return dummy.next;
};
