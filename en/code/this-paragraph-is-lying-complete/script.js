// Read clue words from the HTML and reveal them in paragraph order.
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

  if (!words.includes("___")) {
    hiddenMessage.textContent = words.join(" ") + " 🎉";
  }
}

for (const clue of clueWords) {
  clue.addEventListener("click", () => {
    const isFound = clue.classList.contains("is-found");

    setClueFound(clue, !isFound);
    showMessage();
  });
}

resetButton.addEventListener("click", () => {
  for (const clue of clueWords) {
    setClueFound(clue, false);
  }

  showMessage();
});

showMessage();
