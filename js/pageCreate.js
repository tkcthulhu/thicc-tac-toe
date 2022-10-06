const root = createElement({
    cName: 'container-fluid',
    eId: 'root',
    parent: body,
})

const P1 = createElement({
    cName: 'col-1',
    parent: root,
})

const rowA = createElement({
    cName: 'row justify-content-center',
    eId: 'rowA',
    parent: root,
})

const A1 = createElement({
    cName: 'col-3 tile',
    eId: 'A1',
    parent: rowA,
})

const tile0 = createElement({
    eType: 'p',
    cName: 'XO',
    parent: A1,
})

const A2 = createElement({
    cName: 'col-3 tile',
    eId: 'A2',
    parent: rowA,
})

const tile1 = createElement({
    eType: 'p',
    cName: 'XO',
    parent: A2,
})

const A3 = createElement({
    cName: 'col-3 tile',
    eId: 'A3',
    parent: rowA,
})

const tile2 = createElement({
    eType: 'p',
    cName: 'XO',
    parent: A3,
})

const P2 = createElement({
    cName: 'col-1',
    parent: root,
})

const rowB = createElement({
    cName: 'row justify-content-center',
    eId: 'rowB',
    parent: root,
})

const B1 = createElement({
    cName: 'col-3 tile',
    eId: 'B1',
    parent: rowB,
})

const tile3 = createElement({
    eType: 'p',
    cName: 'XO',
    parent: B1,
})

const B2 = createElement({
    cName: 'col-3 tile',
    eId: 'B2',
    parent: rowB,
})

const tile4 = createElement({
    eType: 'p',
    cName: 'XO',
    parent: B2,
})

const B3 = createElement({
    cName: 'col-3 tile',
    eId: 'B3',
    parent: rowB,
})

const tile5 = createElement({
    eType: 'p',
    cName: 'XO',
    parent: B3,
})


const rowC = createElement({
    cName: 'row justify-content-center',
    eId: 'rowC',
    parent: root,
})

const C1 = createElement({
    cName: 'col-3 tile',
    eId: 'C1',
    parent: rowC,
})

const tile6 = createElement({
    eType: 'p',
    cName: 'XO',
    parent: C1,
})

const C2 = createElement({
    cName: 'col-3 tile',
    eId: 'C2',
    parent: rowC,
})

const tile7 = createElement({
    eType: 'p',
    cName: 'XO',
    parent: C2,
})

const C3 = createElement({
    cName: 'col-3 tile',
    eId: 'C3',
    parent: rowC,
})

const tile8 = createElement({
    eType: 'p',
    cName: 'XO',
    parent: C3,
})

const buttonRow = createElement({
    cName: 'row justify-content-center',
    eId: 'BR',
    parent: root,
})

const buttonCol = createElement({
    cName: 'col-5',
    eId: 'BC',
    parent: buttonRow,
})

const resetButton = createElement({
    eType: 'button',
    cName: 'btn btn-primary btn-lg',
    text: 'RESTART',
    parent: buttonCol,
})

const resultRow = createElement({
    cName: 'row justify-content-center',
    parent: root,
})

const result = createElement({
    cName: 'col',
    parent: resultRow,
    eId: 'result',
})
