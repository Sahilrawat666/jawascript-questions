// 1. Create a function that returns the last element of an array.
// function getLastElement(localArr) {
//   return localArr[localArr.length - 1];
// }
// let arr = [5, 4, 3, 5, 6, 7, 6, 6, 8];
// console.log(arr.length);

// let lastElement = getLastElement(arr);
// console.log(lastElement);

// 2. Find the combination of two arrays.
// const arr1 = [1, 2, 3, 4, 5, 6];
// const arr2 = [7, 8, 9];
// const arr3 = [7, 8, 3, 4, 5];
// const combinationArr = [...arr1, ...arr2, ...arr3];
// console.log(combinationArr);

// console.log([...arr1, ...arr2]);
// const combinationArr = arr1.concat(arr2);
// console.log(combinationArr);

// 3. Generate a random integer between 0 to 18.

// const random_no = Math.floor(Math.random() * 18);
// console.log(random_no);

// 4. Create a function that takes an array containing both numbers and strings,
//  and returns a new array containing only the string values.
// let arr = [2, 3, 4, 5, "sahil", "rawat"];
// let newArr = arr.filter((element) => {
//   //   //   console.log(element);

//   //   if (typeof element === "string") {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
//   return typeof element === "string";
// });
// console.log(newArr);

// 5. Find the maximum number in an array.
// let arr = [3, 4, 6, 7, 4, 2, 4, 6, 8, 9, 9, 88, 77, 6, 3, 3, 88, 4];
// // console.log(Math.max(34, 45, 5, 4, 4, 33));

// console.log(Math.max(...arr));

// 6. Write a function that returns the length of a given object (number of keys).
// let obj = {
//   name: "sahil",
//   age: "23",
//   add: "ranakot",
// };
// let objLength = (object) => {
//   return Object.keys(object).length;
// };
// let length = objLength(obj);
// console.log(length);

// // console.log(Object.keys(obj).length);

// 7. In an array of objects filter out those objects which have gender's value male.
// let arr = [
//   {
//     name: "sahil",
//     gender: "male",
//   },
//   {
//     name: "neha",
//     gender: "female",
//   },
//   {
//     name: "goli",
//     gender: "male",
//   },
// ];
// let resultArr = arr.filter((obj) => {
//   return obj.gender === "male";
// });
// console.log(resultArr);

// 8. Given an array of strings, return a new array where all strings are in uppercase.
// let arr = ["shail", "ayush", "ankush", "neha"];
// let newArr = arr.map((elem) => {
//   return elem.toUpperCase();
// });
// console.log(newArr);

// 9. Check if an object is empty (has no keys).

// let obj = {
//   name: "sahil",
//   rollNo: "53",
// };

// let keyArr = Object.keys(obj);
// // let empty = keyArr.length < 1;
// // empty ? console.log("empty") : console.log("not empty");

// let empty = keyArr.length < 1 ? console.log("empty") : console.log("not empty");

// // if (keyArr == 0) {
// //   console.log("empty");
// // }

// 10. Create an array of numbers and double each value using .map().
// let arr = [3, 4, 5, 6, 3, 2, 4, 5];
// let newArr = arr.map((value) => {
//   return value * 2;
// });
// console.log(newArr);

// 11. Convert an array of strings into a single comma-separated string.
// let arr = ["5", "3", "7"];

// // console.log(arr.join());
// // console.log(arr.join("and"));
// // console.log(arr.join(" or "));
// // console.log(arr.join("   "));
// let newArr = arr.join();
// console.log(newArr);

// 12. Write a function to flatten a nested array (one level deep).(e.g., [1, [2, 3], 4] → [1, 2, 3, 4])
// let arr = [1, 2, 3, ["a", 4, 5, [3], 6], 7, 8, 9];
// console.log(arr.flat(2));

// 13. Write a function that checks if all elements in an array are numbers.

// let arr = [1, 2, 3, "s", "k", 3, 4];

