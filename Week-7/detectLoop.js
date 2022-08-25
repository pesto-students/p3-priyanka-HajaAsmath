const {SinglyLinkedList} = require('./linkedList')

detectLoop = (list, n, x) => {
    if(!list.head.next || !list.head.next.next) {
        return "No Loop";
    }

    return detectLoopRecursion(list.head, list.head.next);
}

detectLoopRecursion = (node1, node2) => {
    
    if(!node1 || !node2 || !node2.next) {
        return "No Loop";
    }

    console.log(node1.data, node2.data);
    if(node1 === node2) {
        return "Loop";
    }

    return detectLoopRecursion(node1.next, node2.next.next);
}

let list = new SinglyLinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
let node = list.insert(6);
list.insert(7);
list.insert(8);
list.insert(9);
list.insert(10);
list.insert(11);
list.insert(12);
list.insert(13);
list.insert(14);
list.insert(15);
list.insert(16);
list.insert(17);
let tail = list.insert(18);
tail.next = node;

console.log(detectLoop(list, 7, 4))