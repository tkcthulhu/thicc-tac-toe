```
LOGIC ONLY

    Set board state
        [null, null, null, null, null, null, null, null, null]

    Set player values
        p1=X p2=O

    Initialize turn counter
        turnCounter = 0

    Allow player input
        playerInput insert player value at boardState index

    Check win condtions
        IF player1\player2 input = win indexes
            RETURN win(player)

    Tie
        IF turn couter > 8 AND win conditions are not met
            RETURN tie

FUNCTIONS & VARIABLES

    TURNCOUNTER = 0

    BOARDSTATE = new Array

    POSSIBLEMOVES = [0, 1, 2, 3, 4, 5, 6, 7, 8]

    PLAYER1 = [X]

    PLAYER2 = [O]

    setBoardState
        BOARDSTATE = [null, null, null, null, null, null, null, null, null]

    playerTurn
        IF (TURNCOUNTER % 2 = 0)
            RETURN [O]
        ELSE
            RETURN [X]


    playerMove(playerTurn)
        IF (POSSIBLEMOVES contains move)
            BOARDSTATE INSERT [index of move, (playerTurn)]
            POSSIBLEMOVES REMOVE [index of move]
            TURNCOUNTER ++
        ELSE 
            IGNORE

    checkWinState
