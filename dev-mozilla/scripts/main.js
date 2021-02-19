
let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/mazdaRX7.png') {
      myImage.setAttribute('src','images/mazdaRX7.png');
    } else {
      myImage.setAttribute('src','images/mazdaRX7.png');
    }
}

//personalized name

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `JDM is cool, ${myName}`;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'JDM is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

