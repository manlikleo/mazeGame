
// total number of cells for our maze
let cell = 20;

// our createMaze functions runs when our dom is loaded

document.addEventListener("DOMContentLoaded", function () {

    createMaze(); 


})



// creating the maze scence using html 5 table structure
const createMaze = () => {
    let row,column; 

    let mazeTable = document.createElement('table');
    let mazeBody = document.createElement('tbody'); 
    // creating table rows 
    for(row=1; row <= cell; row++ ){

        let cellRow = document.createElement('tr');
        //  creating table columns 
        for(column=1; column <= 10 ; column++){
            const col = document.createElement('td'); 
            if(row === 1 & col == 1 ){
                col.style.backgroundColor ="rgb(255, 189, 51)";
                col.setAttribute('type','start')
            }else if(row == cell && column == cell){
                col.style.backgroundColor = 'rgb(255, 87, 51)'
                col.setAttribute('type', 'finish')
            }else{
                col.style.backgroundColor = 'rgb(51, 255, 189)'
            }
            // setting individual id for all cells and columns
            col.setAttribute('id',`cell_${row}_${column}`); 
            cellRow.appendChild(col)
        }

        mazeBody.appendChild(cellRow);
    }

    mazeTable.appendChild(mazeBody); 
    const maze = document.querySelector('#maze');
    maze.appendChild(mazeTable);



    

let presentCell; 
let bottomExits = Array(cell).fill('bottom'); 
 let rightExits= Array(cell).fill('right');
 let gameExits = rightExits.concat(bottomExits); 
 console.log(gameExits);


    row = 0,
    column = 1; 

    for(let i=0; i < gameExits.length; i++){

        switch (gameExits[i]){
            case 'bottom': 
            column = column+1; 
            break; 
            case 'right': 
            row = row + 1; 
            break; 
        }
        const cellstring = `cell_${row}_${column}`
        presentCell = document.getElementById(cellstring);
        console.log(presentCell); 
        presentCell.style.backgroundColor = '#f00000'; 
        
    }

    
}


// const  pathCreating=()=> {

    


// }





