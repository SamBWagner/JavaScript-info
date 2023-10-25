'use strict'

let usersName = prompt('Hello there. \n Please provide your name:');

while (!usersName) {
  usersName = prompt('Sorry, you didn\'t provide a name. Please do so:');
}

alert(`Your name is ${usersName}. Hello!`);