// function checkNumberArr(localArr) {
//   let isNumber = localArr.every((elem) => typeof elem === "number");
//   return isNumber;
// }
// let isAllNumber = checkNumberArr(arr);
// console.log(isAllNumber);

// 14. Build a simple isPrime() function to check if a number is prime.
// (not complete)

// let n = 3;

// function checkPrime() {
//   if (n % 2 === 0) {
//     console.log("not prime");
//   }
//   return checkPrime;
// }
// let prime = checkPrime();
// console.log(prime);

// 15. Create a function that removes duplicate values from an array.

// let arr = [1, 9, 2, 3, 4, 5, 3, 2, 1, 3, 4, 5, 5, 7, 8, 9];

// let set = new Set(arr);
// console.log(set);
// let setArr = [...set];
// console.log(setArr);

// 16. What’s the difference between parseInt and Number()?
//later

// 17. Why does 0.1 + 0.2 !== 0.3 in JavaScript?

// 18. Explain floating-point precision issues in JavaScript.
// 19. How would you handle high-precision decimal math in JS?
// 20. What is the difference between slice and splice?
// 21. Create a function that reverse each word of a given sentence. E.g., Mai hun
// manas → sanam nuh iam
// 22. In an array of numbers and strings, only add those numbers which are not strings.
// 23. How would you check if a number is an integer?
// 24. Write a JavaScript function that reverse a number.
// 25. Write a javascript function that returns a passed string with letters in alphabetical order.
// 26. Write a Javascript function that accepts a string as a parameter and conversts the first
// letter of each word of the string in upper case.
// 27. Write a javascript function to get the first element of an array. Passing a parameter 'n' will
// return the first 'n' elements of the array.
// 28. Write a javascript function to get the number of occurrences of each letter in specified
// string.
// 29. write a javascript program to find the most frequent item of an array.
// 30. write a javascript program to shuffle an array.
// 31. How can you update the DOM based on user input in real-time (e.g., live preview of a
// form)?
// 32. How would you handle form validation in real time and show error messages
// dynamically?
// 33. How do you find the closest ancestor element that matches a selector?
// 34. How would you toggle a class on an element when another element is clicked (e.g.,
// show/hide sidebar)?
// 35. Create a Show/Hide Password Toggle
// 36. Create a Sticky Header on Scroll. The header becomes fixed to the top after scrolling
// down. (Key concepts: scroll event, window.scrollY, classList.add/remove)
// 37. What is a pure function, and why is it useful in UI rendering?
// 38. How would you use .map() to transform a list of products into a list of HTML elements?
// 39. How do you use .reduce() to calculate the total price in a shopping cart?
// 40. Explain immutability and how you would update an object in an array without mutating the original.
// 41. How would you compose multiple functions to transform data step-by-step (e.g., sanitize → trim →
// capitalize)? Scenario: You’re preparing user input before storing it. (Expected knowledge: Function
// composition, chaining, pipe or compose logic.)
// 42. What is the difference between forEach and map, and when is it wrong to use map?
// 43. How do you implement your own version of .map() function on arrays?
// 45. Validate that a user's selected date range is no longer than 30 days.
// 46. Calculate difference between two dates in the format of “_ years _ months _days _ hours _ minutes _ sec”.
// 47. Add or subtract n days from a given date. (E.g., Add 7 days to "2025-05-01“)
// 48. Calculate the user's age from their date of birth.
// 49. Write a formatDate(dateStr) function that returns a user-friendly format like Jan 1, 2025. Why is it better to
// centralize this logic in a utility?
// 50. What are the different options and parameters available in toLocaleString and toLocaleDateString etc to
// format date.
// 44. Guess the Output:
// Option Possible Values
// weekday "long", "short", "narrow"
// year "numeric", "2-digit"
// month "numeric", "2-digit", "long", "short"
// day "numeric", "2-digit"
// hour "numeric", "2-digit"
// minute "numeric", "2-digit"
// second "numeric", "2-digit"
// hour12 true or false
// timeZone "UTC", "Asia/Kolkata", etc.
// timeZoneName "short", "long"
// Locale & Options

