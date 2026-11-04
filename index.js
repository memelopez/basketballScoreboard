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
  checksLeader();
}
function add2home() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
  checksLeader();
}

function add3home() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
  checksLeader();
}

function add1guest() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
  checksLeader();
}
function add2guest() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
  checksLeader();
}

function add3guest() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
  checksLeader();
}

function subtract1home() {
  homeScore -= 1;
  homeScoreEl.textContent = homeScore;
  checksLeader();
}

function subtract1guest() {
  guestScore -= 1;
  guestScoreEl.textContent = guestScore;
  checksLeader();
}

function resetHome() {
  homeScore = 0;
  homeScoreEl.textContent = homeScore;
  checksLeader();
}

function resetGuest() {
  guestScore = 0;
  guestScoreEl.textContent = guestScore;
  checksLeader();
}

// highlits leader
function checksLeader() {
  if (homeScore > guestScore) {
    homeScoreEl.classList.add("highlight");
    guestScoreEl.classList.remove("highlight");
  } else if (guestScore > homeScore) {
    guestScoreEl.classList.add("highlight");
    homeScoreEl.classList.remove("highlight");
  } else {
    homeScoreEl.classList.remove("highlight");
    guestScoreEl.classList.remove("highlight");
  }
}