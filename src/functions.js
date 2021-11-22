function writeList(node) {
    if (node.value === null) return false;
    var newElement = document.createElement('div');
    dom.linkedList.appendChild(newElement);
    newElement.innerHTML = `
    ${node.index}
    <p ${node.index === 'head' ? 'class="head" ' : 'class="node"' }>
         ${node.next === null ? 'null' : node.next.index} <br>
       ${node.value}
    </p>
    `;
    if (node.next != null) {
        var arrow = document.createElement('p');
        dom.linkedList.appendChild(arrow);
        arrow.innerHTML = ' > ';
    }
    if (node.next === null) return true;
    writeList(node.next);
}

function addElement() {
    list.add(dom.input.value);
    dom.linkedList.innerHTML = '';
    writeList(list.node0);
}

function deleteFromEnd() {
    list.deleteLast();
    dom.linkedList.innerHTML = '';
    writeList(list.node0);
}

function deleteElement() {
    list.deleteInner(dom.input.value);
    dom.linkedList.innerHTML = '';
    writeList(list.node0);
}

function serchIndex() {
    dom.output.innerHTML = ` index: ${list.findIndex(dom.input.value)}`;
}

function serchValue() {
    dom.output.innerHTML = ` value: ${list.findValue(dom.input.value)}`;
}