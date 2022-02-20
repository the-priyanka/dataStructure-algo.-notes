console.log("this is my linkedList.");

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class linkedList {
  constructor() {
    this.head = null;
  }

  listBeforeInsert(element) {
    let newNode = new Node(element);
    if (this.head == null) {
      newNode.next = null;
      this.head = newNode;
      return this.h;
    }
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }

  listAfterInsert(element) {
    let newNode = new Node(element);
    if (this.head == null) {
      newNode.next = null;
      this.head = newNode;
      return this.head;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
      newNode.next = null;
      return newNode;
    }
  }

  deletion(data) {
    let h = this.head;
    let prev = null;
    if (this.head == null) {
      console.log("This list does not exist.");
      return -1;
    } else if (h.data == data) {
      this.head = h.next;
      return h.data;
    } else {
      while (h !== null && h.data != data) {
        prev = h;
        h = h.next;
      }
      if (h == null) {
        console.log("This data is not available in this list.");
      }
      prev.next = h.next;
      return h.data;
    }
  }

  insertAtMiddle(element, data) {
    let newNode = new Node(element);
    let head = this.head;
    if (head.data == null) {
      console.log("This list does not exist.");
    } else {
      while (head.data != data) {
        head = head.next;
      }
      if (head == null) {
        console.log("this data is not available for this list.");
      }
      newNode.next = head.next;
      head.next = newNode;
    }
  }

  toString() {
    let current = this.head;
    let string = "";
    while (current) {
      string += current.element + (current.next ? "n " : "");
      current = current.next;
    }
    return string;
  }
}

let node = new linkedList();
node.listBeforeInsert(11);
node.listBeforeInsert(12);
node.listAfterInsert(13);
node.listAfterInsert(14);
// console.log(node.deletion(12));
// console.log(node.insertAtMiddle(12.5, 12));
// console.log(node.toString());
// console.log(node);
