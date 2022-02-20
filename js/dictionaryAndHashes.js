document.write("This is my dictionary.");

function dictionary() {
  let items = {};

  this.has = function (key) {
    return key in items;
  };

  this.set = function (key, value) {
    items[key] = value;
    return items;
  };

  this.delete = function (key) {
    if (this.has(key)) {
      delete items[key];
      return key;
    }
    return false;
  };

  this.get = function (key) {
    return this.has(key)
      ? items[key]
      : "This key is not exist in the dictionary.";
  };

  this.values = function () {
    let values = [];

    for (let v in items) {
      if (this.has(v)) {
        values.push(items[v]);
      }
    }
    return values;
  };

  this.clear = function () {
    items = {};
    return items;
  };

  this.size = function () {
    return Object.keys(items).length;
  };
}

let dic = new dictionary();
// console.log(
//   "added key and value pair : ",
//   dic.set("priyanka", "the.priyanka1511@gmail.com")
// );
// console.log("added key and value pair : ", dic.set("1", "11"));
// console.log("added key and value pair : ", dic.set("2", "12"));
// console.log("added key and value pair : ", dic.set("3", "13"));
// console.log("added key and value pair : ", dic.set("4", "14"));
// console.log("added key and value pair : ", dic.set("5", "15"));

// console.log("deleted a key : ", dic.delete("1"));

// console.log("all values : ", dic.values());

// console.log("dictionary size here : ", dic.values());

// console.log("clear all keys : ", dic.clear());

// create a linkedList.
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

  append(element) {
    let newNode = new Node(element);
    if (this.head == null) {
      newNode.next = null;
      this.head = newNode;
    } else {
      let head = this.head;
      while (head.next != null) {
        head = head.next;
      }
      head.next = newNode;
      newNode.next = null;
      return head;
    }
  }
}

let list = new linkedList();
list.head = new Node(1);
list.head.next = new Node(2);
list.append(11);
console.log(list);

// hashing table
function HashTable() {
  var table = [];

  var loseloseHashCode = function (key) {
    var hash = 0; //{1}
    for (var i = 0; i < key.length; i++) {
      //{2}
      hash += key.charCodeAt(i); //{3}
    }
    return hash % 37; //{4}
  };

  this.put = function (key, value) {
    var position = loseloseHashCode(key); //{5}
    console.log(position + " - " + key); //{6}
    table[position] = value; //{7}
  };

  // this.get = function (key) {
  //   return table[loseloseHashCode(key)];
  // };

  this.remove = function (key) {
    table[loseloseHashCode(key)] = undefined;
    return table;
  };

  this.print = function () {
    for (var i = 0; i < table.length; ++i) {
      //{1}
      if (table[i] !== undefined) {
        //{2}
        console.log(i + ": " + table[i]); //{3}
      }
    }
  };

  var ValuePair = function (key, value) {
    this.key = key;
    this.value = value;
    this.toString = () => {
      return "[" + this.key + " - " + this.value + "]";
    };
  };

  this.put = function (key, value) {
    var position = loseloseHashCode(key);
    if (table[position] == undefined) {
      table[position] = new ValuePair(key, value);
    } else {
      var index = ++position;
      while (table[index] != undefined) {
        index++;
      }
      table[index] = new ValuePair(key, value);
    }
  };

  this.get = function (key) {
    var position = loseloseHashCode(key);
    if (table[position] !== undefined) {
      if (table[position].key === key) {
        return table[position].value;
      } else {
        let index = ++position;
        while (
          table[index] !== undefined ||
          table[index].key !== key
        ) {
          index++;
        }
        if (table[index].key === key) {
          return table[index].value;
        }
      }
    }
    return undefined;
  };
}

let hash = new HashTable();
hash.put("Priyanka", "I am the priyanka menaria.");
hash.put("Priyanka", "I am the priyanka menaria.");
hash.put("Samta", "I am the samta menaria.");
hash.put("Neelam", "I am the neelam menaria.");
hash.put("Gandalf", "gandalf@email.com");
hash.put("John", "johnsnow@email.com");
hash.put("Tyrion", "tyrion@email.com");
hash.put("Aaron", "aaron@email.com");
hash.put("Donnie", "donnie@email.com");
hash.put("Ana", "ana@email.com");
hash.put("Jonathan", "jonathan@email.com");
hash.put("Jamie", "jamie@email.com");
hash.put("Sue", "sue@email.com");
hash.put("Mindy", "mindy@email.com");
hash.put("Paul", "paul@email.com");
hash.put("Nathan", "nathan@email.com");

hash.get("Join");
hash.print();
console.log("uhrtife");
