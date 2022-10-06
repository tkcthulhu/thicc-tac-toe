const PLAYER1 = 'X';

const PLAYER2 = 'O';

let p1 = new Array;

let p2 = new Array;

let winCombos = {
    0: [0, 1, 2],

    1: [3, 4, 5],

    2: [6, 7, 8],

    3: [0, 3, 6],

    4: [1, 4, 7],

    5: [2, 5, 8],

    6: [0, 4, 8],

    7: [2, 4, 6]
}

let gameState = {

    turnCounter: 0,

    boardState: new Array,

    possibleMoves: new Array,
}

function resetBoardState() {
    gameState.boardState = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    gameState.possibleMoves = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    gameState.turnCounter = 1;
    playerTurn();
}

function playerTurn() {
    if ((gameState.turnCounter % 2) === 0) {
        P1.innerHTML = null;
        P2.innerHTML = '<img src=\'./img/Player2.jpg\' class=\'pLogo\' id=\'p2img\'>'        
        return PLAYER2
    } else {
        P2.innerHTML = null;
        P1.innerHTML = '<img src=\'./img/Player1.jpg\' class=\'pLogo\' id=\'p1img\'>'
        return PLAYER1
    }
}

function playerMove({
    player = playerTurn(),
    move = null,
    element = null,
}) {
    if (!(gameState.possibleMoves).includes(move)) {
        return
    } else {
        gameState.boardState.splice(move, 1, player);
        gameState.possibleMoves.splice(move, 1, 'INVALID');
        element.innerHTML = `<video width=\'20%\' class=\'embed-responsive-item\' autoplay><source src=\'./video/draw${playerTurn()}.mp4\' type=\'video/mp4\'></video>`;
        checkPlayerState();
        gameState.turnCounter++
        checkWinState();
        playerTurn();
    }
}

function checkPlayerState() {
    
    p1 = [];

    p2 = [];
    
    for (i = 0; i < gameState.boardState.length; i++) {
        
        if (gameState.boardState[i] == PLAYER1) {
                p1.push(i);
         } else if (gameState.boardState[i] == PLAYER2) {
                p2.push(i);
        } else {
            continue;
        }
    }
}

function checkWinState() {
    for (i = 0; i <= 7; i++) {
        if ((p1.includes(winCombos[i][0])) && (p1.includes(winCombos[i][1])) && (p1.includes(winCombos[i][2]))) {
            endGame();
            resultRow.innerHTML = 'PLAYER 1 WINS!';
            return;
        } else if ((p2.includes(winCombos[i][0])) && (p2.includes(winCombos[i][1])) && (p2.includes(winCombos[i][2]))) {
            endGame();
            resultRow.innerHTML = 'PLAYER 2 WINS!';
            return;
        } else if (gameState.turnCounter > 9) {
            endGame();
            resultRow.innerHTML = 'IT\'S A TIE!';
            return ;
        }
    }
}

function clearBoard() {
    tile0.innerHTML = null;    
    tile1.innerHTML = null;
    tile2.innerHTML = null;
    tile3.innerHTML = null;
    tile4.innerHTML = null;
    tile5.innerHTML = null;
    tile6.innerHTML = null;
    tile7.innerHTML = null;
    tile8.innerHTML = null; 
    result.innerHTML = null;   
}

function endGame() {
    gameState.possibleMoves = [];
}