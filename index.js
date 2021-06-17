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
let qwer = ['fan', 'camera', 120, null, true];

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
// const newline = qwer.unshift("shrishti");
// console.log(newline);
// console.log(qwer);

// String Method

// let myfirstString = "Hello this is Shrishti";

// String length
// console.log(myfirstString.length);

// String indexOf Method
// console.log(myfirstString.indexOf("Shrishti"));
// console.log(myfirstString.lastIndexOf("is"));

// String Slice Method
// console.log(myfirstString.slice(0, 6));

// String Replace Method
// console.log(myfirstString.replace("Shrishti", "Jaimit"));

// Time and Date in JavaScript

// new Date()
// new Date() creates a new date object with the current date and time:
// example:

// let myDate = new Date;
// console.log(myDate);
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth());
// console.log(myDate.getDay());
// console.log(myDate.getTime()); 
// console.log(myDate.getSeconds());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());
// console.log(myDate.getDate());

// DOM manipulation

// Each element of html can be specified by dom manipulation as you can see below  
console.log(document.firstElementChild.lastElementChild);

// id
console.log(document.getElementById('btn'));

// you can also apply method and style by dom manipulation
let v = document.getElementById('btn').click();
console.log(v + ' clicked');


// class
// console.log(document.getElementsByClassName('container'));

// in class element also you can apply style
let g = document.getElementsByClassName('content');
g[0].style.background="pink";

// console.log(g[0].innerHTML);
// console.log(g[0].innerText);

let h = document.getElementsByClassName('container');
h[0].style.border="2px solid red";
h[0].style.background="cyan";
h[1].style.border="2px solid red";
h[1].style.background="cyan";


// element tag
// you can also select single element tag
document.getElementsByTagName("h1")[0].style.color = "green";

// document.getElementsByTagName("button");
let tn = document.getElementsByTagName("div");
console.log(tn);

// You can also add elements using DOM manipulation
let jt = document.createElement("p");
jt.innerText = "This is a great paragraph.";



h[0].appendChild(jt);
jt.style.margin = "10px";
jt.style.fontFamily = "Helvetica";

let si = document.createElement("b");
si.innerText = "This is a bold paragraph.";
jt.style.margin = "10px";
jt.style.fontFamily = "Helvetica";

// you can also replace elements using replaceChild
h[0].replaceChild(si, jt);

// to remove child elements
h[0].removeChild(si);

// selecting using query
console.log(document.querySelector('.container')[0]);
console.log(document.querySelector('.container')[1]);

// Events in JavaScript

function clicked(){
    document.querySelectorAll('.container')[0].style.background = "#2a9d8f";
    document.querySelectorAll('.container')[1].style.background = "#2a9d8f";
    
    console.log('you clicked me');
}

// window.onload = function(){
//     console.log('you loaded');
// }

// start.addEventListener('click', function(){
//     console.log('again clicked me 😡');
// })

// start.addEventListener('mouseover', function(){
//     console.log('you came!!');
// })

// start.addEventListener('mouseout', function(){
//     console.log('you going!?');
// })

let ls = document.querySelectorAll('.container')[1].innerHTML;
start.addEventListener('mouseup', function(){
    document.querySelectorAll('.container')[1].innerHTML = ls;
    console.log('you up!?');
})

start.addEventListener('mousedown', function(){
    document.querySelectorAll('.container')[1].innerHTML = '<b> you changed us by clicking </b>'
    document.querySelectorAll('.container')[1].style.color = "white";
    console.log('you down!?');
})









