class Node {
  constructor(value) {
    this.previous = null;
    this.value = value;
    this.next = null;
  }
}

export const CircularLinkedList = class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
      this.head.previous = this.tail;
      this.tail.next = this.head;
    }
  }
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      while (current && current.next !== this.head) {
        current = current.next;
      }
      newNode.previous = current;
      current.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
      this.head.previous = this.tail;
    }
  }
  search(value) {
    let current = this.head;
    if (current.value === value) {
      return true;
    } else {
      while (current && current.next !== this.head) {
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
      if (this.tail === current) {
        this.tail = null;
        this.head = null;
      } else {
        this.head = current.next;
        this.head.previous = this.tail;
        this.tail.next = this.head;
      }
      return value;
    } else if (this.tail.value === value) {
      current = this.tail;
      current.previous.next = this.head;
      this.tail = current.previous;
      this.head.previous = this.tail;
    } else {
      while (current && current.next !== this.tail) {
        if (current.next.value === value) {
          current.next.next.previous = current;
          current.next = current.next.next;
          return value;
        } else {
          current = current.next;
        }
      }
    }
    return undefined;
  }
  static removeAtIndex(head, tail, index) {
    if (!head) return null;
    if (index === 0) {
      head = head.next;
      tail.next = head;
      return head;
    } else {
      let current = head;
      let counter = 1;
      while (current && current.next) {
        if (index === counter) {
          current.next.next.previous = current;
          current.next = current.next.next;
        }
        counter++;
        current = current.next;
      }
      return head;
    }
    return null;
  }
  //   static print(head) {
  //     let tmp = head;
  //     while (tmp) {
  //       process.stdout.write(
  //         `${tmp.value} ${tmp.next !== head ? "-> " : "-> null\n"}`
  //       );
  //       tmp = tmp.next;
  //     }
  //   }
};
