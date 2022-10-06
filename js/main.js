const body = document.body;

function createElement({
    eType = 'div',
    cName = '',
    eId = '',
    type = '',
    parent = null,
    text = '',
    source = '',
    link = '',
    eStyle = '',
}) {
    let el = document.createElement(eType);
    parent.appendChild(el);
    el.className = cName;
    el.id = eId;
    el.type = type;
    el.innerHTML = text;
    el.src = source;
    el.href = link;
    el.style = eStyle;
    return el
}

