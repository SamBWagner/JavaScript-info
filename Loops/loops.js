// What's the last value alerted by code and why?
// let i = 3;
//
// while (i) {
//   alert( i-- );
// }
// 1 is the last number displayed as it's passed into the loop. Alerted, then
// decremented. Thus, when we go back into the loop, it sees 0, a falsey value
// and halts.

// Compare these loops
// let i = 0;
// while (++i < 5) alert( i );
//
// i = 0;
// while (i++ < 5) alert( i );

/* No, the values will be different as the top loop will start alerting at 1
 * and the bottom will start alerting at 0.
 *
 * The top will stop at 4 while the bottom will stop at 5
*/

/*
 * For each loop write down which values it is going to show. Then compare with the answer.
 * Both loops alert same values or not?
*/
// for (let i = 0; i < 5; i++) alert( i );
// // 0, 1, 2, 3, 4
//
// for (let i = 0; i < 5; ++i) alert( i );
// 0, 1, 2, 3, 4
// Both will be the same as next is called after each run on the loop. So the
// check will be agnostic to pre/postfix incrementation.

//Use the for loop to output even numbers from 2 to 10.
// for (let i = 0; i < 11; i++) {
//   if (i % 2 != 0) {
//     continue;
//   }
//   alert(i);
// }
// lol that took way too long to remember how mod works haha. Writting forms is
// making me dumb.

// Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }
//
// i = 0;
// while (i < 3) {
//   alert( `number ${i}!` );
//   i++;
// }

// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
//
// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
//
// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.

// let userInput;
// do {
//   userInput = prompt('Please enter a number greater than 100.');
// } while (userInput < 101);

// An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.
//
// In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.
//
// For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.
//
// Write the code which outputs prime numbers in the interval from 2 to n.
//
// For n = 10 the result will be 2,3,5,7.
//
// P.S. The code should work for any n, not be hard-tuned for any fixed value.

// output prime numbers to an inputted value

let userInput = prompt('Please enter a number.');
let isPrime = false;

alert('1 is prime.');
alert('2 is prime.');

for (let i = 3; i <= userInput; i++) {
  if (i % 2 == 0) {
    alert(`${i} is not prime.`);
  }

  isPrime = true;
  for (let j = 3; j <= i; j++) {
    if (i % j == 0) {
      isPrime == false;
    }
  }
  
  if (isPrime) {
    alert(`${i} is prime.`);
  }
}
// lol idk i forgor how to do this not dumb
// this is how they do it.
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}










