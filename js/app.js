'use strict';

// write 5 questions that accept yes or no, y or n, capital or not
// question 1 do I live in Alaska
// question 2 do I work for the Army
// question 3 do I love hockey?
// question 4 do I ride motorcycles?
// question 5 have I ever jumped out of an airplane?

var userName = prompt('What\'s Your Name??');
alert('Welcome ' + userName + '!! Thank\'s For Stopping bye! We\'re Going to Play a Guessing Game about.... ME!');

var questionOne = prompt('Do I live in Alaska?!').toLowerCase();
if(questionOne === 'yes' || questionOne === 'y'){

  alert('Yes I do!');
  // console.log(questionOne);
}else {
  alert('Sorry You Guessed Wrong!!');
  // console.log(questionOne);
}

var questionTwo = prompt('Do I work for the Army?!').toLowerCase();
if(questionTwo === 'yes' || questionTwo === 'y'){

  alert('Yes I do!');
  // console.log(questionTwo);
}else {
  alert('Sorry You Guessed Wrong!!');
  // console.log(questionTwo);
}

var questionThree = prompt('Do I love Football?!').toLowerCase();
if(questionThree === 'no' || questionThree === 'n'){

  alert('That\s Right! Go hockey!');
  // console.log(questionThree);
}else {
  alert('Sorry You Guessed Wrong!! Hockey is the best!');
  // console.log(questionThree);
}

var questionFour = prompt('Do I ride motorcycles?!').toLowerCase();
if(questionFour === 'yes' || questionFour === 'y'){
  alert('Yes I do! It\'s so freeing!');
  //console.log(questionFour);
}else {
  alert('Sorry You Guessed Wrong!!');
  // console.log(questionFour);
}

var questionFive = prompt('Have I ever been dumb enough to jump out of an airplane?!').toLowerCase();
if(questionFive === 'yes' || questionFive === 'y'){
  alert('Yes I\'m so stupid!');
  // console.log(questionFive);
}else {
  alert('Sorry You Guessed Wrong!! I\'m a total idiot!');
  // console.log(questionFive);
}
