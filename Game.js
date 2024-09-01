
const gridContainer = document.getElementById('grid-container');
let curentplyer = "X";
const gridSize = 20;  
const grid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(null));  

for (let i = 0;i<gridSize * gridSize; i++){
     const col = i % gridSize;
    console.log(col)
}
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
