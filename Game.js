const gridContainer = document.getElementById('grid-container');
let curentplyer = "X";


for (let i = 0; i < 400; i++) {  
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
    gridItem.addEventListener('click', function () {
        // console.log('Grid item ' + i + ' clicked');
        let rr = (gridItem.textContent == "") ? (curentplyer == "X") ? "x" : "O" : "";
        (curentplyer == "X") ?curentplyer="O" : curentplyer="X";
        gridItem.append(rr);

    });
    
}