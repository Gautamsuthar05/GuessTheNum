let randomvalue = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#submit");
const input = document.querySelector("#num");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".remain");
const loworhi = document.querySelector(".lowOrhi");
const startOver = document.querySelector(".result");

const p = document.createElement("p");

let prevguess = [];
let newguess = 1;

let playgame = true;

if (playgame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(input.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (guess >= 1 && guess <= 100) {
    prevguess.push(guess);
    if (newguess === 11) {
      displayguess(guess);
      displaymessage(`Game over. Random number was ${randomvalue}`);
      endgame();
    } else {
      displayguess(guess);
      checkguess(guess);
    }
  } else {
    alert("Please enter a valid guess.");
  }
}

function checkguess(guess) {
  if (guess === randomvalue) {
    displaymessage(`You guessed it right.`);
    endgame();
  } else if (guess < randomvalue) {
    displaymessage(`Number is TOOO low`);
  } else if (guess > randomvalue) {
    displaymessage(`Number is TOOO High`);
  }
}

function displayguess(guess) {
  input.value = "";
  guessSlot.innerHTML += `${guess},`;
  newguess++;
  remaining.innerHTML = `${11 - newguess}`;
}

function displaymessage(message) {
  loworhi.innerHTML = `${message}`;
}

function endgame() {
  input.value = "";
  input.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newgamee">Start New Game</h2>`;
  startOver.appendChild(p);
  playgame = false;
  newgame();
}

function newgame() {
  const newgamebtn = document.querySelector("#newgamee");
  newgamebtn.addEventListener("click", function (e) {
    randomvalue = parseInt(Math.random() * 100 + 1);
    newguess = 1;
    prevguess = [];
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - newguess}`;
    input.removeAttribute("disabled");
    startOver.removeChild(p);
    loworhi.innerHTML = "";
    playgame = true;
  });
}
