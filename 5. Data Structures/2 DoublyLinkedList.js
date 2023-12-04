/**
 * A doubly linked list is almost identical to a singly linked list except every node has another
 * pointer to the previous node. Its is biderectional while a singly linked list is unidirectional
 *
 * It takes up more memory space but it is more efficient compared to a singly linked list
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add a node to the end of the DoublyLinkedList
  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  // remove a node from the end of a DoublyLinkedList
  pop() {
    if (!this.head) return undefined;

    let currentTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = currentTail.prev;
      this.tail.next = null;
      currentTail.prev = null;
    }

    this.length--;
    return currentTail;
  }

  // remove a node from the beginning of a DoublyLinkedList
  shift() {
    if (this.length === 0) return undefined;

    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  //create a new node at the beginning of the DoublyLinkedList
  unshift(val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  //access a node by its position
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let count, current;

    if (index <= this.length / 2) {
      count = 0;
      current = this.head;

      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;

      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  //replace the value of a node
  set(index, val) {
    let targetNode = this.get(index);
    if (targetNode !== null) {
      targetNode.val = val;
      return true;
    }
    return false;
  }

  //add a node at a certain position
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return true;
  }

  //remove a node in a list by a certain position
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let targetNode = this.get(index);
    let nodeBefore = targetNode.prev;
    let nodeAfter = targetNode.next;

    nodeBefore.next = nodeAfter;
    nodeAfter.prev = nodeBefore;

    targetNode.prev = null;
    targetNode.next = null;

    this.length--;
    return targetNode;
  }

  //reverse a DoublyLinkedList
  reverse() {
    let node = this.head;

    // Swap head and tail
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      node.prev = next; // Corrected: Update the prev pointer as well
      prev = node;
      node = next;
    }
    return this;
  }

  //print all values in the DoublyLinkedList
  print() {
    let arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
}

let list = new DoublyLinkedList();

list.push(100);
list.push(200);
list.push(300);
list.push(400);