//from theory..................................................................//
// Conditional Statements............................................
// const age = 18;
// if (age < 18) {
//   console.log("You are an adult");
// } else {
//   console.log("You are a minor");
// }

//scope...........
// function test() {
//   if (true) {
//     var a = 10;
//     var b = 10;
//     let c = 10;
//     const d = 10;
//   }
//   console.log(a == 10);
//   console.log(b == 10);
//   console.log(c == 10);
//   console.log(d == 10);
// }

// test();

// re declare amd re assign
// var a = 1;
// var a = 1;
// a = 2; // ✅ works
// console.log(a);

// let b = 3;
// // let b = 3;
// b = 4; // ✅ works
// console.log(b);

// const c = 5;
// const b = 5;
// c = 6; // ❌ Error
// console.log(c);

// const arr = [1, 2, 3];
// arr.push(4); // ✅ allowed (modifying contents)

//loops in js...........................................................
//for loop...............................

/////////////////////

// for (i = 1; i <= 5; i++) {
//   process.stdout.write(" \n");

//   for (j = 1; j <= i; j++) {
//     process.stdout.write("  ");
//   }
//   for (k = 5; k >= i; k--) {
//     process.stdout.write(" *");
//   }
// }

/////////////

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   process.stdout.write("\n");

//   for (let k = 1; k <= i; k++) {
//     process.stdout.write("  ");
//   }
//   for (let j = n; j >= i; j--) {
//     process.stdout.write("* ");
//   }
// }

//while loop
// let i = 1;
// while (i <= 5) {
//   console.log("Count: " + i);
//   i++;
// }

//////////////////////////////////////
// let i = 1;

// while (i <= 5) {
//   // console.log(i);
//   process.stdout.write(i.toString());
//   i++;
// }

//do...while loop
// let i = 1;
// do {
//   console.log("Do Count: " + i);
//   i++;
// } while (i <= 5);

//   for...of loop
// let fruits = ["apple", "banana", "mango"];
// for (let fruit of fruits) {
//   console.log(fruit);
// }

///for...in loop
// let person = { name: "John", age: 25, city: "Delhi" };
// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }

// Conditionals in JavaScript;..................................................
//1. if statement....................
// let age = 20;

// if (age >= 18) {
//   console.log("You are an adult.");
// }

// 2. if...else statement
// let age = 15;

// if (age >= 18) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are a minor.");
// }

// 3. if...else if...else ladder (else if).

// 4. switch statement

// let day = 3;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   default:
//     console.log("Invalid day");
// }

// 4. switch statement

// let day = 3;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   default:
//     console.log("Invalid day");
// }

// 5. Ternary Operator ( ? : )

// let age = 20;

// // let result = age >= 18 ? "Adult" : "Minor";
// let result = age >= 18 ? "adult" : "miner";

// console.log(result);

// 4. DOM Manipulation.........................................................

//  Example:

// document.querySelector("button").addEventListener("click", () => {
//   document.querySelector("h1").innerText = "Clicked!";
// });
/////////////////////////////
// boolean..............
// let age = 17;

// let a = age >= 18 ? true : false;
// console.log(a);
// console.log(typeof a);
////////////////////
//undefined...........................
// let x;
// console.log(x);
// console.log(typeof x);
/////////////////////////////
// null........................
// let y = null;
// console.log(y);
//////////////////////
// 7. Asynchronous JavaScript........................................................

// 1.Callbacks

//  2. Promises

// 3 async / await

// 4. Fetch API
///////////////
// async function getData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   console.log(data);
// }
// getData();

// Error Handling Methods..................s...............
// 1. try...catch
//////////////
// Used to handle runtime errors.

// try {
//   let num = 10 / 2;
//   console.log(num);

//   let result = y + 5;
//   console.log(result);
// } catch (error) {
//   console.log("Error caught:", error.message);
// }
/////////////////////////////////
// 2. throw
/////////////////////////////////////////
// Used to create custom errors.
// function divide(a, b) {
//   if (b === 0) {
//     throw new Error("Cannot divide by zero!");
//   }
//   return a / b;
// }

