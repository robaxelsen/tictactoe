// DONE: 1. My game will reset as soon as it's over so I can play again
// DONE: a. set all cells to innerHTML ""
// DONE: b. set turn to 1
// DONE: c. set player title to visible/block
// DONE: 2. I can play a game of Tic Tac Toe with the computer
// DONE: a. find total number of empty cells, and pick a random cell to populate
// DONE: 3. I can choose whether I want to play as X or O
// TODO: 4. Styling
// TODO: 5. Final testing and cleanup

var cell0 = document.getElementById('0');
var cell1 = document.getElementById('1');
var cell2 = document.getElementById('2');
var cell3 = document.getElementById('3');
var cell4 = document.getElementById('4');
var cell5 = document.getElementById('5');
var cell6 = document.getElementById('6');
var cell7 = document.getElementById('7');
var cell8 = document.getElementById('8');
var statusX = document.getElementById('as-x');
var statusO = document.getElementById('as-o');
var turn = 1;
var gameOver = false;
var playerSymbol = "X";

var states = [
    // [0], [1], [2]
    cell0, cell1, cell2,
    // [3], [4], [5]
    cell3, cell4, cell5,
    // [6], [7], [8]
    cell6, cell7, cell8
];

var computerPlays = () => {
    var computerToken = playerSymbol === "X" ? "O" : "X";
    var emptyCells = [];
    //var playerSymbol;
    var randomCellIndex;
    var randomCell;
    states.forEach((state, index) => {
        if (state.innerHTML === "") {
            emptyCells.push(index);
        };
    });
    randomCellIndex = Math.floor(Math.random() * ((emptyCells.length - 1) - 0 + 1)) + 0;
    states[parseInt(emptyCells[randomCellIndex])].innerHTML = computerToken;
    checkWin(computerToken, 'COMPUTER');
}

var resetGame = () => {
    for (var id=0;id < 9;id++) {
        states[id].innerHTML = "";
    };
    statusX.style.display = "inline-block";
    statusO.style.display = "none";
    turn = 1;
};

var clickCell = (id) => {
    if (states[id].innerHTML === "") {
        states[id].innerHTML = playerSymbol;
        checkWin(playerSymbol, 'YOU');
        turn ++;
        computerPlays();
    };
    if (gameOver) {
        resetGame();
        gameOver = false;
    };
};

var changeToX = () => {
    playerSymbol = "X";
    statusX.style.display = "inline-block";
    statusO.style.display = "none";
};

var changeToO = () => {
    playerSymbol = "O";
    statusO.style.display = "inline-block";
    statusX.style.display = "none";
};

var checkWin = (symbol, player) => {
    if (states[0].innerHTML === symbol && states[1].innerHTML === symbol && states[2].innerHTML === symbol) {
        gameOver = true;
        alert(`${player} WON THE GAME`);
    } else if (states[3].innerHTML === symbol && states[4].innerHTML === symbol && states[5].innerHTML === symbol) {
        gameOver = true;
        alert(`${player} WON THE GAME`);
    } else if (states[6].innerHTML === symbol && states[7].innerHTML === symbol && states[8].innerHTML === symbol) {
        gameOver = true;
        alert(`${player} WON THE GAME`);
    } else if (states[0].innerHTML === symbol && states[4].innerHTML === symbol && states[8].innerHTML === symbol) {
        gameOver = true;
        alert(`${player} WON THE GAME`);
    } else if (states[2].innerHTML === symbol && states[4].innerHTML === symbol && states[6].innerHTML === symbol) {
        gameOver = true;
        alert(`${player} WON THE GAME`);
    } else if (states[3].innerHTML === symbol && states[4].innerHTML === symbol && states[5].innerHTML === symbol) {
        gameOver = true;
        alert(`${player} WON THE GAME`);
    } else if (states[0].innerHTML === symbol && states[3].innerHTML === symbol && states[6].innerHTML === symbol) {
        gameOver = true;
        alert(`${player} WON THE GAME`);
    } else if (states[1].innerHTML === symbol && states[4].innerHTML === symbol && states[7].innerHTML === symbol) {
        gameOver = true;
        alert(`${player} WON THE GAME`);
    } else if (states[2].innerHTML === symbol && states[5].innerHTML === symbol && states[8].innerHTML === symbol) {
        gameOver = true;
        alert(`${player} WON THE GAME`);
    };
};
