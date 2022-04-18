
//global varibales declerations
let selectedCell;
let pieces = [];
const WHITE_PLAYER = 'white';
const BLACK_PLAYER = 'black';
const WHITE_STARTING_ROW = 0;
const BLACK_STARTING_ROW = 7;
const table1 = document.createElement('table');
const TABLE_SIZE = 8;

//selectedCell.cellIndex
//selectedCell.parentNode.rowIndex

//functions declarations

function newChess() {
    
    document.body.appendChild(table1);
    for(let i = 0; i < 8; i++){
        const row = table1.insertRow();
        for(let j = 0; j < 8; j++){
            const cell =row.insertCell();
            if((i + j) % 2 == 0) 
                cell.className = 'white-cell';
            else
                cell.className = 'black-cell';
            
                cell.addEventListener('click', onCellClick);
        }
    }
    createInitialBoard();
    // for (let piece of pieces) {
    //     addImage(table1.rows[piece.row].cells[piece.col], piece.player, piece.type);
    // }
    for(i = 0; i < 8; i++){
        for(j = 0; j < 8; j++){
            if(pieces[i][j] == undefined) continue;
            addImage(table1.rows[i].cells[j], pieces[i][j].player, pieces[i][j].type);
        }
    }
}

function rookmovement(){

}

function addImage(cell, player, name) {
    const image = document.createElement('img');
    image.src = 'images/' + player + '_' + name + '.png';
    cell.appendChild(image);
}

class Piece {
    constructor(type, player) {
      this.type = type;
      this.player = player;
    }
}

function createInitialBoard() {
    //initialising the pieces matrix
    for(let i = 0; i < TABLE_SIZE; i++){
        pieces[i] = [];
    }

    addPieces(WHITE_PLAYER);

    //filling the empty cells with undefines.
    for(let i = 2; i < TABLE_SIZE-2; i++){
        for(let j = 0; j < TABLE_SIZE; j++){
            pieces[i][j] = undefined;
        }
    }
    addPieces(BLACK_PLAYER);
    for(let i = 0; i < 8; i++ ){
        pieces[1][i] = new Piece("pawn", WHITE_PLAYER);
        pieces[6][i] = new Piece("pawn", BLACK_PLAYER);
    }
}

function addPieces(color){
    let row = color == WHITE_PLAYER ? WHITE_STARTING_ROW : BLACK_STARTING_ROW;
    pieces[row][0] = new Piece("rook", color);
    pieces[row][1] = new Piece("knight", color);
    pieces[row][2] = new Piece("bishop", color);
    pieces[row][3] = new Piece("king", color);
    pieces[row][4] = new Piece("queen", color);
    pieces[row][5] = new Piece("bishop", color);
    pieces[row][6] = new Piece("knight", color);
    pieces[row][7] = new Piece("rook", color);
}


function onCellClick(e) {
    
    if(e.currentTarget.classList.contains("selected") == true){
        e.currentTarget.classList.remove('selected');
        selectedCell = undefined;
    }
    else{
        if(selectedCell != undefined){ //unselecting old cell
            selectedCell.classList.remove('selected'); 
        }

        e.currentTarget.classList.add('selected');
        selectedCell = e.currentTarget;
    }


  }

window.addEventListener('load', newChess);