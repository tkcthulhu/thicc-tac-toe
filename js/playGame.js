A1.addEventListener('click', () => {
    playerMove({ 
        move: 0,
        element: tile0,
    });
})

A2.addEventListener('click', () => {
    playerMove({ 
        move: 1,
        element: tile1,
    });
})

A3.addEventListener('click', () => {
    playerMove({ 
        move: 2,
        element: tile2,
    });
})

B1.addEventListener('click', () => {
    playerMove({ 
        move: 3,
        element: tile3,
    });
})

B2.addEventListener('click', () => {
    playerMove({ 
        move: 4,
        element: tile4,
    });
})

B3.addEventListener('click', () => {
    playerMove({ 
        move: 5,
        element: tile5,
    });
})

C1.addEventListener('click', () => {
    playerMove({ 
        move: 6,
        element: tile6,
    });
})

C2.addEventListener('click', () => {
    playerMove({ 
        move: 7,
        element: tile7,
    });
})

C3.addEventListener('click', () => {
    playerMove({ 
        move: 8,
        element: tile8,
    });
})

resetButton.addEventListener('click', () => {
    resetBoardState()
    clearBoard();
});

aiMoveButton.addEventListener('click', () => {
    aiBoardCheck();
})

resetBoardState();