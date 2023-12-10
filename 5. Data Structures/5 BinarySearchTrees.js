/**
 * A tree is a none-linear data structure that consists of nodes in a parent-child relationship.
 * Trees - A parent node can have as many child nodes as it can
 * Binary trees - Each node can have a maximum of 2 children
 * Binary search tree
 *      - Every parent has at most 2 children
 *      - Every node to the left of a parent node is always less than the parent
 *      - Every node to the right of a parent node is always greater than the parent
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
}

let tree = new BinarySearchTree();

tree.insertI(10);
tree.insertR(7);
