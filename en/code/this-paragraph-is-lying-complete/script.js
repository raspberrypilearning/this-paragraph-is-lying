// Read clue fragments from the HTML and reveal them in paragraph order.
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

function updateMessage() {
  const fragments = [];
  let found = 0;

  for (const clue of clueWords) {
    if (clue.classList.contains("is-found")) {
      fragments.push(clue.dataset.fragment);
      found += 1;
    } else {
      fragments.push("___");
    }
  }

  foundCount.textContent = found;
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
