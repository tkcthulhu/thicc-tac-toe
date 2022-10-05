const PLAYER1 = 'X';

const PLAYER2 = 'O';

let gameState = {

    turnCounter: 0,

    boardState: new Array,

    possibleMoves: new Array,
}

function resetBoardState() {
    gameState.boardState = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    gameState.possibleMoves = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    gameState.turnCounter = 0;
}

function playerTurn() {
    if ((gameState.turnCounter % 2) === 0) {
        return PLAYER2
    } else {
        return PLAYER1
    }
}

function playerMove({
    player = playerTurn(),
    move = null,
}) {
    if (!(gameState.possibleMoves).includes(move)) {
        return
    } else {
        gameState.turnCounter++
        gameState.boardState.splice(move, 1, player)
        gameState.possibleMoves.splice(move, 1, 'INVALID')
    }
    console.log(gameState.boardState)
    console.log(gameState.possibleMoves)
    console.log(gameState.turnCounter)
}

function checkWinState() {
    p1 = new Array;
    p2 = new Array;
    for (i = 0; i < gameState.boardState.length; i++) {
        if (gameState.boardState[i] == PLAYER1) {
                p1.push(i);
         } else if (gameState.boardState[i] == PLAYER2) {
                p2.push(i);
        } else {
            continue;
        }
    console.log(p1);
    console.log(p2)
    }
}