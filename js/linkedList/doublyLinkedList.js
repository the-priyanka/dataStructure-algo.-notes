console.log("I am creating doubly linked list.");

class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

function DoublyLinkedList() {
  let Node = function (element) {
    this.element = element;
    this.next = null;
    this.prev = null; //NEW
  };
  let length = 0;
  let head = null;
  let tail = null; //NEW
}

  insert(position, element)
  if (position >= 0 && position <= length) {
    let node = new Node(element),
      current = head,
      previous,
      index = 0;
    if (position === 0) {
      //add on first position
      if (!head) {
        //NEW {1}
        head = node;
        tail = node;
      } else {
        node.next = current;
        current.prev = node; //NEW {2}
        head = node;
      }
    } else if (position === length) {
      //last item //NEW
      current = tail; // {3}
      current.next = node;
      node.prev = current;
      tail = node;
    } else {
      while (index++ < position) {
        //{4}
        previous = current;
        current = current.next;
      }
      node.next = current; //{5}
      previous.next = node;
      current.prev = node; //NEW
      node.prev = previous; //NEW
    }
    // length++; //update size of list
    return true;
  } else {
    return false;
  }


class doublyLinklist {}

let list = new doublyLinklist();
list.insertAtBeginning(1);
list.insertAtBeginning(2);
list.insertAtBeginning(3);
list.insertAtBeginning(4);
console.log(list);
