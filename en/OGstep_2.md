<h2 class="c-project-heading--task">Build the hidden message</h2>

Build the message from the clue buttons in paragraph order.

<h2 class="c-project-heading--explainer">Found clues will reveal words later, and missing clues show blanks</h2>

Add this function below `// Add your code below.` in `script.js`.

<div class="c-project-code">

--- code ---
---
language: javascript
filename: script.js
line_numbers: true
line_number_start: 12
line_highlights: 12-24
---
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
--- /code ---

</div>

Call the function once at the bottom of `script.js` so the blanks appear when the page loads.

When you call `updateMessage()`, the starter instruction changes into five blanks. Each blank stands for one hidden fragment.

<div class="c-project-code">

--- code ---
---
language: javascript
filename: script.js
line_numbers: true
line_number_start: 26
line_highlights: 26-26
---
updateMessage();
--- /code ---

</div>

<h2 class="c-project-heading--task">Test</h2>

The hidden message box should now show five blanks instead of the starter instruction.
