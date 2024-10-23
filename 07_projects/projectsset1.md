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
