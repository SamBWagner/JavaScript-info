'use strict'

let userInput = prompt('Please enter an integer');

if (userInput == 0) {
  alert('You entered 0')
} else if (userInput > 0) {
  alert('You entered something GREATER than 0');
} else {
  alert('You entered something LESS than 0');
}

