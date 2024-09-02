Tic Tac Toe Game

#Overview


This Tic Tac Toe game is a classic grid-based game where two players take turns marking spaces in a grid. The objective is to be the first player to align five of their marks either horizontally, vertically, or diagonally.

#How to Play

1 _ Start the Game: Upon loading the game, the players will be displayed, and a 20x20 grid will be available for play.

2_ Take Turns: Players take turns clicking on empty grid cells to place their mark. Player X goes first.


3 _ Win the Game: The first player to align five of their marks (either 'X' or 'O') in a row, column, or diagonal wins the game.

4_ Reset or End Game: Players can reset the game at any time by clicking the "Reset Game" button. Clicking "End Game" will save the game history and redirect to the main page.

#Game Controls

Reset Game: Clears the current board and restarts the game.

End Game: Saves the current game history and redirects to the home page.

#Key Features

Dynamic Grid Creation: A 20x20 grid is dynamically generated using JavaScript.

Local Storage: Player data and game history are stored in the browser’s local storage.

Win Detection: The game detects a win condition when a player aligns five of their marks in a row, column, or diagonal.

#Functions and Properties

GameContainer, gridContainer, PlayersContainer, GameWelcome, BTNSContainer:
:These are DOM elements used to build the game layout dynamically.

GameContainer: The main container holding all game components.

PlayersContainer: Displays the player scores.


GameWelcome: Displays the game title.




 checkWin(row, col, player) :

 Functionality: Checks if the current player has won after making a move.

row, col: The row and column of the last placed mark.


Checkif5Isset(row, col, player, rowIncrement, colIncrement)

Functionality: Checks for five consecutive marks by the same player in a specified direction.


isValid(row, col)

Functionality: Checks if a given row and column are within the bounds of the grid.


How to Win

Align Five Marks: To win the game, a player must align five of their marks ('X' or 'O') consecutively in a row, column, or diagonal.



    



