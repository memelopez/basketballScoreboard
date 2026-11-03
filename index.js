//set scores to 0
let homeScoreEl = document.getElementById("home");
let guestScoreEl = document.getElementById("guest");

let homeScore = 0;
let guestScore = 0;

homeScoreEl.textContent = homeScore;
guestScoreEl.textContent = guestScore;

// onclick functions

function add1home() {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
}
function add2home() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
}

function add3home() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
}

function add1guest() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
}
function add2guest() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}

function add3guest() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}

function subtract1home() {
  homeScore -= 1;
  homeScoreEl.textContent = homeScore;
}

function subtract1guest() {
  guestScore -= 1;
  guestScoreEl.textContent = guestScore;
}

function resetHome() {
  homeScore = 0;
  homeScoreEl.textContent = homeScore;
}

function resetGuest() {
  guestScore = 0;
  guestScoreEl.textContent = guestScore;
}