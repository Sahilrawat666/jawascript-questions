// // ////////////////////////////////////////comapresion operators

// let a = 4;
// if (a != 4) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// if (a < 4) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// .......................................ternary operator
// shorter form of if else
// let age = 18;
// let result = age >= 18 ? true : false;
// console.log(result);

//....................................if...else if...else Ladder

// const num = 99;
// if (num >= 90) {
//   console.log("a grade");
// } else if (num >= 80) {
//   console.log("b grade");
// } else if (num >= 70) {
//   console.log("c grade");
// } else if (num >= 50) {
//   console.log("d grade");
// } else {
//   console.log("e grade");
// }

// let score = 45;

// if (score >= 90) {
//   console.log("Grade A");
// } else if (score >= 75) {
//   console.log("Grade B");
// } else {
//   console.log("Grade C");
// }

//.................................switch Statement
// let day = 2;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 4:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   default:
//     console.log("Invalid day");
// }

//.........................................for loop
// for (let i = 1; i <= 1; i++) {
//   console.log(i);
// }

//...................Using while loop
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
//...........................do...while loop
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

//..............................template literals
// A modern way to create strings in JavaScript using backticks ` that allows
//  inserting variables and expressions directly with ${} and
//  supports multi-line strings.
// const str = {
//   name: "sahil",
//   age: "20",
// };
// console.log(`my name is ${str.name} and i am ${str.age} years old.`);

//................................................................./
// // explain
// // 🔹 Breaking your example
// // arr = ["A", "B", "C", "D", "A", "A"]
// // searchElement = "A"

// const arr = ["A", "B", "C", "D", "A", "A"];
// console.log(arr.indexOf("A", 1)); // 4
//......................................................./
// sort in assendind order
// const arrr = [1, 2, 3, 4, 3, 7, 89, 789];

// // Sort in ascending order
// const arr = [2, 3, 4, 5, 9, 8, 7];
// console.log(arr.sort((a, b) => a - b));
// const letters = ["D", "A", "C", "B"];

//........../

// // letters.sort(); // Sort in ascending (alphabetical) order

// console.log(letters.sort());

// const arr2 = [2, 3, 4, 5, 9, 8, 7, 20, 30, 21];
// console.log(arr2.sort((a, b) => a - b));
//......................// // Sort in descending order

// const arr2 = [2, 3, 4, 5, 9, 8, 7, 20, 30, 21];
// console.log(arr2.sort((a, b) => b - a));

//.....................Logical AND (&&)....................................
// Syntax: condition1 && condition2;
//
// console.log(true && true); // true   both true
// console.log(false && false); // false  both false
// console.log(true && false); // false  if one false
//////
// Practical example:

// let name = "sahil",
//   age = 20;
// if (age >= 18 && name == "sahil") {
//   console.log("Eligible"); //  both conditions true
// } else {
//   console.log("not eligible");
// }
//.....................Logical OR (||).............................
// Syntax: condition1 || condition2;   // only one condition should be true
// console.log(false || true);  // true  one true
// console.log(false || false); // false both false

//......................Logical NOT (!)..............................
// Syntax: !condition;

// More examples:
// console.log(!false); // true
// console.log(!true); // false
// console.log(!0); // true  (because 0 is falsy)
// console.log(!""); // true  (empty string is falsy)
// console.log(!"JS"); // false (non-empty string is truthy)

//......................truthy and falsy(VVI)............................
// ❌ Falsy Values (Only 8 of them)

// These always evaluate to false:

// Falsy Value	Description
// false	Boolean false
// 0	Number zero
// -0	Negative zero
// "" or '' or ````	Empty string
// null	Nothing
// undefined	Not defined
// NaN	Not a Number
// 0n	BigInt zero

// console.log(!NaN);

// if ("" == false) {
//   console.log("sahil");
// } else {
//   console.log("ayush");
// }

//..............................................
// const arr = [, , ,];
// console.log(1 == true);

// console.log(![]);
///.............................. Comma Operator......................
// 🔹 Comma Operator ( , ) in JavaScript
// Definition:

// The comma operator allows you to evaluate multiple expressions from left to right,
//  but only the last expression’s value is returned.
// function sum() {
//   console.log("sahil");
//   return 2 + 2;
// }
// function square() {
//   console.log("ayush");

//     // return 4 * 4;
// }
// let result = (sum(), square());
// console.log(result);
7;
//..................................................../
// const str1 = "sahil";
// const str2 = "rawat";
// console.log([...str1, ...str2]);
//.....................................................
// let arr1 = [, , ,]; //2

// let arr2 = [1, 2, 3, 4, 5]; //4
// let arr3 = [
//   [1, 2, 3],
//   [4, 5, 6],
// ]; //1

// // console.log(arr2.indexOf(3));
// // // console.log();

/* console.log(arr2.length);
console.log(arr3.length);
console.log(arr3[1].indexOf(6));
 */
//.....................short in assending order ------------------
// let arr = [1, 2, 3, 54, 675, 76, 34, 23];
/* 
let assendingOrder = arr.sort((a, b) => a - b);
console.log(assendingOrder); */
//............................
/* let arr = [1, 2, 3, 54, 675, 76, 34, 23];
let arr2 = arr.filter((a) => a > 55);
console.log(arr2); */
//..........................slice method......................

/* let arr = [11, 12, 13, 14, 15];
let arr2 = arr.slice(1, 3);
console.log(arr2);
console.log(arr); */
//.....................splice method.........................
/* 🧠 Syntax:
array.splice(start, deleteCount, item1, item2, ...) */
/* let arr = [11, 12, 13, 14, 15];
console.log(arr);

let arr2 = arr.splice(1, 3, 44);
console.log(arr2);
console.log(arr); */
//.........................make array empty .....................
/* let arr = [2, 3, 4, 5, 6, 7, 8, 9];
// arr.length = 0;
// arr = [];
let arr2 = arr.splice(0, arr.length);

console.log(arr);
 */
//..........................creating new array methods............
/* let arr = new Array(5, 4, 5, 6); // creates array of length 5 with empty slots
let arr2 = new Array(1, 2, 3); // creates [1, 2, 3]
console.log(arr, arr2);

// let sahil = [, , ,];.
// console.log(sahil);
let arr3 = Array.of(1, 2, 3); // [1, 2, 3]
console.log(arr3); */

//..........................creating new object methods............
/* let obj = new Object();
obj.name = "Sahil";
obj.age = 21;
console.log(obj);

let obj1 = Object();
obj.name = "Sahil";
obj.age = 21;
console.log(obj); */
//..............................return unique values...................
/* 
let arr = [2, 3, 4, 5, 6, 6, 7, 7];
let arr2 = [...new Set(arr)];
console.log(arr2);
console.log(arr); */

// let arr = ["sahil", "ayush", "sahil"];
// let arr2 = [...new Set(arr)];
// console.log(arr2);
//............................................................
/* let a = NaN;
let b = a;
console.log(a === b); // true (same reference)
console.log(NaN === NaN);
 */

//.......................................
/* let str = "my name is sahil";
let str2 = str
  .split(" ")
  .map((word) => word[0].toUpperCase())
  .forEach((letter) => console.log(letter)); */

//.........................................................

// console.log(typeof null);
// console.log(typeof NaN);
// console.log(typeof []);
// console.log(typeof " ");
// console.log(typeof undefined);
// console.log(typeof {});
// console.log(typeof true);

//...............................................

/* let a = 10;
// console.log(++a);
console.log(a++);
console.log(a); */
///////.........................................................
