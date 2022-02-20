document.write("This is my stack.");

function Stack() {
  let item = [];
  let top = -1;

  this.push = function (element) {
    item[++top] = element;
  };
  this.pop = function () {
    return item[top--];
  };
  this.peek = function () {
    return item[top];
  };
  this.isEmpty = function () {
    return item.length === -1;
  };
  this.clear = function () {
    return (item = []);
  };
  this.size = function () {
    return item.length;
  };
}
let stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);
// console.log(stack.pop());
// console.log(stack.peek());
// console.log(stack.isEmpty());
// // console.log(stack.clear());
// console.log(stack.size());

function baseConverter(decNumber, base) {
  var remStack = new Stack(),
    rem,
    baseString = "",
    digits = "0123456789ABCDEF"; //{6}
  while (decNumber > 0) {
    rem = Math.floor(decNumber % base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base);
  }
  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()]; //{7}
  }
  return baseString;
}

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));
