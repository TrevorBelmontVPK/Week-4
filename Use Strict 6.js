"use strict"; 
let b = 5;
let a = 4; 
function test6() { 
let a = 7; 
function again() { 
let a = 8; 
console.log("b = " + a);   
} 
again(); 
console.log("a = " + a);   
} 
test6(); 
console.log("a = " + a);