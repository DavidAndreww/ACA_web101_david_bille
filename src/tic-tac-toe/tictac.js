//previous click 'odd or even'
//var player1, var player2, var previousClick

// console.log('hey')
// var box = document.querySelector('.box')
// var allBoxes = document.querySelectorAll('.box')
// box.onclick = function setXO (event) {
//   console.log('hey you clicked me', event)
//   event.target.innerText = '0'
// }
var gamemarker = 'x'
// function changeMarkerToX(){ }
// function changeMarkerToO(){ }

 function playTicTacToe(element) {
  //  if(element.innerText === ('x' || 'o')) {
  //    alert('no')
  //    return
  //  }
   if (gamemarker === 'x') {
     element.innerText = 'o'
     gamemarker = 'o'
     
   } else {
    element.innerText = 'x'
    gamemarker = 'x'
     
   }
 }
// if () {
  
// } else {
  
// }