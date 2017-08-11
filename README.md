# Project 0

## Tic Tac Toe

A simple tic tac toe implementation in Javascript for Project 0 in WDI 23.

To view project [CLICKHERE](http://jheepark.github.io/tictactoe) :sparkles:

** Author:**  Jae-Hee Park

** Date: ** 11.08.2017

Created using HTML5, CSS3 and Javascript

Src files include any sounds and images used

### Instructions ###

To play the player choses either the **X** or **O** option in the "Who do you choose?" box.

Once the selection is made the box disappears and the tictactoe game can begin.

The first user will either appear as an 'x' or an 'o' according to the selection they made at the beginning. The computer will take the other choice

if 3 x's or o's are made in a diagonal, horizontal or vertical line there will be a winner :clap:

A win message will pop up and the option :sparkles:play again? :sparkles:pops up so that a game can be played again.

The scores are saved and displayed on the top of the screen. These can refreshed by refreshing the browser

### Things that are a little broken :trollface:
* After a winner has been found it is still possible to click on the tic tac toe div's which contain the .box class. This repeats the winning message in the **$(.Win)** div

### What I would change in a future version
* A smarter AI. This would be created by adding a function to the JS file that would place the computer choice in a predetermined position depending on the placement of the user's clicks
* The creation of a smarter AI could be done in increments allowing for a easy, medium and difficult  **tic tac toe** game
* more animation to appear on a win
* a interactive first page that appears before the tic-tac-toe game
* local storage
* options to add a larger tic tac toe board
* creating the tic tac toe with different JS logic  
