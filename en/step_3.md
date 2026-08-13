## Add your hidden message

Each clue button has a `hidden-word` value — that is the secret word that appears when someone clicks it. 

In `index.html` change all five hidden words to make a hidden message of your own.

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
  <button class="clue-word" hidden-word="your" aria-pressed="false" type="button">soup</button>
  started bubbling, the
  <button class="clue-word" hidden-word="homework" aria-pressed="false" type="button">fruit</button>
  rolled backwards, and the
  <button class="clue-word" hidden-word="escaped" aria-pressed="false" type="button">pasta</button>
  requested legal advice.
</p>

<p>
  Nobody panicked, except the
  <button class="clue-word" hidden-word="into" aria-pressed="false" type="button">toast</button>
  and the
  <button class="clue-word" hidden-word="space" aria-pressed="false" type="button">printer</button>.
</p>
--- /code ---

</div>

### Now run your code

Click all five clue words. The hidden message should spell out your new sentence.

<div class="c-project-output">

![All five clue words are clicked and the hidden message spells out the new sentence.](images/step_3.png)

</div>
