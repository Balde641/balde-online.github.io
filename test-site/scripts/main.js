let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox1.png') {
      myImage.setAttribute('src','images/firefox2.png');
    } 
    else if(mySrc === 'images/firefox2.png') {
      myImage.setAttribute('src','images/firefox3.png');
    }
    else if(mySrc === 'images/firefox3.png') {
      myImage.setAttribute('src','images/firefox4.png');
    }
    else {
      myImage.setAttribute('src','images/firefox1.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  }
  else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}