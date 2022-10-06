A1.addEventListener('click', () => {
    playerMove({ 
        move: 0,
        element: tile0,
    });
    // checkPlayerState();
})

A2.addEventListener('click', () => {
    playerMove({ 
        move: 1,
        element: tile1,
    });
    // checkPlayerState();
})

A3.addEventListener('click', () => {
    playerMove({ 
        move: 2,
        element: tile2,
    });
    // checkPlayerState();
})

B1.addEventListener('click', () => {
    playerMove({ 
        move: 3,
        element: tile3,
    });
    // checkPlayerState();
})

B2.addEventListener('click', () => {
    playerMove({ 
        move: 4,
        element: tile4,
    });
    // checkPlayerState();
})

B3.addEventListener('click', () => {
    playerMove({ 
        move: 5,
        element: tile5,
    });
    // checkPlayerState();
})

C1.addEventListener('click', () => {
    playerMove({ 
        move: 6,
        element: tile6,
    });
    // checkPlayerState();
})

C2.addEventListener('click', () => {
    playerMove({ 
        move: 7,
        element: tile7,
    });
    // checkPlayerState();
})

C3.addEventListener('click', () => {
    playerMove({ 
        move: 8,
        element: tile8,
    });
    // checkPlayerState();
})

resetButton.addEventListener('click', () => {
    resetBoardState()
    clearBoard();
});

resetBoardState();