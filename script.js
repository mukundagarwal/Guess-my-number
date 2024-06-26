'use strict';
//guess a number between 1 and 20
//decrease score by 1 on every wrong ans
//-----------------DOM MANIPULATION---------------

//selecting properties in JS just like CSS
// . for class
// # for id
console.log(document.querySelector('.message').textContent);
//what is DOM - document object model - allows JS to access HTML and CSS elements
// we can also change the value of classes in HTML
// document.querySelector('.message').textContent = 'Correct Number!';

//generating a random number outside of on-click function bcoz it should be generated once
let number = Math.ceil(Math.random() * 20);
console.log(number);
let score = 20;
let highscore = 0;

//checking Click Events

// click event on CHECK button
//addEventListener takes 2 args - type of event, function (which is called when the click happens , tells what to do)
document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  //this takes the value we input in the guess box and prints that value when we press the check button
  if (!guessNumber)
    document.querySelector('.message').textContent = '🚩 No Number!';
  else if (guessNumber == number) {
    document.querySelector('.message').textContent = '🥳Correct Number!';
    document.querySelector('.number').textContent = number;
    //we also have to change the css style of the page
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //we also have to put the current score to highscore if score > highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guessNumber > number && score > 0) {
    document.querySelector('.message').textContent = '📈Too High!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guessNumber < number && score > 0) {
    document.querySelector('.message').textContent = '📉Too Low!';
    score--;
    document.querySelector('.score').textContent = score;
  }

  if (score === 0) {
    document.querySelector('.message').textContent =
      'Bad Luck, You have ran out of Points!';
  }
});

//implementing game reset funcitonality - checking click event on again btn
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.ceil(Math.random() * 20);
  console.log(number);
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Guess My Number!';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
