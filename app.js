// ONLOAD CODE

document.addEventListener('DOMContentLoaded', () => {
  gameLoad();
})


// UI VARIABLES

// Easy/ Hard Mode -- Node List
const mode = document.querySelectorAll('.mode');
// New Colors button
const reset = document.querySelector('#reset')
// Div tags
const divs = document.querySelectorAll('.square');
// Message
const message = document.querySelector('#message');
// span
const span = document.querySelector('#colorDisplay');
// header
const head = document.getElementsByTagName('h1');


// HELPER FUNCTIONS//
function guess() {
  rand = Math.ceil(Math.random() * 255)
  return rand
}
// STORE RGB COLOR FOR MANIPULATION IN FUNCTIONS
function rgb() {
  return `rgb(${guess()}, ${guess()}, ${guess()})`
}

// FUNCTION TO LOAD ALL EVENT LISTENERS
loadEventListeners();

function loadEventListeners() {
  // NEW COLORS BUTTON
  reset.addEventListener('click', resetGame);

  // SQUARE DIVS
  divs.forEach(function (div) {
    div.addEventListener('click', changeDivColors)
  });

  // EASY / HARD BUTTON
  mode.forEach(function (mode) {
    mode.addEventListener('mouseover', changeMode)
  });
}

// FUNCTIONS //

function gameLoad() {
  let randomColors = new Array;
  let rand = Math.ceil(Math.random() * 5);

  for (let i = 0; i < 6; i++) {
    randomColors[i] = rgb();
  }

  span.innerHTML = randomColors[rand];
  span.style.fontSize = '68px';

  function assignDivColors() {
    const divList = Array.from(divs);

    divList.forEach(function (div, i) {
      div.style.backgroundColor = randomColors[i];
    });
  }
  assignDivColors();
}


function resetGame(e) {
  reset.style['background-color'] = 'steelblue';
  reset.style.color = "white";
  reset.innerHTML = "New Colors";
  message.innerText = "";
  gameLoad();
  e.preventDefault();
}


function changeMode(e) {

  divsList = Array.from(divs);
  if (e.target.innerText === "Easy") {
    e.target.style.backgroundColor = 'steelblue';
    e.target.style.color = 'white';
    divsList[3].style.opacity = '0';
    divsList[4].style.opacity = '0';
    divsList[5].style.opacity = '0';
  } else {
    e.target.style.backgroundColor = 'steelblue';
    e.target.style.color = 'white';
    divsList[3].style.opacity = '1';
    divsList[4].style.opacity = '1';
    divsList[5].style.opacity = '1';
  }
  gameLoad();
  e.preventDefault();
}

function changeDivColors(e) {
  if (e.target.style['background-color'] === span.innerText.toLowerCase()) {
    gameWin();
  } else {
    e.target.style.opacity = 0;
    message.innerText = 'Try Again'
    message.style.textCenter;
  }

}

function gameWin(e) {
  divsList = Array.from(divs)
  color = span.innerText.toLowerCase();
  reset.innerText = "Play Again?";
  head[0].style['background-color'] = color;

  divsList.forEach(function (div) {
    div.style.opacity = 1;
    div.style.backgroundColor = color;
  });
  message.innerText = 'Correct!'
}












