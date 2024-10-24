# Project related to DOM 

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

``` javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  // console.log(button)
  button.addEventListener('click', function (e) {
    // console.log(e)
    // console.log(e.target)

    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
      default:
        console.log('default case match');
        break;
    }
  });
});


```

## project 2

``` 

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let weightGuide = 0;

    if (bmi < 18.6) {
      weightGuide = 'Under Weight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      weightGuide = 'Normal';
    } else {
      weightGuide = 'Overweight';
    }

    results.innerHTML = `<span>${bmi} ${weightGuide}</span>`;
  }
});


```

## project 3 

```javascript

const clock = document.getElementById('clock');
// document.querySelector("#clock") // can use query selector also

setInterval(function () {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```

## project 4

```javascript

let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

// here it checks through different conditions
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`Please enter a valid number`);
  } else if (guess < 1) {
    alert(`Please enter a number more than 1`);
  } else if (guess > 100) {
    alert(`Please enter a number less than 100`);
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`GameOver. The number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// here it checks if its low or high and calls displayMessage
function checkGuess(guess) {
  if (guess === randomNum) {
    displayMessage(`Yes!! You guessed it right :)`);
  } else if (guess < randomNum) {
    displayMessage(`Your guess is too low!`);
  } else if (guess > randomNum) {
    displayMessage(`Your guess is too high!`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess},  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

// here it displays messages
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  randomNum = parseInt(Math.random() * 100 + 1);
  prevGuess = [];
  numGuess = 1;
  guessSlot.innerHTML = '';
  remaining.innerHTML = `${11 - numGuess}`;
  userInput.removeAttribute('disabled');
  startOver.removeChild(p);
  playGame = true;
}

```

## project 5 (Keyboard)

```javascript

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class = "color">
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>
  `;
});


```

## project 6 (Unlimited colors)

```javascript

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
};

console.log(randomColor());

const body = document.querySelector('body');

const changeBackground = function () {
  body.style.backgroundColor = randomColor();
};

let intervalId;

const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBackground, 1000);
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

const start = document
  .querySelector('#start')
  .addEventListener('click', startChangingColor);

const stop = document
  .querySelector('#stop')
  .addEventListener('click', stopChangingColor);

```