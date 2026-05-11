<h2 class="c-project-heading--task">Reset the clues</h2>

You will finish the puzzle by making the Reset button clear every found clue.

<h2 class="c-project-heading--explainer">Reset uses the same helper for every clue button</h2>

Add this code under your click loop.

<div class="c-project-code">

--- code ---
---
language: javascript
filename: script.js
line_numbers: true
line_number_start: 40
line_highlights: 40-46
---
resetButton.addEventListener("click", () => {
  for (const clue of clueWords) {
    setFound(clue, false);
  }

  updateMessage();
});
--- /code ---

</div>

<h2 class="c-project-heading--task">Test</h2>

Click two or three clues, then click Reset; every clue should stop glowing, the counter should return to `0`, and the hidden message should show five blanks again.
