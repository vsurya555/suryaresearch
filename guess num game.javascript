<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  </head>
  <body>
    <div class="container-fluid bg-container">
      <div class="row bg-white">
        <div class="col-12 col-md-6 m-auto bg-white pt-5 pb-5">
          <img
            class="guess-game-img"
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/guess-game-img.png"
          />
          <p class="text-center game-description">
            Find out the right number between 1 to 100
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 guess-bg-container text-center">
          <h1 class="guess-heading">
            Guess The Number
            <img
              class="guess-number-image"
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/guess-number-img.png"
            />
          </h1>
          <input type="text" class="user-input" id="userInput" />
          <div>
            <button class="btn btn-info check-guess" onclick="checkGuess()">
              Check
            </button>
          </div>
          <p class="game-result" id="gameResult"></p>
        </div>
      </div>
    </div>
  </body>
</html>
csssssssssssssssssssssssssssssss
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.bg-container {
  background-color: #246db6;
  height: 100vh;
}

.guess-game-img {
  width: 100%;
}

.game-description {
  color: #323f4b;
  font-family: "Roboto";
  font-size: 24px;
  font-weight: 500;
  margin-top: 20px;
}

.guess-bg-container {
  background-color: #246db6;
  padding-top: 30px;
  padding-bottom: 30px;
}

.guess-heading {
  color: white;
  font-family: "Roboto";
  font-size: 34px;
  font-weight: bold;
}

.guess-number-image {
  width: 50px;
}

.user-input {
  text-align: center;
  color: #1f2933;
  font-family: "Roboto";
  font-size: 30px;
  font-weight: 500;
  width: 300px;
  padding: 10px;
}

.game-result {
  color: #ffffff;
  font-family: "Roboto";
  font-size: 24px;
  font-weight: 500;
  padding: 10px;
}

.check-guess {
  width: 170px;
  border-radius: 5px;
  margin: 20px;
  padding: 10px;
}
jjjjjjjjjjjjjjjjjjsssssssssssssssss(javascript):

let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
function checkGuess() {
  let guessedNumber = parseInt(userInput.value);
  if (guessedNumber > randomNumber) {
    gameResult.textContent = "Too High! Try Again.";
    gameResult.style.backgroundColor = "#1e217c";
  }
  else if (guessedNumber < randomNumber) {
    gameResult.textContent = "Too Low! Try Again.";
    gameResult.style.backgroundColor = "#1e217c";
  }
  else if (guessedNumber === randomNumber) {
    gameResult.textContent = "Congratulations! You got it right.";
    gameResult.style.backgroundColor = "green";
  }
  else {
    gameResult.textContent = "Please provide a valid input.";
    gameResult.style.backgroundColor = "#1e217c";
  }
}
