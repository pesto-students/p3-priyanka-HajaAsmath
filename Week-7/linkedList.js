class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    insert(data) {
        let node  = new Node(data);
        if(!this.head) {
            this.head = node;
        } else {
            let currentNode = this.head;
            while(currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        return node;
    }

    print() {
        let currentNode = this.head;
        let str = "";
        while(currentNode) {
            str = str + " " + currentNode.data;
            currentNode = currentNode.next;
        }
        console.log(str);
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

module.exports = {
    SinglyLinkedList
}