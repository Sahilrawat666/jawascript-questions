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

//..................................................../
// const str1 = "sahil";
// const str2 = "rawat";
// console.log([...str1, ...str2]);
