/**
 * A tree is a non-linear data structure that consists of nodes in a parent-child relationship.
 * Trees - A parent node can have as many child nodes as it can
 * Binary trees - Each node can have a maximum of 2 children
 * Binary search tree - Special kind of a binary tree that is sorted in a particular order
 *      - Every parent has at most 2 children
 *      - Every node to the left of a parent node is always less than the parent
 *      - Every node to the right of a parent node is always greater than the parent
 *
 *      ---------------
 *       BIG O OF BST
 *      ----------------
 * Insertion - o(log n)
 * Searching - o(log n)
 */

//BST implementation
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //INSERTING A NODE INTO A BST
  //iterative solution
  insertI(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    //create infinite loop that runs untill a return statement is met
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  //recursive solution
  insertR(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    this.insertNode(this.root, newNode);
    return this;
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else if (newNode.value > node.value) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  //Finding a node in the BST
  find(value) {
    if (this.root === null) return false;

    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  //TREE TRAVERSAL - printing the nodes in a tree
  // (1) Breadth-first-search(BFS) => visit the root, every sibling node, then look at the child
  BFS() {
    let node = this.root,
      data = [],
      queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  // (2) Depth-first-search(DFS) => Traverse nodes vertically down to the end of the tree
  //                                before visiting sibling nodes.
  //     There are three forms of DFS
  // (i) DFS-PreOrder => Visit the node first, traverse the left, then traverse the right
  DFSPreOrder() {
    let data = [];

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }

  // (ii) DFS-PostOrder => Explore all children before we visit the node. The root is the
  //                       last to be visited
  DFSPostOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }

    traverse(this.root);
    return data;
  }

  // DFS-InOrder => Traverse the entire left side, visit the node, then traverse the entire right side
  DFSInOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }
}

let tree = new BinarySearchTree();

// tree.insertI(10);
// tree.insertR(7);
//         10
//     6       15
//   3   8         20

tree.insertI(10);
tree.insertI(6);
tree.insertI(15);
tree.insertI(3);
tree.insertI(8);
tree.insertI(20);
