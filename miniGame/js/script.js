var lettersElts = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Déclaration des différents écrans du jeu
var firstScreen = document.getElementById("home");
var secondScreen = document.getElementById("gameRun");
var thirdScreen = document.getElementById("finalScore");
var btnStart = document.getElementById("startGame");
var inGame = false;
var timeBareAnim = document.getElementById("timerLoad");
var saving = true;

// Ajout de l'écouteur d'évènement pour lancer le jeu
btnStart.addEventListener("click", function launchGame() {
  firstScreen.style.display = "none";
  secondScreen.style.display = "inherit";
  timeBareAnim.classList.add("animation1");
  inGame = true;
  timeCount();
  gameToType();
}, false);

// Déclaration de la variable ou le score s'affichera
var scoreElt = document.getElementById("score");
scoreElt.textContent = 0;

// Affichage random de la lettre a saisir
var letter = document.getElementById("letterToType");
var random = Math.floor(Math.random() * 26);
letter.textContent = lettersElts[random];

// Déclaration des variables pour le compte a rebours
var timer = document.getElementById("timeLimit");
var time = 3;
var count;

// Fonction pour le compte à rebours
function timeCount() {
  timer.textContent = time.toFixed(1);
  time = time - 0.1;
  count = setTimeout(timeCount, 100);
  if (time < 0) {
    lifePointsCounter();
    leveling();
  }
};

// Variables pour regler la difficultés
var newLetter;
var newScore;
var lifePoints = 3;
var life1 = document.getElementById("life1");
var life2 = document.getElementById("life2");
var life3 = document.getElementById("life3");

// Fonction pour augmenter la difficulté dépendament du score
function leveling() {
  timeBareAnim.classList.remove("animation1");
  timeBareAnim.classList.remove("animation2");
  timeBareAnim.classList.remove("animation3");
  timeBareAnim.classList.remove("animation4");
  timeBareAnim.classList.remove("animation5");
  timeBareAnim.classList.remove("animation6");
  void timeBareAnim.offsetWidth;
  if ((newScore <= 5) || (newScore === 0)) {
    timeBareAnim.classList.add("animation1");
    time = 3;
  } else if (newScore <= 10) {
    timeBareAnim.classList.add("animation2");
    time = 2.5;
  } else if (newScore <= 20) {
    timeBareAnim.classList.add("animation3");
    time = 2;
  } else if (newScore <= 30) {
    timeBareAnim.classList.add("animation4");
    time = 1.5;
  } else if (newScore <= 50) {
    timeBareAnim.classList.add("animation5");
    time = 1.2;
  } else if (newScore > 50) {
    timeBareAnim.classList.add("animation6");
    time = 0.8;
  };
};

// Fonction pour compter les vies et les afficher à l'écran
function lifePointsCounter() {
  if (lifePoints > 1) {
    lifePoints--;
    if (lifePoints === 2) {
      life1.style.display = "none";
    } else if (lifePoints === 1) {
      life2.style.display = "none";
    };
  } else {
    inGame = false;
    secondScreen.style.display = "none";
    thirdScreen.style.display = "inherit";
    var lastScore = document.getElementById("lastScore");
    lastScore.textContent = scoreElt.textContent;
    if (saving === true) {
      saveScore();
      saving = false;
    };
  };
};

// Ecouteur d'evenement pour comparer la touche préssée
function gameToType() {
  window.addEventListener("keydown", function keyPressed(event) {
    if (event.key.toLowerCase() === letter.textContent.toLowerCase() && (inGame === true) && (lifePoints >= 0)) {
      random = Math.floor(Math.random() * 26);
      newLetter = lettersElts[random];
      letter.textContent = newLetter;
      scoreElt.textContent++;
      newScore = scoreElt.textContent;
      leveling();
    } else {
      lifePointsCounter();
    };
  }, false);
};

// Réinitialisation pour nouvelle partie
var newGame = document.getElementById("restartGame");
newGame.addEventListener("click", function resetGame() {
  inGame = true;
  scoreElt.textContent = 0;
  newScore = 0;
  lifePoints = 3;
  time = 3;
  life1.style.display = "inherit";
  life2.style.display = "inherit";
  thirdScreen.style.display = "none";
  secondScreen.style.display = "inherit"
  saving = true;
}, false);


var contentScore = document.getElementById("ranks");
function saveScore() {
  var scoreSaved = document.createElement("p");
  scoreSaved.textContent = lastScore.textContent;
  contentScore.appendChild(scoreSaved);
};