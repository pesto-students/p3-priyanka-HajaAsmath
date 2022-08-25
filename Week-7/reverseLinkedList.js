const {SinglyLinkedList} = require('./linkedList');

reverseLinkedList = (list) => {
    let currentNode = list.head;
    let previousNode = null;
    while(currentNode) {
        if(currentNode === list.head) {
            previousNode = currentNode;
            currentNode = currentNode.next;
            previousNode.next = null;
        } else {
            let temp = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = temp;
        }
    }   
    list.head = previousNode;
    
}

let list = new SinglyLinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
list.insert(6);
list.insert(7);
list.print();

reverseLinkedList(list);

list.print();

