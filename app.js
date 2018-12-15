
// Game Starts 
// 1. Start Game, CPU generate random RGB number (place number in H1 tag in header)
// 2. Easy  -- displays 3 tags (press)
// 3. Hard -- displays 6 tags(press)
// 4. Start Game, pressed, (New Colors), New Colors pressed, Try Again? when game over
// 5. If win Try Again changes to Correct!


// Start game Button
const game = document.querySelector('#stripe');
// Easy/ Hard Mode -- Node List
const mode = document.querySelectorAll('.mode');
// Div tags
const divs = document.querySelectorAll('.square');
// Message
const message = document.querySelector('#message');
// Header
const header = document.querySelector('#colorDisplay');


// GENERATE RANDOM GUESS VALUE (0-255)

function guess() {
  rand = Math.ceil(Math.random() * 255 + 1)
  return rand
}

// FUNCTION TO LOAD ALL EVENT LISTENERS

loadEventListeners();

function loadEventListeners() {
  // NEW COLORS BUTTON
  game.addEventListener('click', startGame);

  // SQUARE DIVS
  divs.forEach(function (div) {
    div.addEventListener('onclick', changeDivColors)
  });

  // EASY / HARD BUTTON
  mode.forEach(function (mode) {
    mode.addEventListener('click', toggleGameLevel)
  });
}

// StartGame --  add RGB to h-tag
function startGame(e) {
  // Step1 -- Create element
  const rgb = document.createElement('h1');

  // Step2 -- Add class
  rgb.className = 'add-rgb';

  // Step3 -- Create text node -- ADDS RGB COLOR SCHEME TO HEADER
  rgb.appendChild(document.createTextNode
    (`RGB(${guess()}, ${guess()}, ${guess()})`));

  // Step4 -- Append h1 to form
  header.appendChild(rgb);

  // 1. CHANGES TO ALL DIV COLORS
  const divList = Array.from(divs);

  divList.forEach(function (div) {
    div.style.backgroundColor = `rgb(guess(), guess(), guess())`
  });


  e.preventDefault();
}

function changeMessage() {

}



function changeDivColors() {


  // let gameStatus = ['Try Again', 'Correct'];

  // if div !== "guessedColor"
  //   div.style.display = "none"
  //   game.appendChild(gameStatus[0])
  // else
  //   divList.forEach(function(div){
  //   div.style.backgroundColor = "guessedColor"
  //   game.appendChild(gameStatus[1])
  //   }






  // 1. Press wrong div "Try Again appears and div disappears"

  // this.style.backgroundColor = guess();

}

function toggleGameLevel(e) {
  // 1. CHANGES TO ALL DIV COLORS
  // 2. ADDS RGB COLOR SCHEME TO 
  // 3. ENSURES ON ONLY 3 DIVS ARE SHOWN

  // HARD BUTTON
  // 1. CHANGES TO ALL DIV COLORS
  // 2. ADDS RGB COLOR SCHEME TO 
  // 3. ENSURES ON ONLY 6 DIVS ARE SHOWN
}


function gameOver(e) {
  // 2. When correct all divs/ HEADER turn winning color

  // 3. Try again turns to 'Play again

  // message shows --- correct!
}

// change color to all div tags

