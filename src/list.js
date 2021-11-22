const list = {
    node0: {
        value: null,
        next: null,
        index: 'head'
    },
    add: function (element) {
        if (this.node0.value === null) {
            this.node0.value = element;
            this.listNumbers.pop();
            this.listNumbers.push(0);
            return this.node0.index;
        }
        const lastIndex = 'node'.concat(this.listNumbers[this.listNumbers.length - 1]);
        const index = 'node'.concat(this.listNumbers[this.listNumbers.length - 1] + 1);
        this[index] = { ['value']: element, ['next']: null, ['index']: index }
        this[lastIndex].next = this[index];
        this.listNumbers.push(this.listNumbers[this.listNumbers.length - 1] + 1);
        return this[index].index;
    },
    severalAdd: function (elements, iterator) {
        if(!Array.isArray(elements)) return 'not array, use add';
        this.add(elements[iterator]);
        if (iterator === elements.length - 1) return ;
        this.severalAdd(elements, iterator + 1);
    },
    deleteLast: function () {
        if (this.node0.next === null) {
            const val = this.node0.value;
            this.node0.value = null;
            this.listNumbers[0] = 'list is empty';
            return 'list is empty';
        }
        const last = 'node'.concat(this.listNumbers.pop());
        const val = this[last].value;
        delete this[last];
        this['node'.concat(this.listNumbers[this.listNumbers.length - 1])].next = null;
        return val;
    },
    deleteInner: function (element) {
        if (element === this.node0.value) {
            if (this.node0.next === null) {
                this.node0.value = null;
                this.listNumbers[0] = 'list is empty';
                return 'node0';
            }
            const nextIndex = 'node'.concat(this.listNumbers[1])
            const val = this.node0.value;
            this.node0.value = this[nextIndex].value;
            this.node0.next = this[nextIndex].next;
            delete this[nextIndex];
            this.listNumbers.splice(1, 1);
            return 'node1 become to head';
        }
        else {
            const keys = Object.keys(this);
            let val;
            for (let key of keys)
                if (key.includes('node') && this[key].value === element) {
                    val = key;
                    break;
                }
            const number = parseInt(val.match(/\d+/));
            const index = this.listNumbers.find((elem, index) => {
                if (elem === number)
                    return index;
            });
            if(!this.listNumbers.includes(index)) return 'no enteries';
            const prevNode = 'node'.concat(this.listNumbers[index - 1]);
            const nextNode = 'node'.concat(this.listNumbers[index + 1]);
            this[prevNode].next = this[nextNode];
            delete this['node'.concat(number)];
            this.listNumbers.splice(index, 1);
            return val;
        }
    },
    findValue: function (index) {
        return this[index].value;
    },
    findIndex: function (element) {
        const keys = Object.keys(this);
        for (let key of keys)
            if (key.includes('node') && this[key].value === element) {
                return key;
            }
    },
    writeConsole: function (node, name) {
        if (this.node0.value === null) {
            console.log(this.listNumbers[0]);
            return;
        }
        if (name === 0) console.log('head: '.concat(node.value));
        else console.log(node.index.concat(': ', node.value));
        if (node.next === null) return;
        this.writeConsole(node.next, name + 1);
    },
    lishLength: function () {
        return this.listNumbers.length;
    },
    listNumbers: ['list is empty']
}

// list.severalAdd([1, 2, 3], 0);
// list.deleteInner(2);
// list.writeConsole(list.node0);
// list.deleteInner(1);
// list.writeConsole(list.node0);

