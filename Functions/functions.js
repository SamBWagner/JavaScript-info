'use strict'

// is the else needed?
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm('Did parents allow you?');
//   }
// }
//
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm('Did parents allow you?');
// }
// No, as the flow is scoped the the function, if you return, the rest will not
// run. So elses become pointless.

// Re write this with without the if in a single line. One with ? other with ||
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }
// //
// function checkAgeQuestion(age) {
//   return age > 18 ?  true : confirm('Did parents allow you?');
// }
//
// function checkAgeOr(age) {
//   return age > 18 || confirm('Did parents allow you?');
// }
//
// checkAge(18);
// checkAgeQuestion(18);
// checkAgeOr(18);

// write a function that returns the minimum given two numbers
// function min(a, b) {
//   return a < b ? a : b;
// }
//
// alert(min(8, 9));

// Create a page which prompts the user for a number and a power and returns 
// the result. Only allow natural numbers above 1

function pow(base, power) {
  if (base < 1 || power < 1 || base % 1 != 0 || power % 1 != 0) {
    return -1;
  }
  return base ** power; 
}

let base = prompt('Please enter a base number you\'d like to power');
let power = prompt('Please enter an exponent to use on your base');

let answer = pow(+base, +power);

if (answer != -1) {
  alert(`the answer is: ${answer}`);
}
alert('please enter only natural numbers.');
