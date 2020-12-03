'use strict';

var userName = prompt('What is your name?');
console.log('The user name is ' + userName + '!');

// Question One
//DONE - ask question y/n or yes or no response - normalize case
var homeTown = prompt('Do I live in Seattle?').toLowerCase();

// I log my result to get proof of life!
// console.log(homeTown);
function questionOne() {

  if (homeTown === 'yes' || homeTown === 'y') {
    //DONE - console.log the answer IF IT IS CORRECT in a string concatenation
    //DONE - if it works, comment out console.log, send alert to user
    // console.log('Yes, I live in Seattle, ' + userName + ' ' + ' answered: ' + homeTown);
    alert('That\'s Correct!');
  }

}

questionOne();

