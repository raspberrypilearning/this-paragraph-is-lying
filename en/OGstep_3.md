<h2 class="c-project-heading--task">Make the clues clickable</h2>

Make each clue switch between found and not found when it is clicked.

<h2 class="c-project-heading--explainer">The click event uses the found class as the clue state</h2>

Add this loop below the `updateMessage()` function. Keep the final `updateMessage();` call at the bottom of your file.

<div class="c-project-code">

--- code ---
---
language: javascript
filename: script.js
line_numbers: true
line_number_start: 26
line_highlights: 26-33
---
for (const clue of clueWords) {
  clue.addEventListener("click", () => {
    const isFound = clue.classList.contains("is-found");

    setFound(clue, !isFound);
    updateMessage();
  });
}
--- /code ---

</div>

<h2 class="c-project-heading--task">Test</h2>

When you click a dotted clue word, it should glow, reveal one message fragment, and hide that fragment again on the next click.
