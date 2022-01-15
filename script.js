document.addEventListener('DOMContentLoaded', () => {
  let randomNumber;
  let tries;
  let x = 'tries'
  let y = 0
  let retry = document.getElementById("retry");
  retry.style.display = "none";
  let result = document.getElementById('result');

  easyMode()
  function verifyNumber() {
    if (tries == 0) {
      return;
    }
    let currentNumber = document.getElementById('inputNumber').value;
    if (currentNumber == randomNumber) {
      result.textContent = 'Congratz ! You have found the random number.';
      result.style.color = 'green'
      tries = 0
      retry.style.display = "initial"
      return;

    }
    tries -= 1;
    if (tries == 1) {
      x = "try"
    }
    if (currentNumber < randomNumber) {
      result.textContent = 'The random number is GREATER. \n You have ' + tries + ' ' + x + ' left';
    } else {
      result.textContent = 'The random number is LOWER. \n You have ' + tries + ' ' + x + ' left';
    }
    if (tries == 0) {
      result.textContent = 'You have lost, try again !';
      result.style.color = 'red'
      retry.style.display = "initial"
    }
  }
  retry.addEventListener('click', function () {
    x = 'tries'
    if (y == 1) {
      easyMode()
    } else if (y == 2) {
      normalMode()
    } else {
      hardMode()
    }
  })
  document.getElementById('inputNumber').addEventListener('keydown', function (event) {
    if (event.code == 'Enter' || event.key == 'Enter') {
      verifyNumber();
      document.getElementById('inputNumber').value = '';
    }
  })
  Array.from(document.getElementsByClassName('startButton')).forEach(button => {
    button.addEventListener('click', function () {
      if (button.id == 'easyButton') {
        easyMode()
      } else if (button.id == "normalButton") {
        normalMode()
      } else {
        hardMode()
      }
    })
  })

  function easyMode() {
    document.getElementById("numberRange").textContent = '1 and 10'
    randomNumber = Math.floor(Math.random() * 10) + 1;
    tries = 3;
    result.textContent = "You have " + tries + " tries left"
    result.style.color = 'black'
    console.log(randomNumber);
    y = 1
    retry.style.display = "none";
  }

  function normalMode() {
    document.getElementById("numberRange").textContent = '1 and 20'
    randomNumber = Math.floor(Math.random() * 20) + 1;
    tries = 4;
    result.textContent = "You have " + tries + " tries left"
    result.style.color = 'black'
    console.log(randomNumber);
    y = 2
    retry.style.display = "none";
  }

  function hardMode() {
    document.getElementById("numberRange").textContent = '1 and 30'
    randomNumber = Math.floor(Math.random() * 30) + 1;
    tries = 5;
    result.textContent = "You have " + tries + " tries left"
    result.style.color = 'black'
    console.log(randomNumber);
    y = 3
    retry.style.display = "none";
  }
})



//comment saavoir la derniere fonctionn appelle en span
//19h20 - 22h jeu sans gros visuel
