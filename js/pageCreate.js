const root = createElement({
    cName: 'container-fluid',
    eId: 'root',
    parent: body,
})

const titleRow = createElement({
    cName: 'row justify-content-center',
    parent: root,
    text: 'THICC-TAC-TOE',
    eId: 'title',
})

const rootRow = createElement({
    cName: 'row justify-content-center',
    parent: root,
})

const P1 = createElement({
    cName: 'col-2',
    parent: rootRow,
})

const rootCol = createElement({
    cName: 'col',
    parent: rootRow
})

const rowA = createElement({
    cName: 'row gamepad justify-content-center',
    eId: 'rowA',
    parent: rootCol,
})

const A1 = createElement({
    cName: 'col-4 tile embed-responsive embed-responsive-1by1',
    parent: rowA,
})

const tile0 = createElement({
    eType: 'p',
    cName: 'XO',
    parent: A1,
    eId: '0',
})

const A2 = createElement({
    cName: 'col-4 tile embed-responsive embed-responsive-1by1',
    parent: rowA,
})

const tile1 = createElement({
    eType: 'p',
    cName: 'XO',
    parent: A2,
    eId: '1',
})

const A3 = createElement({
    cName: 'col-4 tile embed-responsive embed-responsive-1by1',
    parent: rowA,
})

const tile2 = createElement({
    eType: 'p',
    cName: 'XO',
    parent: A3,
    eId: '2',
})

const P2 = createElement({
    cName: 'col-2',
    parent: rootRow,
})

const rowB = createElement({
    cName: 'row gamepad justify-content-center',
    eId: 'rowB',
    parent: rootCol,
})

const B1 = createElement({
    cName: 'col-4 tile embed-responsive embed-responsive-1by1',
    parent: rowB,
})

const tile3 = createElement({
    eType: 'p',
    cName: 'XO',
    parent: B1,
    eId: '3',
})

const B2 = createElement({
    cName: 'col-4 tile embed-responsive embed-responsive-1by1',
    parent: rowB,
})

const tile4 = createElement({
    eType: 'p',
    cName: 'XO',
    parent: B2,
    eId: '4',
})

const B3 = createElement({
    cName: 'col-4 tile embed-responsive embed-responsive-1by1',
    parent: rowB,
})

const tile5 = createElement({
    eType: 'p',
    cName: 'XO',
    parent: B3,
    eId: '5',
})


const rowC = createElement({
    cName: 'row gamepad justify-content-center',
    eId: 'rowC',
    parent: rootCol,
})

const C1 = createElement({
    cName: 'col-4 tile embed-responsive embed-responsive-1by1',
    parent: rowC,
})

const tile6 = createElement({
    eType: 'p',
    cName: 'XO',
    parent: C1,
    eId: '6',
})

const C2 = createElement({
    cName: 'col-4 tile embed-responsive embed-responsive-1by1',
    parent: rowC,
})

const tile7 = createElement({
    eType: 'p',
    cName: 'XO',
    parent: C2,
    eId: '7',
})

const C3 = createElement({
    cName: 'col-4 tile embed-responsive embed-responsive-1by1',
    parent: rowC,
})

const tile8 = createElement({
    eType: 'p',
    cName: 'XO',
    parent: C3,
    eId: '8',
})

const buttonRow = createElement({
    cName: 'row justify-content-center',
    eId: 'BR',
    parent: rootCol,
})

const resetButton = createElement({
    eType: 'button',
    cName: 'btn btn-light btn-lg',
    text: '<h1>RESTART</h1>',
    eId: 'resetButton',
    parent: buttonRow,
})

const resultRow = createElement({
    cName: 'row justify-content-center',
    parent: rootCol,
    eId: 'result',
})

const aiMoveButton = createElement({
    eType: 'button',
    parent: root,
    text: "AI"
})