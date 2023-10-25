'use strict'

// What is the result of the or
// alert( null || 2 || undefined ); // It will return 2

// alert( alert(1) || 2 || alert(3) ); // It will alert 1 as it's evaluated. Then 2 as it's the first non-falsey value

// alert( 1 && null && 2 ); // It will alert null as it's the first falsey value

// alert( alert(1) && alert(2) );
// It will alert both 1, then 2, then 2 as it's the final value ❌
// Wrong. It'll alert 1, then undefined as the return value of the first alert
// is undefined. Thus, the last alert will never evaluate due to the first 
// being falsey

// alert(null || 2 && 3 || 4);
// true ❌ lol no
// So it evaluates the 2 && 3 first. Which returns 3. 
// Then, the expressions are resolved from left to right
// So null || 3 returns 3 as three is the first truthy value
// then 3 || 4 returns 3 as 3 is the first truthy value
// So, the alert() will return 3

// let age = 14;
//
// if (!(age >= 14) || !(age <= 90)) {
//   alert('age was outside the values.')
// }
// else{
//   alert('age was between the values.')
// }
//
// if (age < 14 || age > 90) {
//   alert('age was outside the values.')
// }
// else{
//   alert('age was between the values.')
// }

// Which of these will alert?
// if (-1 || 0) alert( 'first' ); // This will
// if (-1 && 0) alert( 'second' ); // This wont
// if (null || -1 && 1) alert( 'third' ); // This will

let userName = prompt('Please enter your Username.');
let password;

if (!userName) {
  alert('Cancelled.');
}
else if (userName != 'Admin') {
  alert('I don\'t know.');
}
else {
  password = prompt('Pleas enter the admin password.');

  if (!password) {
    alert('Cancelled.');
  }
  else if (password != 'TheMaster') {
    alert('Wrong password.');
  }
  else {
    alert('Welcome!');
  }
}

// This is their solution
// Not sure I like it... Hmmmm 🤔
userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}
