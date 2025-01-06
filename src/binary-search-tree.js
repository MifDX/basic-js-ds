const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootVar = null;
  }

  root() {
    if (this.rootVar === null) {
      return null;
    } 
    return this.rootVar;
  }

  add(data) {
    let newNode = new Node(data);

    const searchTree = (node) => {
      
      if (data < node.data) { // go left
        if (!node.left) {
          node.left = newNode;
        } else {
          searchTree(node.left);
        }
      } else if (data > node.data) { // go right
        if (!node.right) {
          node.right = newNode;
        } else {
          searchTree(node.right);
        }
      }
    }

    if (this.rootVar === null) {
      this.rootVar = newNode;
    } else {
      searchTree(this.rootVar);
    }
  }

  has(data) {
    let currentNode = this.rootVar;

    while (currentNode) {
      if (data === currentNode.data) {
        return true;
      } 
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  find(data) {
    let currentNode = this.rootVar;

    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode;
      } 
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return null;
  }

  remove(data) {
    this.rootVar = removeNode(this.rootVar, data);

    function removeNode(node, data) { // if no node
      if (!node) {
        return null;
      }

      if (data < node.data) { // search for node
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else { // check children
        if (!node.left && !node.right) { // no children
          return null;
        }
        if (!node.left) { // only left
          node = node.right;
          return node;
        }
        if (!node.right) { // only right
          node = node.left;
          return node;
        }
        //if both children exist
        let minFromRight = node.right; 
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    let currentNode = this.rootVar;

    // search for the leaf on the left
    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() {
    let currentNode = this.rootVar;

    // search for the leaf on the right
    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }
}

module.exports = {
  Node
};


module.exports = {
  BinarySearchTree
};