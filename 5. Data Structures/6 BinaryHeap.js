/**
 * A heap is a tree data structure, similar to a BST but with some different rules.
 * (1) Max Binary heap - The value of each parent node is always greater than it's child nodes but
 *                       there are no guarantees between sibling nodes
 * (2) Min Binary Heap - Parent nodes are always smaller than child nodes.
 *
 *         -------------------------
 *          binary heaps use case
 *         -------------------------
 * (a) They are used to implement priority queues
 * (b) They are used with Grapth traversal algorithms
 *
 *         --------------
 *         storing heaps
 *         --------------
 * - Binary heaps are stored in Arrays.
 *                    -----------------
 * - For any index of n, the left child is always at 2n+1, the right child is at 2n+2
 *   ------------------      ----------------------------      -----------------------
 * - For any child node at index n, the parent node is at index (n-1)/2
 *                                      -------------------------------
 *
 *          -----------------------
 *           BIG O OF BINARY HEAPS
 *          -----------------------
 *  Insertion - O(log N)
 *  Removal   - O(log N)
 *  Search    - O(N)
 */

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  /**INSERTING A NODE INTO THE BINARY HEAP
   *  insert at the end of the heap, bubble up to the correct spot
   *            -------              ---------
   */
  insert(element) {
    this.values.push(element);
    this.bubbleUp(element);
  }
  bubbleUp(element) {
    let idx = this.values.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      //compare
      if (element <= parent) break;
      //swap
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      //update index
      idx = parentIdx;
    }
  }

  //EXTRACTING THE MAX ELEMENT in the binary heap - the root
  //remove the root, replace with the most recently added, sink down
  extractMax() {
    let max = this.values[0];
    let last = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = last;
      this.sinkDown();
    }
    return max;
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
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
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

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
