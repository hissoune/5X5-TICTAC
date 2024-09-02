const GameContainer = document.getElementById('Gamebg');
const gridContainer = document.createElement('div');
gridContainer.classList.add('contentGame');
gridContainer.setAttribute('id', 'grid-container');
const PleaseayersContainer = document.createElement('div');
PleaseayersContainer.classList.add('PlayersContainer');
PleaseayersContainer.setAttribute('id', 'PlayersContainer');
const GameWelcome = document.createElement('div');
GameWelcome.classList.add('Game-welcome');
GameWelcome.setAttribute('id', 'Game-welcome');
const welcom = document.createElement('p');
welcom.textContent = "Tic Tac Toe !";
GameWelcome.appendChild(welcom)
const BTNSContainer = document.createElement('div');
BTNSContainer.classList.add("btnContainers")

const BTNSReset = document.createElement('button');
BTNSReset.classList.add("resetbtn");
BTNSReset.textContent="Reset Game"
const BTNEnd = document.createElement('button');
BTNEnd.classList.add("Endbtn");
BTNEnd.textContent="End Game"
BTNSContainer.append(BTNSReset, BTNEnd);
BTNSReset.addEventListener("click", function () {
    window.location.reload();
});
const players= JSON.parse(localStorage.getItem("Players"));

const PlayersHistory = [];
BTNEnd.addEventListener("click", function () {
    PlayersHistory.push(players);
    localStorage.setItem("PlayersHistory", JSON.stringify(PlayersHistory));
    window.location.href = '/index.html';

})
// GameContainer.appendChild()
// GameContainer.appendChild()
// GameContainer.appendChild();
const PlayersContainer = document.createElement('div');
PlayersContainer.classList.add("players");
const player1 = players.player1;
const player2 = players.player2;
const player1Score = document.createElement('span');
player1Score.classList.add("Xplayer")
const player2Score = document.createElement('span');
player2Score.classList.add("Oplayer")
player1Score.innerHTML = `${player1.name} : <span>${player1.score}</span>`;
player2Score.innerHTML = `<span>${player2.score}</span> : ${player2.name}`;
PlayersContainer.append(player1Score ,player2Score)
PleaseayersContainer.append(PlayersContainer);
// console.log(player1);
GameContainer.append(GameWelcome,PleaseayersContainer,gridContainer,BTNSContainer)
let curentplyer = "X";

const gridSize = 20;  
const grid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(null));  

// console.log(grid)
for (let i = 0; i < gridSize * gridSize; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
    const divxo = document.createElement('div');
    
    const row = Math.floor(i / gridSize);
    // console.log(row)
    const col = i % gridSize;
    // console.log(col)
    
    gridItem.addEventListener('click', function () {
        if (grid[row][col] === null) {  
            grid[row][col] = curentplyer;  
            divxo.textContent = curentplyer; 
            if (curentplyer == "X") {
                divxo.classList.add("Xstyle")
            }else{
            divxo.classList.add("Ostyle")

            }
            if (checkWin(row, col, curentplyer)) {  
                alert(curentplyer + " wins!");
                    window.location.reload();
                   if (curentplyer === 'X') {
                players.player1.score++;  
            } else {
                players.player2.score++;  
            }

            localStorage.setItem("Players", JSON.stringify(players));

                console.log(player1.score);
            } else { 
                curentplyer = curentplyer === "X" ? "O" : "X";
            }
        }
        gridItem.appendChild(divxo)
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
