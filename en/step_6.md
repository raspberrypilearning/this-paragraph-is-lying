<h2 class="c-project-heading--task">Challenge: Change the colours and finish the message</h2>

You will customise the finished puzzle and add a small ending when every clue is found.

<h2 class="c-project-heading--explainer">Now that the mechanic works, you can change the look without touching the core logic</h2>

### Step 1

Try a new style for found clue words by editing `.clue-word.is-found` in `style.css`.

<div class="c-project-code">

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 164
line_highlights: 164-170
---
.clue-word.is-found {
  background: #fff176;
  color: #11131f;
  border-bottom-color: #ff7ac8;
  border-bottom-style: solid;
  font-weight: 900;
}
--- /code ---

</div>

### Step 2

Add this check at the end of `updateMessage()` in `script.js`, after the line that updates `hiddenMessage.textContent`.

<div class="c-project-code">

--- code ---
---
language: javascript
filename: script.js
line_numbers: true
line_number_start: 29
line_highlights: 31-33
---
hiddenMessage.textContent = fragments.join(" ");

if (found === clueWords.length) {
  hiddenMessage.textContent = fragments.join(" ") + "!";
}
--- /code ---

</div>

<h2 class="c-project-heading--task">Test</h2>

Found clues should use your new colours, and the completed hidden message should end with `!` when every clue has been found.
