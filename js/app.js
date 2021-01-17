'use strict';

// write 5 questions that accept yes or no, y or n, capital or not
// question 1 do I live in Alaska
// question 2 do I work for the Army
// question 3 do I love hockey?
// question 4 do I ride motorcycles?
// question 5 have I ever jumped out of an airplane?

var userName = prompt('What\'s Your Name??');
alert('Welcome ' + userName + '!! Thank\'s For Stopping bye! We\'re Going to Play a Guessing Game about.... ME!');

var answerOne = prompt('Do I live in Alaska?!').toLowerCase();
if(answerOne === 'yes' || answerOne === 'y'){

  alert('Yes I do!');
  // console.log(answerOne + ' is the correct answer');
}else {
  alert('Sorry You Guessed Wrong!!');
  // console.log(answerOne + ' is incorrect');
}

var answerTwo = prompt('Do I work for the Army?!').toLowerCase();
if(answerTwo === 'yes' || answerTwo === 'y'){

  alert('Yes I do!');
  // console.log(answerTwo + ' is the correct answer');
}else {
  alert('Sorry You Guessed Wrong!!');
  // console.log(answerTwo + ' is incorrect');
}

var answerThree = prompt('Do I love Football?!').toLowerCase();
if(answerThree === 'no' || answerThree === 'n'){

  alert('That\'s Right! Go hockey!');
  // console.log(answerThree + ' is the correct answer');
}else {
  alert('Sorry You Guessed Wrong!! Hockey is the best!');
  // console.log(answerThree + ' is incorrect');
}

var answerFour = prompt('Do I ride motorcycles?!').toLowerCase();
if(answerFour === 'yes' || answerFour === 'y'){
  alert('Yes I do! It\'s so freeing!');
  //console.log(answerFour + ' is the correct answer');
}else {
  alert('Sorry You Guessed Wrong!!');
  // console.log(answerFour + ' is incorrect');
}

var answerFive = prompt('Have I ever been dumb enough to jump out of an airplane?!').toLowerCase();
if(answerFive === 'yes' || answerFive === 'y'){
  alert('Yes I\'m so stupid! Thanks for playing my game ' + userName + '!');
  // console.log(answerFive + ' is the correct answer');
}else {
  alert('Sorry You Guessed Wrong!! I\'m a total idiot! Thanks for playing my game ' + userName + '!');
  // console.log(answerFive + ' is incorrect');
}

var answerSix = prompt('Guess a number between 1 and 10! You\'ve only got 4 guesses!');
for(var i = 0; i < 3; i++){
  if(i === 3){
    alert('Sorry, too many attempts! the correct answer was 5!');
    break;
  }
  if(answerSix === '5') {
    alert('You got it right!');
    break;
  } else if (answerSix <5) {
    alert('Too Low');
  } else if (answerSix >5) {
    alert('Too High!');
  }
  answerSix = prompt('Pick a number between 1 and 10!');
  console.log(answerSix);
}


var tooLow = ['5', '10', '15', '20'];
var tooHigh = ['30', '35', '40', '45'];

for (var i = 0; i < 6; i++){
  var answerSeven = prompt('Guess my age in increments of 5!').toLowerCase();
  //console.log(answerSeven);
  if(answerSeven === '25' || answerSeven === 'twenty five'){
    alert('That is correct!');
    break;
  } else{
    for(var j = 0; j < tooHigh.length; j++){
      if (tooLow [j] === answerSeven){
        alert('You\'ve guessed too low! But thank you');
        break;
      } if(tooHigh [j] === answerSeven){
        alert('You\'ve guessed way too high! I don\'t look that old');
        break;
      }
      if(j === tooHigh.length - 1){
        alert('Invalid input. Please put a number');
      }
    }
  }
}

// Check read me for credit for this loop!
