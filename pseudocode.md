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

    possible win index combos
            [0, 1, 2]
            [3, 4, 5]
            [6, 7, 8]
            [0, 3, 6]
            [1, 4, 7]
            [2, 5, 8]
            [0, 4, 8]
            [6, 4, 2]

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
        
        Take playerMove

        IF (POSSIBLEMOVES includes playerMove)
            BOARDSTATE INSERT [index of move, (playerTurn)]
            POSSIBLEMOVES REMOVE [index of playerMove]
            TURNCOUNTER ++
        ELSE 
            IGNORE

    event listener if TURNCOUNTER > 4 run CWS
    
    checkPlayerState

        loop through BOARDSTATE for each player

        push indexOf(player1) 

    checkWinState

        loop through values of winCombos and check them against p1 and p2 to see if any win combos have been achieved

        need to lock the board after a win condition is met

        