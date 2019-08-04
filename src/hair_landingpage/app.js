var headingEl = document.getElementById('mainText');
console.log(headingEl);

headingEl.innerHTML = 'Great hairstyles come from Alex Sanchez!';

var title = document.getElementById('title');
console.log(title);
title.innerHTML = "B.T.S.";

var buttonText = document.getElementsByTagName('button');
console.log(buttonText);

buttonText[3].firstChild.data = 'Hours';
buttonText[4].style.backgroundColor = 'red';
console.log(document.all);
