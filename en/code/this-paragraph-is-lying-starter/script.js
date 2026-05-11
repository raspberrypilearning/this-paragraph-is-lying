// The starter already finds the clue buttons and shared interface parts.
const clueWords = document.querySelectorAll(".clue-word");
const hiddenMessage = document.querySelector("#hidden-message");
const resetButton = document.querySelector("#reset-button");

function setFound(clue, isFound) {
  clue.classList.toggle("is-found", isFound);
  clue.setAttribute("aria-pressed", String(isFound));
}

// Add your code below.
