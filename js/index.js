// 1-masala

// let numbers = [1, 2, 3, 4, 5];

// let kv = numbers.map(function (num) {
//   return num ** 2;
// });

// console.log(kv);

// 2-masala

// let numbers = [1, -2, 3, -4, 5];
// let new_arr = [];

// numbers.forEach(function (num) {
//   if (num > 0) {
//     new_arr.push(num);
//   }
// });

// console.log(new_arr);

// 3-masala

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(num) {
//     let kv2 = num * 2;
//     console.log(kv2);
// });

// 4-masala

// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;

// numbers.forEach(function(num) {
//     sum += num;
// });

// console.log(sum);

// 5-masala

// const numbers = [1, -2, 3, -4, 5, -6, 7, 8, -9, 10];

// let res = numbers.filter(function (num) {
//   return num >= 0;
// });

// console.log(res);

// 6-masala

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let res = numbers.filter(function (num) {
//   return num % 2 === 0;
// });

// console.log(res);

// 7-masala

// let str = ["salom", "tillo", "Abdulhafizov", "Fathullo", "kit", "an"];
// let res = str.filter(function (val) {
//   return val.length <= 5;
// });

// console.log(res);

// 8-masala

// const people = [
//   { name: "Ali", age: 17 },
//   { name: "Vali", age: 19 },
//   { name: "tillo", age: 22 },
//   { name: "Salim", age: 16 },
//   { name: "John", age: 20 }
// ];

// let res = people.filter(function (val) {
//   return val.age > 18;
// }).map(function (val) {
//   return val.age;
// });

// console.log(res);

// 9-masala

// some/every metodi yordamida ishlanadigan masalalar.

// 1-masala

// let numbers = [1, 2, 3, 4, 5];

// let res = numbers.some(function (num) {
//   return num < 0;
// });

// console.log(res);

// 2-masala

// let string = ["apple", "banan", "apelsin", "ananas", "qulpnay"];
// let res = string.some(function(str) {
//     return str.length > 10;
// });

// console.log(res);

// 3-masala

// let numbers = [1, 2, 3, 4, 5];

// let res = numbers.every(function(num) {
//     return num > 0;
// });

// console.log(res);

// 4-masala

// chunmadin

// Umumiy;

// 1-masala

// let num = [1, 2, 3, 4, 5];
// let res = num.includes(10);
// console.log(res);

// 2-masala

// let num = [1, 2, 3, 4, 5];
// let res = num.indexOf(10);
// console.log(res);

// 3-masala

// let num = [1, 2, 3, 4, 10, 5];
// let res = num.lastIndexOf(10);
// console.log(res);

// 4-masala

// let number = [5, 10, 15, 20, 25];

// let res = number.find(function(num) {
//     return num > 10;
// });

// console.log(res);

// 5-masala

// let number = [5, 10, 15, 20, 25];

// let res = number.findIndex(function(num) {
//     return num > 10;
// });

// console.log(res);

// 6-masala

// let number = [5, 10, 15, 20, 25];

// let res = number.findLast(function (num) {
//   return num > 10;
// });

// console.log(res);

// 7-masala

// let number = [5, 10, 15, 20, 25];

// let res = number.findLastIndex(function (num) {
//   return num > 10;
// });

// console.log(res);

// 8-masala

// let number = [1, 2, 3, 4, 5];
// let res= number.reverse();
// console.log(res);

// 9-masala

// let number = [3, 1, 4, 1, 5, 9, 2, 6, 5];
// let res = number.sort(function (a, b) {
//   return a - b;
// });

// console.log(res);
