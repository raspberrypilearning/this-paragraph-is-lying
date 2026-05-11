<h2 class="c-project-heading--task">Inspect a clue word</h2>

You will run the starter and look inside one clue button to see how the paragraph is hiding a secret word.

<h2 class="c-project-heading--explainer">A visible word can secretly carry a different hidden word</h2>

### Step 1

Run the starter project.

You should see:

- a strange paragraph
- five dotted clue words
- a hidden message box
- a Reset button

The clue words do not work yet. You will add that code.

### Step 2

Find one of the clue buttons in `index.html`. The text between the tags is the word people see, and `data-fragment` stores the secret word for the message.

<div class="c-project-code">

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 37
line_highlights: 37-37
---
<!-- fruit is the visible word, but homework is the hidden fragment. -->
<button class="clue-word" data-fragment="homework" aria-pressed="false" type="button">fruit</button>
--- /code ---

</div>

<h2 class="c-project-heading--task">Test</h2>

The page should load with five dotted clue words, and clicking them should not reveal the hidden message yet.
