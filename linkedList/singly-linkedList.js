// using classes
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export const LinkedList = class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current && current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  search(value) {
    let current = this.head;
    if (current.value === value) {
      return true;
    } else {
      while (current && current.next) {
        if (current.next.value === value) {
          return true;
        } else {
          current = current.next;
        }
      }
    }
    return false;
  }
  delete(value) {
    let current = this.head;
    if (current.value === value) {
      this.head = current.next;
      return value;
    } else {
      while (current && current.next) {
        if (current.next.value === value) {
          current.next = current.next.next;
          return value;
        } else {
          current = current.next;
        }
      }
    }
    return undefined;
  }
  static removeAtIndex(head, index) {
    if (!head) return null;
    if (index === 0) {
      head = head.next;
      return head;
    } else {
      let current = head;
      let counter = 1;
      while (current && current.next) {
        if (index === counter) {
          current.next = current.next.next;
        }
        counter++;
        current = current.next;
      }
      return head;
    }
    return null;
  }
  static print(head) {
    let tmp = head;
    while (tmp) {
      process.stdout.write(`${tmp.value} ${tmp.next ? "-> " : "-> null\n"}`);
      tmp = tmp.next;
    }
  }
};

// create linkedList using functions

const node = {
  value: 1,
  next: null,
};

function createLinkedList(value) {
  node.value = value;
  node.next = null;
  return node;
}

function append(node, value) {
  let newNode = createLinkedList(value);
  node.next = newNode;
  return node;
}

function prepend(node, value) {
  let newNode = createLinkedList(value);
  newNode.next = node;
  node = newNode;
  return node;
}

function deleteNode(node, value) {
  let current = node;
  if (current.value === value) {
    node = current.next;
    current = null;
    return node;
  } else {
    while (current && current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        return node;
      }
      current = current.next;
    }
  }
}
