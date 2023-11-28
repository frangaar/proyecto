const gridContainer = document.getElementById('grid-container');

/*
function createGrid(rows, cols) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('div');
            if((j % 2) == 0){
                cell.className = 'cell';
            }else{
                cell.className = 'cell2';
            }
            gridContainer.appendChild(cell);
        }
    }
}

const numRows = 20; // Cambia el número de filas
const numCols = 15; // Cambia el número de columnas

createGrid(numRows, numCols);
*/


function createGrid( cols) {
 
    for (let j = 0; j < cols; j++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        gridContainer.appendChild(cell);
    }

        /*for (let j = 0; j < cols; j++) {
            const cell = document.createElement('div');
            if((j % 2) == 0){
                cell.className = 'cell';
            }else{
                cell.className = 'cell2';
            }
            gridContainer.appendChild(cell);
        }*/
   
}
const numCols = 500; // Cambia el número de columnas

createGrid( numCols);
