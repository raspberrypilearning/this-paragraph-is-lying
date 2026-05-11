<h2 class="c-project-heading--task">Remix the puzzle</h2>

You will change the hidden message and add one more clue word of your own.

<h2 class="c-project-heading--explainer">You can remix the puzzle by editing HTML instead of changing the JavaScript</h2>

### Step 1

Change one hidden fragment by editing a `data-fragment` value in `index.html`.

<div class="c-project-code">

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 40
line_highlights: 40-40
---
<button class="clue-word" data-fragment="vanished" aria-pressed="false" type="button">pasta</button>
--- /code ---

</div>

### Step 2

Add one more clue button to the paragraph. Keep `class="clue-word"` so JavaScript can find the clue. Keep `data-fragment` so the clue has a hidden word. Keep `aria-pressed="false"` and `type="button"` so the button starts in the right state.

The hidden message follows the order of the clue buttons in the paragraph, not the order you click them.

<div class="c-project-code">

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 47
line_highlights: 47-47
---
<button class="clue-word" data-fragment="yesterday" aria-pressed="false" type="button">sandwich</button>
--- /code ---

</div>

<h2 class="c-project-heading--task">Test</h2>

Your puzzle should now reveal a different message, and the total clue count should go up if you added another clue button.
