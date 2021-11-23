//vars for betting, displaying info to player
let textArea = document.getElementById('text-area');
let gameStart = false,
    gameOver = false,
    cash = 100,
    bet = 10;

var mine = {
  // (A) PROPERTIES
  // (A1) GAME SETTINGS
  total : 4, // TOTAL NUMBER OF MINES
  height : 4, // NUMBER OF ROWS
  width : 4, // NUMBER OF COLUMNS

  // (A2) GAME FLAGS
  board : [], // CURRENT GAME BOARD
  rCell : 0, // NUMBER OF REMAINING HIDDEN CELLS
  

  // (B) RESET & INITIALIZE GAME
  reset : function () {
    // (B1) RESET GAME FLAGS
    mine.board = [];
    mine.rCell = mine.height * mine.width;

    // (B2) GET + RESET HTML WRAPPER
    let wrap = document.getElementById("mine-wrap"),
        cssWidth = 100 / mine.width;
        wrap.innerHTML = "";

    // (B3) LOOP THROUGH ROWS & COLUMNS - GENERATE CELLS
    for (let row=0; row<mine.height; row++) {
      mine.board.push([]); 
      for (let col=0; col<mine.width; col++) {
        // ADD CELL TO MINE.BOARD[]
        mine.board[row].push({ 
          r : false, // CELL IS REVEALED?
          x : false, // CELL IS MARKED?
          m : false, // CELL HAS A MINE?
          a : 0, // NUMBER OF MINES IN ADJACENT CELLS
          c : document.createElement("div") // HTML REFERENCE
        });

        // ADD CELL TO HTML <DIV>
        let cell = mine.board[row][col].c;
        cell.classList.add("cell");
        cell.id = "mine-" + row + "-" + col;
        cell.dataset.row = row;
        cell.dataset.col = col;
        cell.addEventListener("click", mine.open);
        cell.addEventListener("contextmenu", mine.mark);
        cell.style.width = cssWidth + "%";
        cell.innerHTML = "&nbsp;";
        wrap.appendChild(cell);
      }
    }

    // (B4) RANDOMLY LAY MINES
    let mRow = mine.height - 1,
        mCol = mine.width - 1,
        mToLay = mine.total;
    while (mToLay > 0) {
      let row = Math.floor(Math.random() * mRow);
      let col = Math.floor(Math.random() * mCol);
      if (!mine.board[row][col].m) {
        mine.board[row][col].m = true;
        // CHEAT - SHOW MINE ON THE BOARD
        // mine.board[row][col].c.innerHTML = "*";
        mToLay--;
      }
    }

    // (B5) CALCULATE NUMBER OF ADJACENT MINES FOR EACH CELL
    // LOOP THROUGH ROW-BY-ROW
    for (let row=0; row<mine.height; row++) {
      let lastRow = row - 1,
          nextRow = row + 1;
      if (nextRow == mine.height) { nextRow = -1; }

      // LOOP THROUGH CELLS OF EACH ROW
      for (let col=0; col<mine.width; col++) {
        let lastCol = col - 1,
            nextCol = col + 1;
        if (nextCol == mine.width) { nextCol = -1; }
        // CHEAT - SHOW NUMBER OF ADJACENT MINES ON BOARD
        // if (mine.board[row][col].a != 0) { mine.board[row][col].c.innerHTML = mine.board[row][col].a ; }
      }
    }
  },


  // (C) LEFT CLICK TO OPEN CELL
  open : function () {
    // (D1) GET COORDS OF SELECTED CELL
    let row = this.dataset.row,
        col = this.dataset.col;

    // (C2) SELECTED CELL HAS MINE = LOSE
    if (!mine.board[row][col].x && mine.board[row][col].m) {
      this.classList.add("boom");
      setTimeout(function(){
        alert("Oops. You lost.");
        mine.reset();
      }, 1);
    }

    // (C3) REVEAL SELECTED CELL + ALL EMPTY ADJACENT CELLS
    else {
      // (C3A) FLAGS - WHICH CELLS SHOULD WE AUTOMATICALLY REVEAL?
      let toReveal = [], // ALL CELLS TO REVEAL
          toCheck = [], // ALL CELLS TO CHECK
          checked = []; // ALL CELL THAT HAVE ALREADY BEEN CHECKED
      for (let i=0; i<mine.height; i++) { checked.push({}); }
      toCheck.push([row, col]);

      // (C3B) LOOP & CHECK - ADD CELLS TO REVEAL
      while (toCheck.length>0) {
        // CURRENT "CHECK CELL" COORDINATES
        let thisRow = parseInt(toCheck[0][0]),
            thisCol = parseInt(toCheck[0][1]);

        // HAS MINE, ALREADY REVEALED, MARKED - DO NOTHING
        if (mine.board[thisRow][thisCol].m || mine.board[thisRow][thisCol].r || mine.board[thisRow][thisCol].x) {}
        else {
          // ADD CELL TO REVEAL
          if (!checked[thisRow][thisCol]) { toReveal.push([thisRow, thisCol]); }

        }

        // MOVE ON - CHECK NEXT CELL
        checked[thisRow][thisCol] = true;
        toCheck.shift();
      }

      // (C3C) AUTOMATICALLY REVEAL CELLS (IF ANY)
      if (toReveal.length > 0) {
        for (let cell of toReveal) {
          let thisRow = parseInt(cell[0]);
          let thisCol = parseInt(cell[1]);
          mine.board[thisRow][thisCol].r = true;
          if (mine.board[thisRow][thisCol].a != 0) { 
            mine.board[thisRow][thisCol].c.innerHTML = mine.board[thisRow][thisCol].a;
          }
          mine.board[thisRow][thisCol].c.classList.add("reveal");
          mine.rCell = mine.rCell - 1;
        }
      }

      // (C3D) NO CELLS LEFT TO OPEN - WIN!
      if (mine.rCell == mine.total) {
        alert("YOU WIN!");
        mine.reset();
      }
    }
  }
};
window.addEventListener("DOMContentLoaded", mine.reset);

function setBet() {
  bet = parseInt(document.getElementById("betAmount").value);
  console.log("Bet set to " + bet + "\n");
  document.getElementById("demo").innerHTML = bet;
}


//https://code-boxx.com/simple-javascript-minesweeper/