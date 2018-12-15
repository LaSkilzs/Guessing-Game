// ONLOAD CODE

document.addEventListener('DOMContentLoaded', () => {
  gameLoad();
})




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

// EASY
const easy = document.getElementById('mode').setAttribute('selected', 'selected');
// HARD
const hard = document.getElementById('mode').setAttribute('selected', 'selected');


// GENERATE RANDOM GUESS VALUE (0-255)

function guess() {
  rand = Math.ceil(Math.random() * 255 + 1)
  return rand
}

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
    div.addEventListener('onclick', changeDivColors)
  });

  // EASY / HARD BUTTON
  mode.forEach(function (mode) {
    mode.addEventListener('click', changeMode)
  });
}


function gameLoad() {
  let randomColors = new Array;
  let rand = Math.ceil(Math.random() * 5);

  for (let i = 0; i < 6; i++) {
    randomColors[i] = rgb();
  }

  span.innerHTML = randomColors[rand];

  function assignDivColors() {
    const divList = Array.from(divs);

    divList.forEach(function (div, i) {
      div.style.backgroundColor = randomColors[i];
    });
  }
  assignDivColors();
}

function resetGame(e) {
  reset.style.backgroundColor = 'steelblue';
  reset.style.color = "white";
  reset.innerHTML = "New Colors";
  gameLoad();
  e.preventDefault();
}


function changeMode(e) {
  modeList = Array.from(mode);
  divsList = Array.from(divs);

  modeList.forEach(function (btn) {
    if (btn.innerText === "Easy") {
      btn.setAttribute('selected', 'selected')
      btn.style.backgroundColor = 'steelblue';
      btn.style.color = 'white';

      for (let i = 0; i < 3; i++) {
        divsList[i].style.display = 'none';
      }
    } else {
      btn.style.backgroundColor = 'steelblue';
      btn.style.color = "white";

      for (let i = 0; i < divsList.length; i++) {
        divsList[i].style.display
      }
    }
    e.preventDefault();
  });


  /* MODE
1.
  1. function easyMode -- calls reset and only display 3
   divs / changes background to header
  2. function hardMode -- calls reset and displays all divs /
  changes background to header
*/




}

function changeDivColors(e) {

}

function gameWin(e) {
  /* GAME SUCCESS
  1. if userColor === cpuColor
      message.innerText =  "Correct!"
      all divs && header === correct color
      reset.innerText  === "PLAY AGAIN?"
    end
*/

}


function gameOver(e) {
  /* GAME FAILURE
  1. if userColor !== cpuColor
     message.innerText =  "TRY AGAIN"
     choose div === display.none
*/
}


/*
    Toggle Logic
    1. "New Colors"
      if button name == "new colors"
        - change color / div colors "
      else if  -- "Play Again?"
        - change color / div colors
        - text back to "New Colors"
      end

    2. "Easy"
      -- change div count to 3
      -- change colors /div colors

    3. "Hard"
      -- change div count to 6
      -- chante colors / div colors
*/

// function gameLoad(e) {
//   //header with color in 35px" white font, bold
//   span.innerHTML = rgb();

//   // color of header
//   span.style.backgroundColor = rgb();

//   // function to divColor 
//   function changeDivColors() {
//     // // 1. CHANGES TO ALL DIV COLORS
//     const divList = Array.from(divs);

//     divList.forEach(function (div) {
//       div.style.backgroundColor = rgb();
//     });

//   }







