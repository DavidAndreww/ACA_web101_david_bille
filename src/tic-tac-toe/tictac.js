

var gamemarker = 'X'

 function playTicTacToe(element) {
     if (gamemarker === 'X') {
     element.innerText = 'O'
     gamemarker = 'O'
    } else {
    element.innerText = 'X'
    gamemarker = 'X'
   }
 }
