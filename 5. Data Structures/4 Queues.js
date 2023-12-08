/**
 * A queue is a FIFO data structure - first element is is the first Out.
 * use cases::
 * 1) Background tasks
 * 2) Uploading resources
 * 3) Printing/task processing
 * Queues can be implemented using arrays and singly linked list
 *          [insert at the end, remove from the beginning]
 * Insertion and removal is constant time O(1)
 * searching and access is linear time O(n)
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //add a value to the end of the Queue
  enqueue(val) {
    let node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = this.first;
    } else {
      this.last.next = node;
      this.last = node;
    }

    return ++this.size;
  }

  //remove from the beginning
  dequeue() {
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
