// To Get Element
function getEleByID(id) {
  return document.getElementById(id);
}

// Play Button
function play() {
  //   const btnPlay = getBtnByID('btn-play');
  const homeScreen = getEleByID('home-screen');
  const playScreen = getEleByID('play-screen');
  homeScreen.classList.add('hidden');
  playScreen.classList.remove('hidden');
  playingGame();
  const score = getEleByID('score');
  const life = getEleByID('life');
  score.textContent = 0;
  life.textContent = 5;
}

function playAgain() {
  const scoreScreen = getEleByID('score-screen');
  const playScreen = getEleByID('play-screen');
  scoreScreen.classList.add('hidden');
  playScreen.classList.remove('hidden');
  const score = getEleByID('score');
  const life = getEleByID('life');
  score.textContent = 0;
  life.textContent = 5;
}
// Playing
function playingGame() {
  const alphabet = generateAlphabets();
  getEleByID('current-alphabet').textContent = alphabet;
  setBackgroundColor(alphabet);
}

// Generate Alphabets
function generateAlphabets() {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  const alphabet = alphabets.split('');
  const number = Math.floor(Math.random() * 26);
  const generatedAlphabet = alphabet[number];
  return generatedAlphabet;
}

function setBackgroundColor(id) {
  getEleByID(id).classList.add('bg-orange-400', 'text-white', 'animate-pulse');
}
function removeBackgroundColor(id) {
  getEleByID(id).classList.remove(
    'bg-orange-400',
    'text-white',
    'animate-pulse'
  );
}

function lifeInfo() {
  const life = getEleByID('life');
  const currentLife = parseInt(life.textContent);
  if (currentLife > 1) {
    life.textContent = currentLife - 1;
  } else {
    life.textContent = 5;
    gameOver();
  }
}

function scoreInfo() {
  const score = getEleByID('score');
  const currentScore = parseInt(score.textContent);
  score.textContent = currentScore + 1;
}

function playSound(id) {
  const sound = getEleByID(id);
  sound.currentTime = 0;
  const playScreen = getEleByID('play-screen');
  const check = playScreen.classList.contains('hidden');
  if (!check) {
    sound.play();
  } else {
    sound.pause();
  }
}
// Match Typing
function matchTyping(char) {
  const currentAlphabet =
    getEleByID('current-alphabet').textContent.toLowerCase();
  if (char.key === currentAlphabet) {
    playSound('key-sound');
    playingGame();
    removeBackgroundColor(char.key);
    scoreInfo();
  } else {
    playSound('error-sound');
    lifeInfo();
  }
}
document.addEventListener('keyup', matchTyping);

function gameOver() {
  const scoreScreen = getEleByID('score-screen');
  const playScreen = getEleByID('play-screen');
  playScreen.classList.add('hidden');
  scoreScreen.classList.remove('hidden');
  const score = getEleByID('score');
  const currentScore = parseInt(score.textContent);
  const finalScore = getEleByID('final-score');
  finalScore.textContent = currentScore;
  const currentAlphabet =
    getEleByID('current-alphabet').textContent.toLowerCase();
  removeBackgroundColor(currentAlphabet);
}

function goHome() {
  const homeScreen = getEleByID('home-screen');
  const scoreScreen = getEleByID('score-screen');
  scoreScreen.classList.add('hidden');
  homeScreen.classList.remove('hidden');
  const score = getEleByID('score');
}
