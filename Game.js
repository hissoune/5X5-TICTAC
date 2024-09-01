const GameContainer = document.getElementById('Gamebg');
const gridContainer = document.createElement('div');
gridContainer.classList.add('contentGame');
gridContainer.setAttribute('id', 'grid-container');
const PleaseayersContainer = document.createElement('div');
PleaseayersContainer.classList.add('PlayersContainer');
PleaseayersContainer.setAttribute('id', 'PlayersContainer');
const GameWelcome = document.createElement('div');
const Welcom = document.createElement('p');
Welcom.innerHTML = `Welcome !!`;
GameWelcome.appendChild(Welcom)
GameWelcome.classList.add('Game-welcome');
GameWelcome.setAttribute('id', 'Game-welcome');
// GameContainer.appendChild()
// GameContainer.appendChild()
// GameContainer.appendChild();
const players= JSON.parse(localStorage.getItem("Players"));
const PlayersContainer = document.createElement('div');
PlayersContainer.classList.add("players");
const player1 = players.player1;
const player2 = players.player2;
const player1Score = document.createElement('p');
const player2Score = document.createElement('p');
player1Score.innerHTML = `${player1.name}+ : ${player1.score}`;
player2Score.innerHTML = `${player2.name}+ : ${player2.score}`;
PlayersContainer.append(player1Score ,player2Score)
PleaseayersContainer.append(PlayersContainer);
// console.log(player1);
Welcom.innerHTML = `Welcome !!`;
GameContainer.append(GameWelcome,PleaseayersContainer,gridContainer)
let currentPlayer = "X";

const gridSize = 20;  
const grid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(null));  

// console.log(grid)
for (let i = 0; i < gridSize * gridSize; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
    
    const row = Math.floor(i / gridSize);
    // console.log(row)
    const col = i % gridSize;
    // console.log(col)
    
    gridItem.addEventListener('click', function () {
        if (grid[row][col] === null) {  
            grid[row][col] = curentplyer;  
            gridItem.textContent = curentplyer; 
            if (checkWin(row, col, curentplyer)) {  
                alert(curentplyer + " wins!");
            } else { 
                curentplyer = curentplyer === "X" ? "O" : "X";
            }
        }
    });
}
function checkWin(row, col, player) {
    return Checkif5Isset(row, col, player, 1, 0) ||  
           Checkif5Isset(row, col, player, 0, 1) ||  
           Checkif5Isset(row, col, player, 1, 1) ||  
           Checkif5Isset(row, col, player, 1, -1);   
}


function Checkif5Isset(row, col, player, rowIncrement, colIncrement) {
    let count = 1;

    let r = row + rowIncrement;
    let c = col + colIncrement;
    while (isValid(r, c) && grid[r][c] === player) {
        count++;
        r += rowIncrement;
        c += colIncrement;
    }

    r = row - rowIncrement;
    c = col - colIncrement;
    while (isValid(r, c) && grid[r][c] === player) {
        count++;
        r -= rowIncrement;
        c -= colIncrement;
    }

    return count >= 5; 
}

function isValid(row, col) {
    return row >= 0 && row < gridSize && col >= 0 && col < gridSize;
}
