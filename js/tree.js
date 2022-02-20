document.write("This is my trees.js file.");

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  }

  insertNode = function (node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  };

  insert = function (data) {
    let newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
    return this.root;
  };

  //inOrderTraversal ---> LDR
  inOrderTraversal = function (root) {
    if (root === null) {
      return "This list does not exist.";
    }
    this.inOrderTraversal(root.left);
    console.log(root.data);
    this.inOrderTraversal(root.right);
  };

  // preOrderTraversal ---> DLR
  preOrderTraversal = function (root) {
    if (root === null) {
      return "This list does not exist.";
    }
    console.log(root.data);
    this.preOrderTraversal(root.left);
    this.preOrderTraversal(root.right);
  };

  // postOrderTraversal ---> LRD
  postOrderTraversal = function (root) {
    if (root === null) {
      return "This list does not exist.";
    }
    this.postOrderTraversal(root.left);
    this.postOrderTraversal(root.right);
    console.log(root.data);
  };

  // searching for minimum and maximum value
  //----Minimum value
  min = function () {
    return this.minNode(this.root); //{1}
  };

  minNode = function (node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node.data;
    }
    return null;
  };

  // ---Maximum value
  max = function () {
    return this.maxNode(this.root);
  };

  maxNode = function (node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }
      return node.data;
    }
    return null;
  };

  // Searching for a special value
  search = function (key) {
    return this.searchNode(this.root, key);
  };

  search = function (node, key) {
    if (node === null) {
      return false;
    }
    if (node.data === key) {
      return true;
    }
    var res1 = this.search(node.left, key);
    if (res1) {
      return true;
    }
    var res2 = this.search(node.right, key);

    if (res2) {
      return true;
    }
    return false;
  };

  removeNode = function (node, key) {
    if (node === null) {
      return null;
    }
    if (key < node.key) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      var aux = this.findMinNode(node.right);
      node.key = aux.key;
      node.right = this.removeNode(node.right, aux.key);
      return node;
    }
  };
  findMinNode = function (node) {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  };
}

let tree = new binarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);

// console.log("**************In-Order-Traversal********************");
// tree.inOrderTraversal(tree.root);

// console.log("**************Pre-Order-Traversal********************");
// tree.preOrderTraversal(tree.root);

// console.log("**************Post-Order-Traversal********************");
// tree.postOrderTraversal(tree.root);

// console.log("**************min value********************");
// console.log("min function", tree.min());
// console.log("min value function", tree.minNode(tree.root));

// console.log("**************max value********************");
// console.log("max function", tree.max());
// console.log("max value function", tree.maxNode(tree.root));

// console.log("**************search value********************");
// console.log("search function", tree.search(tree.root, 7));

// console.log(tree.removeNode(tree.root, 7));
// console.log(tree.removeNode(tree.root, 7));
// console.log("search function", tree.search(tree.root, 7));

// ********************************************AVL tree********************************************

class Node2 {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  insertNode(node, element) {
    let newNode = new Node(element);
    if (node === null) {
      node = newNode;
      return node;
    } else {
      if (element < node.data) {
        node.left = this.insertNode(node.left, element);
        if (node.left != null) {
          if (
            this.hightNode(node.left) - this.hightNode(node.right) >
            1
          ) {
          }
        }
      } else if (element > node.data) {
        node.right = this.insertNode(node.right, element);
        if (node.right != null) {
          if (
            this.hightNode(node.right) - this.hightNode(node.left) >
            1
          ) {
          }
        }
      }
    }
    return node;
  }

  hightNode(node) {
    if (node === null) {
      return -1;
    } else {
      return Math.max(
        this.hightNode(node.left),
        this.hightNode(node.right) + 1
      );
    }
  }

  rotationRR(node) {
    let temp = node.right;
    node.right = temp.left;
    temp.left = node;
    return node;
  }

  rotationLL(node) {
    let temp = node.left;
    node.left = temp.right;
    temp.right = node;
    return node;
  }
}
