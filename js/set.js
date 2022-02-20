document.write("this is my set.");

function Set() {
  let items = {};

  this.has = function (value) {
    return value in items;
  };

  this.add = function (value) {
    if (!this.has(value)) {
      items[value] = value;
      return true, value;
    }
    return false;
  };

  this.delete = function (value) {
    if (this.has(value)) {
      delete items[value];
      return value;
    }
    return false;
  };

  this.clear = function () {
    items = {};
    return items;
  };

  this.size = function () {
    return Object.keys(items).length;
  };

  this.sizeLegacy = function () {
    let count = 0;
    for (let key in items) {
      //{5}
      if (items.hasOwnProperty(key))
        //{6}
        ++count; //{7}
    }
    return count;
  };

  this.values = function () {
    let values = [];
    for (let i = 0, keys = Object.keys(items); i < keys.length; i++) {
      values.push(items[keys[i]]);
    }
    return values;
  };

  this.union = function (otherSet) {
    let unionSet = new Set(); //{1}
    let values = this.values(); //{2}
    // console.log(values);
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
      console.log(unionSet.values());
    }
    values = otherSet.values(); //{3}
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
      console.log(unionSet.values());
    }
    return unionSet;
  };

  this.intersection = function (otherSet) {
    let intersection = new Set();
    let values = this.values();

    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersection.add(values[i]);
      }
    }
    return intersection;
  };

  this.difference = function (otherSet) {
    let difference = new Set();
    let values = this.values();

    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        difference.add(values[i]);
      }
    }
    return difference;
  };
}
let set1 = new Set();
set1.add(1);
set1.add(2);
set1.add(3);
set1.add(4);

let set2 = new Set();
set2.add(3);
set2.add(4);
set2.add(5);
set2.add(6);

let union12 = set1.difference(set2);
console.log(union12.values());

// set.has(3)
// console.log("added value here : ", set.add(3));
// console.log("added value here : ", set.add(4));
// console.log("added value here : ", set.add(5));
// console.log("added value here : ", set.add(6));

// console.log("delete value here : ", set.delete(6));
// console.log("the items size here : ", set.size());

// console.log("remove all the items : ", set.clear());

// console.log("the items size here : ", set.size());

// console.log("the items size here : ", set.sizeLegacy());

// console.log("the items size here : ", set.values());

// console.log(set.has(3));
