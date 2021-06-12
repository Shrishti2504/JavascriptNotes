/* 1. Ways to print Javascript */
/* console.log("Hello this World"); */
/* alert("Hello"); */
/* document.write("This is a document write"); */

/* 2. JavaScript console API */
// console.log("Hello this World ", (2+3), " another log");
// console.warn("This is a warning");
// console.error("This is a error");

var a = 25;
var b = 35;
console.log(a + b);

// 3. DATA TYPES

// Strings
var str1 = "Hello this a string";
var str2 = "Hello this is also a string";

// Numbers
var num1 = 455;
var num2 = 55.56;

// Objects
var marks = {
    Janavi: 72,
    Jaimit: 75,
    Shrishti: 99.98
};
console.log(marks);

// Boolean
var p = true;
var q = false;
console.log(p, q);

// undefined
var s;
s = undefined;

// Null
var t;
var t = null;

// There are two types of datatypes which are:
// Primitive DataType: String, Number, Boolean, Undefined, Null and Symbol.
// Reference DataType: Objects and Arrays.

var arr = ["Shrishti", "Jaimit", "Janavi", 5, str1];
console.log(arr);

console.clear();

// 4. Operators in JavaScript

// Arithmetic operations
var a = 47;
var b = 58;
console.log("The sum of a and b is ", a + b);
console.log("The difference of a and b is ", a - b);
console.log("The product of a and b is ", a * b);
console.log("The division of a and b is ", a / b);

var c = b;
c += 2; // which means c = c + 2
c -= 2; // which means c = c - 2
c *= 2; // which means c = c * 2
c /= 2; // which means c = c / 2
console.log(c);

// Comparision operations
var d = 35;
var e = 55;
console.log(d == e);
console.log(d <= e);
console.log(d >= e);
console.log(d < e);
console.log(d > e);

console.clear();

// Logical Operations

// Logical and
//  console.log(true && true);
//  console.log(true && false);
//  console.log(false && true);
//  console.log(false && false);

// Logical or
//  console.log(true || true);
//  console.log(true || false);
//  console.log(false || true);
//  console.log(false || false);

//  Logical not
//  console.log(!true);
//  console.log(!false);


// Functions
// DRY = Do not repeat yourself
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}

c1 = avg(2, 3);
c2 = avg(35, 23);

// console.log(c1, c2);

// Conditions

// Single if statement condition

// var abc = prompt("What's your age??");
// alert("Your age is " + abc);
// if(abc >= 18){
//     alert("You have become an adult");
// } 

// if-else statement condition

// var abc = prompt("What's your age??");
// alert("Your age is " + abc);
// if(abc >= 18){
//     alert("You have become an adult");
// } 
// else {
//     alert("You are still not an adult");
// }

// if-else ladder statement condition

// var abc = prompt("What's your age?");
// alert("Your age is " + abc);
// if(abc < 8){
//     console.log("You are still child");
// }
// else if(abc < 18){
//     console.log("You are an andolescent");
// }
// else{
//     console.log("You have become an adult");

// }

// var drink = prompt("Enter your age");
// if( drink >= 15){
//     console.log("You can drink rasna")
// }else{
//     console.log("You cannot drink rasna")
// }

// Loops
// var a = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(a);

// For loop method
// for(var i=0; i<a.length; i++){
//     if(i == 4){
//         continue;
//     }
//     console.log(a[i]);
// }

// ForEach method
// a.forEach(function(element){
//     console.log(element);
// })

// While loop method
// let w = 0;

// while(w < a.length){
//     console.log(a[w]);
//     w++;
// }

// Do While Loop method
// let f = 0;

// do{
//     console.log(a[f]);
//     f++;
// }
// while (f < a.length);

// Arrays Methods
let a = ['fan', 'camera', 120, null, true];

// length
// console.log(a.length);

// pop
// a.pop();
// console.log(a);

// push
// a.push("shrishti");
// console.log(a);

// shift
// a.shift();
// console.log(a);

// unshift
const newline = a.unshift("shrishti");
console.log(newline);
// console.log(a);








