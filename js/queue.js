document.write("This is my queue.");

// class Queue {
//   constructor(size) {
//     this.size = size;
//     this.front = -1;
//     this.rear = -1;
//     this.queue = [this.size];
//   }

//   isFull() {
//     if (this.front == 0 && this.rear == this.size - 1) {
//       return true;
//     }
//     if (this.front == this.rear + 1) {
//       return true;
//     }
//     return false;
//   }

//   isEmpty() {
//     if (this.front == -1) {
//       return true;
//     }
//     return false;
//   }

//   enqueue(element) {
//     if (this.isFull()) {
//       console.log("queue is full.");
//     } else {
//       if (this.front == -1) {
//         this.front = 0;
//       }

//       this.rear = (this.rear + 1) % this.size;
//       this.queue[this.rear] = element;

//       console.log(element);
//     }
//   }

//   dequeue() {
//     if (this.isEmpty) {
//       console.log("queue is empty.");
//     } else {
//     }
//   }
// }

function Queue() {
  let items = [];

  this.enqueue = function (element) {
    items.push(element);
  };

  this.dequeue = function () {
    return items.shift();
  };

  this.front = function () {
    return items[0];
  };

  this.isEmpty = function () {
    return items.length == 0;
  };

  this.size = function () {
    return items.length;
  };

  this.print = function () {
    console.log(items.toString());
  };
}

let q = new Queue();

q.enqueue(1);

function hotPotato(nameList, num) {
  let queue = new Queue(); // {1}
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]); // {2}
  }
  let eliminated = "";
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue()); // {3}
    }
    eliminated = queue.dequeue(); // {4}
    console.log(
      eliminated + " was eliminated from the Hot Potato game."
    );
  }
  return queue.dequeue(); // {5}
}

let names = ["priyanka", "akshita", "priya", "pri", "hemlata"];
let winner = hotPotato(names, 7);
console.log("the winner is: ", winner);

function PriorityQueue() {
  let items = [];
  function QueueElement(element, priority) {
    // {1}
    this.element = element;
    this.priority = priority;
  }
  this.enqueue = function (element, priority) {
    let queueElement = new QueueElement(element, priority);
    let added = false;
    for (let i = 0; i < items.length; i++) {
      if (queueElement.priority < items[i].priority) {
        // {2}
        items.splice(i, 0, queueElement); // {3}
        added = true;
        break; // {4}
      }
    }
    if (!added) {
      items.push(queueElement); //{5}
    }
  };
  this.print = function () {
    for (let i = 0; i < items.length; i++) {
      console.log(`${items[i].element} -
  ${items[i].priority}`);
    }
  };
  //other methods - same as default Queue implementation
}

// let priorityQueue = new PriorityQueue();
// priorityQueue.enqueue("Priyanka", 2);
// priorityQueue.enqueue("priya", 1);
// priorityQueue.enqueue("Akshita", 1);
// priorityQueue.print();
