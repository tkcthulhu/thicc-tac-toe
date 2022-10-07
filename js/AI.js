let AIARRAY = new Array

function aiBoardCheck() {
    checkPlayerState();
    AIARRAY = p2.concat(gameState.possibleMoves).sort();
    console.log(AIARRAY);
    for (let i = 0; i <= 7; i++) {
        if ((AIARRAY.includes(winCombos[i][0])) && (AIARRAY.includes(winCombos[i][1])) && (AIARRAY.includes(winCombos[i][2]))) {
                for (let m = 0; m < 2; m++) {
                let aiTile = (winCombos[i][m])
                console.log(aiTile)
                let tile = document.getElementById(aiTile);
                if ((gameState.possibleMoves).includes(aiTile)) {
                aiMove({move: winCombos[i][m], element: tile});
                }
            }
                console.log(gameState.turnCounter)
            return;
            } else {
            console.log('You might win')
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
        console.log(p2)
        console.log(gameState.boardState)
    }
}