let AIARRAY = new Array;
let XARRAY = new Array;
let LASTMOVES = new Array;

function aiBoardCheck() {
    checkPlayerState();
    AIARRAY = p2.concat(gameState.possibleMoves).sort();
    XARRAY = p1
    for (let i = 0; i <= 7; i++) {
        if (((p2.includes(winCombos[i][0])) && (p2.includes(winCombos[i][1]))) || ((p2.includes(winCombos[i][0])) && (p2.includes(winCombos[i][2]))) || ((p2.includes(winCombos[i][1])) && (p2.includes(winCombos[i][2])))) {
            for (let m = 0; m < 3; m++) {
                let aiTile = (winCombos[i][m])
                console.log(`[${p1}] [${p2}]`)
                let tile = document.getElementById(aiTile);
                if ((gameState.possibleMoves).includes(aiTile)) {
                aiMove({move: winCombos[i][m], element: tile});
                }
            }
        }
    }
    for (let i = 0; i <= 7; i++) {
        if (((XARRAY.includes(winCombos[i][0])) && (XARRAY.includes(winCombos[i][1]))) || ((XARRAY.includes(winCombos[i][0])) && (XARRAY.includes(winCombos[i][2]))) || ((XARRAY.includes(winCombos[i][1])) && (XARRAY.includes(winCombos[i][2])))) {
            for (let m = 0; m < 3; m++) {
                let aiTile = (winCombos[i][m])
                console.log(`[${p1}] [${p2}]`)
                let tile = document.getElementById(aiTile);
                if ((gameState.possibleMoves).includes(aiTile)) {
                aiMove({move: winCombos[i][m], element: tile});
                }
            }
        }
    }
    for (let i = 0; i <= 7; i++) {    
        if ((AIARRAY.includes(winCombos[i][0])) && (AIARRAY.includes(winCombos[i][1])) && (AIARRAY.includes(winCombos[i][2]))) {
                for (let m = 0; m < 3; m++) {
                let aiTile = (winCombos[i][m])
                console.log(`[${p1}] [${p2}]`)
                let tile = document.getElementById(aiTile);
                if ((gameState.possibleMoves).includes(aiTile)) {
                aiMove({move: winCombos[i][m], element: tile});
                }
            }
        return;
        }
    }
    for (let i = 0; i < 9; i++) {
        LASTMOVES = gameState.boardState.sort();
        let tile = document.getElementById(LASTMOVES[0]);
        console.log(`[${p1}] [${p2}]`)
        if ((gameState.possibleMoves).includes(LASTMOVES[0])) {
            aiMove({move: LASTMOVES[0], element: tile});
            }
    }
}



function aiMove({
    player = playerTurn(),
    move = null,
    element = null,
}) {
    if ((gameState.turnCounter) % 2 == 0) {
        gameState.boardState.splice(move, 1, player);
        gameState.possibleMoves.splice(move, 1, 'INVALID');
        element.innerHTML = `<video width=\'20%\' class=\'embed-responsive-item\' autoplay><source src=\'./video/draw${playerTurn()}.mp4\' type=\'video/mp4\'></video>`;
        checkPlayerState();
        gameState.turnCounter++
        checkWinState();
        playerTurn();
    }
}