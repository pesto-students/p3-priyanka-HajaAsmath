const {SinglyLinkedList} = require('./linkedList')
rotateLinkedList = (list, n, k) => {
    if(n === k) {
        return list;
    }
    let temp = list.head;
    let currentNode = list.head;
    let tail = null;
    while(k--) {
        tail = currentNode;
        currentNode = currentNode.next;
    }

    list.head = currentNode;
    while(currentNode.next) {
        currentNode = currentNode.next;
    }
    currentNode.next = temp;
    tail.next = null;
}

let list = new SinglyLinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
list.insert(6);
list.insert(7);

rotateLinkedList(list,5, 3);

list.print();