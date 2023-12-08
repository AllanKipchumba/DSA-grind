/**
 * A stask is a LIFO data structure - last element in is the first out.
 * use cases::
 * 1) Managing function invocaions - call stack
 * 2) undo/redo functionalities
 * 3) Routing(the history object is treated like a stack)
 * Stacks can be implemented using arrays and linked list.
 *     [Instert and remove from the beginning]
 * Insertion and removal is constant time O(1)
 * searching and access is linear time O(n)
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //add element to the beginning of the Stack
  push(val) {
    let node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = this.first;
    } else {
      node.next = this.first;
      this.first = node;
    }
    return ++this.size;
  }

  //remove an element from the beginning of the Stack
  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;

    return temp.val;
  }
}
