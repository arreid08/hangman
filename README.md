# SEI - Project 1

# Project Overview

My version of the classic game of hangman.
[https://arreid08.github.io/hangman/](https://arreid08.github.io/hangman/)

## Project Schedule

| Day | Deliverable                                          | Status   |
| --- | ---------------------------------------------------- | -------- |
| 1   | Project Description                                  | Complete |
| 2   | Wireframes / Priority Matrix / Functional Components | Complete |
| 3   | Core Application Structure (HTML, CSS, JavaScript)   | Complete |
| 4   | Minimal Viable Product                               | Complete |
| 5   | Styling / Bug Fixes                                  | Complete |
| 6   | Presentations Preparations                           | Complete |

## Project Description

For this first project, I have decided to create the game of hangman using my skills learned so far in class. I plan to set up an array of ransom words the user can use if they are playing alone and also an input box so they can input their own word. They will have 7 chances to get the word correct. There will be a keyboard so they can choose letters. After a letter has been chosen, it will go dark so they can't pick it anymore. If they pick the correct letter, that letter will show up in the word for all instances of that letter. As each wrong letter is chosen, I body part will appear for the hangman. Once the player is out of turns, they will see a game over screen and have to try again. If they win, they will see a game over screen celebrating the win.

## Wireframes

![initial-thinking](./images/initial-thinking.jpg)

## Priority Matrix

### MVP/PostMVP

#### MVP

- Have an array of words for the hangman game.
- Have all event listeners working for each letter.
- Have body parts appear each wrong guess.
- Have win logic completed when the guesses match the winning word.
- Have win alert appear when chances run out.
- Have lose alert appear when chances run out.
- Disable buttons once used.
- Display the correct letters on the lines provided.
- Display the moves you have left to make.
- Visual:
    - Hangman stage with noose
    - Basic shapes for the hangman
    - Plain lines for the word to be guessed
    - Random Button
    - Restart Button

#### Post MVP

- Have my site respond to mobile use.
- Add input box for the user to chose their own word.
- Add keydown functionality for keyboard.
- Create a score count.  
- Attribute score to how many turns were taken.
- Add a timer.
- Create a Modal for win/lose versus an alert.
- Use an API for the random words.
- Visual:
    - Update the stage to be a tree instead.
    - Update the shapes for the hangman to be more interesting than plain lines.
    - Fade out the a box and turn it into a letter when the player gets it right.

## Functional Components

### Game Initialization

Upon loading the page you can select the button to choose a random word from an array.
For the main page, I set up an image to start with for the place for the man to hang.  I also started with a Random button and a turn counter to be visible.  At the top, I have a headline and a restart button.  

### Playing the Game

Once a random word has been selected, you will have a keyboard to use for selecting what letters you think are in the hidden word.  I set up my code to respond to a mouse click on each button.  If the letter is in the random word, it will populate the letter in the correct spot/spots in the word.  If not, it will populate a portion of the man on the tree.  Through a series of IF/Else statements and a FOR loop I have accomplished this.

### Winning the Game

If you can guess the word correctly, you win the game! If not, your man will be hung!

### Game Restart

If you want to restart the game you can simply hit the restart button at the top at anytime.  This will refresh the webpage to initiate a new game.

### Time Commitment:

| Component           | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Creating HTML       |    H     |      3hrs      |     2hrs      |    2hrs     |
| Creating CSS        |    H     |      2hrs      |    1.5hrs     |   1.5hrs    |
| Creating Javascript |    H     |     30hrs      |     20hrs     |    20hrs    |
| CSS Clean-up        |    H     |      1hrs      |    1.5hrs     |   1.5hrs    |
| Error Resolution    |    H     |      1hrs      |    1.5hrs     |   1.5hrs    |
| Total               |    H     |     43hrs      |    26.5hrs    |   26.5hrs   |

## Sources

- [css-tricks](https://css-tricks.com/snippets/javascript/select-random-item-array/)
- [w3schools-modals](https://www.w3schools.com/howto/howto_css_modals.asp)
- [css-tricks](https://css-tricks.com/considerations-styling-modal/)

## Code Snippet

I learned how to create Modal's with this project.  Here is my first modal in code:
```
    winModal.style.visibility = "visible"
    winModal.querySelector(".close")
    .addEventListener('click', (e) => winModal.style.visibility = "hidden")
```

## Issues and Resolutions

Some of my biggest issues were:
CSS styling for the underlines.  I was able to work through it with Ali but my issue was that I hadn't styled the parent div of the code and was trying to center using the child div.  That didn't work at all.  Once I styled the parent it went right where I wanted it.

Modals:
With the modals, I had a few issues with getting the close button to work.  I realized I had given them all the same ID instead of classes, which was one issue. then I realize I hadn't correctly set up the click event on the close button.  Once I got that going I was able to use all three modals correctly and even added a page reload to two of them. 

Functions:
I had a hard time wrapping my head around calling a function in a function.  It was the first time doing this on my own and I had to spend sometime working it out.   Ultimately I worked with Kenny to get it going properly.