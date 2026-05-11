// The starter already finds the clue buttons and shared interface parts.
const clueWords = document.querySelectorAll(".clue-word");
const foundCount = document.querySelector("#found-count");
const totalCount = document.querySelector("#total-count");
const hiddenMessage = document.querySelector("#hidden-message");
const resetButton = document.querySelector("#reset-button");

totalCount.textContent = clueWords.length;

function setFound(clue, isFound) {
  clue.classList.toggle("is-found", isFound);
  clue.setAttribute("aria-pressed", String(isFound));
}

// Add your code below.
