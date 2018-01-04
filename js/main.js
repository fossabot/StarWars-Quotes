/*
 * Modified 'Particleground' of Jonathan Nicol
 */

 //Initialize particles
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#fff',
    lineColor: 'rgba(255, 255, 255, 0)'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);


var quotes = [
"It’s not my fault - Han Solo",
"Your focus determines your reality - Qui-Gon Jinn",
"Do. Or do not. There is no try - Yoda",
"Somebody has to save our skins - Leia Organa",
"In my experience there is no such thing as luck - Obi-Wan Kenobi",
"I find your lack of faith disturbing - Darth Vader",
"I’ve got a bad feeling about this - basically everyone",
"It's a trap! - Admiral Ackbar",
"So this is how liberty dies... with thunderous applause - Padmé Amidala",
"Your eyes can deceive you. Don't trust them - Obi-Wan Kenobi",
"Never tell me the odds - Han Solo",
"Mind tricks don't work on me - Watto",
"Great, kid. Don't get cocky - Han Solo",
"Stay on target - Gold Five",
"This is a new day, a new beginning - Ashoka Tano"
];
var index = 0;
function getQuote() {
    document.getElementById("quote").innerHTML = quotes[index];
    if(index == quotes.length-1){
      index = 0;
    } else{
    index++;
  }
}
