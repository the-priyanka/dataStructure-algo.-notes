// var matrix3x3x3 = [];
// for (var i = 0; i < 3; i++) {
//   matrix3x3x3[i] = [];
//   for (var j = 0; j < 3; j++) {
//     matrix3x3x3[i][j] = [];
//     for (var z = 0; z < 3; z++) {
//       matrix3x3x3[i][j][z] = i + j + z;
//     }
//   }
// }
// console.log(matrix3x3x3)

var isEven = function (x) {
  console.log(x);
  return x % 5 == 0 ? true : false;
};

var numbers = [1, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(numbers.every(isEven));
