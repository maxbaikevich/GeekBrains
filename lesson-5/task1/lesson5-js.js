function ChessBoard() {
    var ROWS = 10;
    var COLS = 10;
    var wrapper = document.getElementById('wrapper');
    var board = document.createElement('table');

    wrapper.appendChild(board);
    for(var i = 0; i < ROWS; i++){
        var row = document.createElement('tr');
        for(var j = 0; j < COLS; j++){
            var cell = document.createElement('td');
            cell.classList.add('cell');
            if(i === 0) {
                cell.textContent = String.fromCharCode(64 + j);
                
            } else if((i + j) % 2) {
              cell.classList.add('black'); 
            }
            row.appendChild(cell);
            if(j === 0) {
            row.textContent = i + j;
            
            }
        }
        board.appendChild(row);
    }

}
ChessBoard();
