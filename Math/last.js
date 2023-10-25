'use strict'
// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);
//
// alert(a + b); // 12

// Doesn't work because the returned values from the prompt are strings and are
// never converted. Here's how to fix it:

let a = Number(prompt("First number?", 1)); // Either is fine
let b = +prompt("Second number?", 2); // + unary is shorter but odd imo

alert(a + b); // 12
