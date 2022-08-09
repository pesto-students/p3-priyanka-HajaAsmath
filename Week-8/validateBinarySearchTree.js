const {BinaryTree} = require('./binarytree');

validateBinaryTree = (tree) => {
    if(tree.root.left == null && tree.root.right == null) {
        return true;
    }

    let q = [];
    q.push(tree.root);

    while(q.length !== 0) {
        let ele = q.shift();
        //console.log(ele.data);
        if(ele.left) {
            //console.log(ele.left.data +" "+ ele.data);
            if(ele.left.data > ele.data) {
                return false;
            }
            q.push(ele.left);
        }
        if(ele.right) {
            //console.log(ele.right.data +" "+ ele.data);
            if(ele.right.data < ele.data) {
                return false;
            }
            q.push(ele.right);
        }
    }

    return true;
}


let tree = new BinaryTree();
tree.insertToTreeFromArray([8,3,10, 1, 6, null, 14, null, null, 4, 7, 13, null, null, null, null, null, null, null]);
console.log(validateBinaryTree(tree));

