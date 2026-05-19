// The starter already finds the clue buttons and shared interface parts.
const clueWords = document.querySelectorAll(".clue-word");
const hiddenMessage = document.querySelector("#hidden-message");
const resetButton = document.querySelector("#reset-button");

function setClueFound(clue, isFound) {
  clue.classList.toggle("is-found", isFound);
  clue.setAttribute("aria-pressed", String(isFound));
}

function showMessage() {
  const words = [];

  for (const clue of clueWords) {
    if (clue.classList.contains("is-found")) {
      words.push(clue.getAttribute("hidden-word"));
    } else {
      words.push("___");
    }
  }

  hiddenMessage.textContent = words.join(" ");
}

// Add your code below.

showMessage();
