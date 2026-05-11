<h2 class="c-project-heading--task">Inspect a clue word</h2>

Run the starter and look inside one clue button to see how the paragraph is hiding a secret word.

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

Find one of the clue buttons in `index.html`. The text between the tags is the word people see (in this example it's **fruit**), and `data-fragment` stores the secret word for the message (**homework**).

Change these two values in the `button` lines now and run the code again to see them change.

<div class="c-project-code">

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 21
line_highlights: 23,25,27,33,35
---
<p>
  The lunch menu looked normal until the
  <button class="clue-word" data-fragment="your" aria-pressed="false" type="button">soup</button>
  started bubbling, the
  <button class="clue-word" data-fragment="homework" aria-pressed="false" type="button">fruit</button>
  rolled backwards, and the
  <button class="clue-word" data-fragment="escaped" aria-pressed="false" type="button">pasta</button>
  requested legal advice.
</p>

<p>
  Nobody panicked, except the
  <button class="clue-word" data-fragment="into" aria-pressed="false" type="button">toast</button>
  and the
  <button class="clue-word" data-fragment="space" aria-pressed="false" type="button">printer</button>.
</p>
--- /code ---

</div>

<h2 class="c-project-heading--task">Test</h2>

The page should load with five dotted clue words, and clicking them should not reveal the hidden message yet.