// try {
//   console.log(divide(10, 0));
// } catch (error) {
//   console.log("Error:", error.message);
// }
//////////////////////////////////
// try {
//   let age = -5;

//   if (age < 0) {
//     throw new RangeError("Age cannot be negative!");
//   }
// } catch (err) {
//   console.log(err.name); // RangeError
//   console.log(err.message); // Age cannot be negative!
// }
/////////////////////////////////
// 1. map()...................................
// let numbers = [1, 2, 3, 4];

// // multiply each number by 2
// let doubled = numbers.map((num) => num * 2);

// console.log(doubled); // [2, 4, 6, 8]

///////////////////////////////////////////
// 2. filter()
// let numbers = [1, 2, 3, 4, 5, 6];

// // get even numbers
// let evens = numbers.filter((num) => num % 2 === 0);

// console.log(evens); // [2, 4, 6]
//////////////////////////////////////////

// 3. reduce()
// let numbers = [1, 2, 3, 4];

// // sum of all numbers
// let sum = numbers.reduce((acc, curr) => acc + curr, 0);

// console.log(sum); // 10

/////////////////////

//  Differences in One Line:

// map() → transforms every element.

// filter() → selects elements that match a condition.

// reduce() → reduces the array to a single value.

////////////////////////
//  Example using all three together:
// let numbers = [1, 2, 3, 4, 5, 6];

// // Double even numbers and sum them
// let result = numbers
//   .filter((num) => num % 2 === 0) // [2, 4, 6]
//   .map((num) => num * 2) // [4, 8, 12]
//   .reduce((acc, curr) => acc + curr, 0); // 24

// console.log(result); // 24
//...........................................................
// 1. String Functions
// let str = "Hello World";
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(str.length); // 11
// console.log(str.toUpperCase()); // "HELLO WORLD"
// console.log(str.toLowerCase());    // "hello world"
// console.log(arr.slice(0, 5)); // "Hello"
// console.log(str.substring(0,5));   // "Hello"
// console.log(str.replace("World", "JS")); // "Hello JS"
// console.log(str.includes("Hello")); // true

//...........................................................
// 2. Array Functions
// let arr = [1, 2, 3, 4];

// arr.push(5);    // [1, 2, 3, 4, 5]
// arr.pop();      // [1, 2, 3, 4]
// arr.shift();    // [2, 3, 4]
// arr.unshift(0); // [0, 2, 3, 4]

// let doubled = arr
//   .map((x) => x * 2)
//   .filter((x) => x > 2)
//   .reduce((a, b) => a + b); // [0, 4, 6, 8]
// // let filtered = arr.filter(x => x > 2);  // [3, 4]
// // let sum = arr.reduce((a, b) => a + b);  // 9
// // console.log(arr.includes(3));           // true
// console.log(doubled);

//.......................................................
// 3. Math Functions
// console.log(Math.round(4.6)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.ceil(4.1)); // 5
// let arr = [2, 3, 4, 5, 6, 9];
// let arr2 = Math.max(...arr);
// console.log(arr2);

// console.log(Math.max(1, 5, 4, 5, 6, 5, 67, 8,  9, 90, 2)); // 90
// console.log(Math.min(1, 5, 2)); // 1
// console.log(Math.random()); // 0.234 (example, random)
// console.log(Math.pow(2, 3)); // 8
// console.log(Math.pow(3, 2)); // 9   (3 × 3)
// console.log(Math.pow(5, 3)); // 125 (5 × 5 × 5)
// console.log(Math.pow(10, 0)); // 1   (any number ^0 = 1)
// console.log(Math.pow(2, -2)); // 0.25 (1 / (2 × 2))

//...............................................
// 4. Number Functions
// console.log(parseInt("10")); // 10
// console.log(parseInt("10.5")); // 10
// parseInt("10px"); // 10
// parseInt("abc"); // NaN (Not a Number)
// .............
// console.log(parseFloat("10.5")); // 10.5
// parseFloat("3.14"); // 3.14
// parseFloat("10px"); // 10
// parseFloat("abc"); // NaN only works on numbers
// console.log((3.1415).toFixed(2)); // "3.14" (string)
//....................
// (3.1415).toFixed(3);  // "3.142" (rounded to 3 decimal places)
// (10).toFixed(2);      // "10.00"

