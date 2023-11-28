/**
 * A singly linked list is a data structure that contains a head, tail and a length property.
 * Each element in a linked list is a node; nodes store pieces of data i.e string or number and
 * references the next node or null at the very end
 *
 * You can think of a linked list as a skyscrapper with no elevators. Each floor is connected to the
 * next by a set of stairs. If you want to access the 5th floor, with an array, there are elevators
 * where you can specify to be taken to the 5th floor. In s linked list, there are only stairs.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //adding a new node to the end of the linked list
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //removing a node from the end of a linked list
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }
}
