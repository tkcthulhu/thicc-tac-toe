let AIARRAY = new Array

function aiBoardCheck() {
    AIARRAY = p2.concat(gameState.possibleMoves).sort();
    console.log(AIARRAY);
    for (let i = 0; i <= 7; i++) {
        if ((AIARRAY.includes(winCombos[i][0])) && (AIARRAY.includes(winCombos[i][1])) && (AIARRAY.includes(winCombos[i][2]))) {
            console.log('I can beat you')
            do {
                console.log(p2)
                let m = 0
                let aiTile = (winCombos[i][m])
                console.log(aiTile)
                let tile = document.getElementById(aiTile);
                aiMove({move: winCombos[i][m], element: tile});
                m++
            return;
            } while ((gameState.turnCounter % 2) == 'O') 
        } else {
            console.log('You win')
        }
    }
}

function aiMove({
    player = playerTurn(),
    move = null,
    element = null,
}) {
    if (!(AIARRAY).includes(move)) {
        console.log('INVALID')
        return
    } else {
        gameState.boardState.splice(move, 1, player);
        gameState.possibleMoves.splice(move, 1, 'INVALID');
        element.innerHTML = `<video width=\'20%\' class=\'embed-responsive-item\' autoplay><source src=\'./video/draw${playerTurn()}.mp4\' type=\'video/mp4\'></video>`;
        checkPlayerState();
        gameState.turnCounter++
        checkWinState();
        playerTurn();
        console.log(p2)
        console.log(gameState.turnCounter)
    }
};