//..............................................
// 5. Date Functions
// let today = new Date();

// console.log(today); // e.g., Sat Sep 20 2025 18:30:00 GMT+0530
// console.log(today.getFullYear()); // 2025
// console.log(today.getMonth()); // 8  (September, months 0–11)
// console.log(today.getDate()); // 20
// console.log(today.getDay()); // 6 (Saturday, 0–6)
// console.log(today.getHours()); // 18
// console.log(today.getMinutes()); // 30
// console.log(today.getDate().getMonth().getFullYear()); // 30

//..................................................................
// console.log(a);

// var a = "sahil";
// // console.log(a);
//..........................................................................
//closure--------
// closure = they provide ability to access outer function variable.
// function outer() {
//   let a = 5;
//   function inner() {
//     console.log(a);
//   }
//   inner();
// }
// outer();
//................................................................................

// console.log(Math.floor(Math.random() * 7));
//.......................................................

// let arr = [2, 3, 4, 3, 3, 2, 5, 7, 8, 9];
// let arr2 = Set(arr);
// console.log([...arr2]);

// let set = new Set(arr);
// console.log(set);
// let setArr = [...set];
// console.log(setArr);

// let duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
// let dups = arr.filter((n, i) => arr.indexOf(n) !== i);

// console.log([...new Set(dups)]);
// console.log([...new Set(dups)]);
// Output: [1, 2, 3, 4, 5, 9]

// js advance topice.......................................................................................................................

// const users = [
//   { id: 1, name: "sahil", age: "22" },
//   { id: 2, name: "aman", age: "23" },
//   { id: 3, name: "ayush", age: "24" },
//   { id: 4, name: "ankush", age: "25" },
//   { id: 5, name: "sameer", age: "21" },
// ];

// // Filter users whose age is greater than 23
// const newusers = users.filter((user) => Number(user.age) > 23);

// console.log(newusers);
//...........................................................................
// find and findlast method ...........................
// const users = [
//   { id: 3, name: "ayush", age: "24" },
//   { id: 1, name: "sahil", age: "22" },
//   { id: 2, name: "aman", age: "23" },
//   { id: 4, name: "ankush", age: "25" },
//   { id: 5, name: "sameer", age: "21" },
// ];

// const firstUser = users.find((user) => Number(user.age) > 23);
// const lastUser = users.findLast((user) => Number(user.age) > 23);

// console.log("first user is: ", firstUser); // First match
// console.log("first user is: ", lastUser); // Last match

// optional chaining ........................................
// const sahil = {
//   data: {
//     age: 12,
//     add: "uttarakhand",
//   },
// };
// console.log(sahil?.meta?.name);

// Destructuring in JavaScript....................................................
// Destructuring in JavaScript is a feature that allows you to extract
// values from arrays or properties from objects and assign them to
// individual variables in a clean, concise, and readable way.
//
// // Array destructuring
// const colors = ["red", "green", "blue"]; //indexing based
// const [first, second] = colors;

// // console.log(first); // red
// // console.log(second); // green

// // Object destructuringg
// const user = { name: "Sahil", age: 22 }; // names (keys) based
// const { name, age } = user;

// console.log(name); // Sahil
// console.log(age); // 22

// const user = [
//   { name: "sahil ", age: "23", address: "ranakot", pin: 123,[{name:"neha"}]},
//   { name: "ayush" },
// ];
// console.log(user[1].name);
//.....................................................................

// const colors = ["red", "green", "blue"]; //indexing based
// const [first, second] = colors;

// console.log([...first, ...second]);
// console.log([...colors[0]]);j

// const number = ["sahil"];
// const number2 = [7, 8, 9];
// console.log([...number, ...number2]);
//..............................................................
