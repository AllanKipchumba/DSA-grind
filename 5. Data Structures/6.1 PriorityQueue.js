/**
 * - A priority queue is a data structure where each element has a priority.
 *     -------------       -------------------------------------------------
 * - Elements with higher priorities are served before elements with lower priority.
 * - A Priority level is inversely proportional to number weight.
 *        (Number 0 has higher priority than number 5)
 * - Priority queues are implemented using a min binary heap
 *                       -----------------------------------
 *   - parent nodes are always smaller than child nodes. The root has the number with the
 *     smalles weight, i.e least weight, highest priority.
 */

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  // INSERT A VALUE INTO THE PRIORITY QUEUE
  // insert at the end of the heap, bubble up to the correct spot
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp(newNode);
  }
  bubbleUp(element) {
    let idx = this.values.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      //compare priority levels of parent and child
      if (element.priority >= parent.priority) break;
      //swap
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      //update index
      idx = parentIdx;
    }
  }

  //EXTRACT ELEMENT WITH THE HIGHEST PRIORITY LEVEL
  //remove the root, replace with the most recently added, sink down
  dequeue() {
    let min = this.values[0];
    let last = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = last;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

//hospital setting => queue patients to enter the emergency room (ER) by their priority levels.
let ER = new PriorityQueue();

ER.enqueue('common cold', 5);
ER.enqueue('gunshot wound', 1);
ER.enqueue('high fever', 4);
ER.enqueue('broken arm', 2);
ER.enqueue('glass in foot', 3);
