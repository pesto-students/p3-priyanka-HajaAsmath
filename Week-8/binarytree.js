class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    levelInsert(data) {
        if(this.root === null) {
            this.root = new Node(data);
            return;
        }

        let q = [];
        q.push(this.root);
        while(q.length !== 0) {
            let ele = q.shift();
            if(ele.left === null) {
                ele.left = new Node(data);
                return;
            } else if(ele.right === null) {
                ele.right = new Node(data);
                return;
            }
            q.push(ele.left);
            q.push(ele.right);
        }
    }

    inOrderTraversal(node) {
        if(node === null) {
            return;
        }
        this.inOrderTraversal(node.left);
        console.log(node.data);
        this.inOrderTraversal(node.right);
    }

    insertToTreeFromArray(arr) {
        if(arr.length === 0) {
            return;
        }

        let q = [];
        this.root = new Node(arr[0]);
        q.push(this.root);
        for(let i = 1;i<arr.length;) {
            let ele = q.shift();
            if(i < arr.length) {
                if(arr[i]) {
                    ele.left = new Node(arr[i]);
                    q.push(ele.left);
                }
            }
            if((i+1) < arr.length) {
                if(arr[i+1]) {
                    ele.right = new Node(arr[i+1]);
                    q.push(ele.right);
                }
            }
            i+=2;
        }

    }
}

module.exports = {
    BinaryTree
}
