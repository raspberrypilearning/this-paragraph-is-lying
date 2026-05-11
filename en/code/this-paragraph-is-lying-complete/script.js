// Read clue fragments from the HTML and reveal them in paragraph order.
const clueWords = document.querySelectorAll(".clue-word");
const hiddenMessage = document.querySelector("#hidden-message");
const resetButton = document.querySelector("#reset-button");

function setFound(clue, isFound) {
  clue.classList.toggle("is-found", isFound);
  clue.setAttribute("aria-pressed", String(isFound));
}

function updateMessage() {
  const fragments = [];

  for (const clue of clueWords) {
    if (clue.classList.contains("is-found")) {
      fragments.push(clue.dataset.fragment);
    } else {
      fragments.push("___");
    }
  }

  hiddenMessage.textContent = fragments.join(" ");
}

for (const clue of clueWords) {
  clue.addEventListener("click", () => {
    const isFound = clue.classList.contains("is-found");

    setFound(clue, !isFound);
    updateMessage();
  });
}

resetButton.addEventListener("click", () => {
  for (const clue of clueWords) {
    setFound(clue, false);
  }

  updateMessage();
});

updateMessage();
