const {BinaryTree} = require('./binarytree');

heightOfTree = (node, height) => {
    if(node === null) {
        return height - 1;
    }

    return Math.max(heightOfTree(node.left, height+1), heightOfTree(node.right, height+1));
}

let tree = new BinaryTree();
tree.levelInsert(1);
tree.levelInsert(2);
tree.levelInsert(3);
tree.levelInsert(4);
tree.levelInsert(5);
tree.levelInsert(6);
tree.levelInsert(7);
tree.levelInsert(8);
tree.levelInsert(9);
tree.levelInsert(10);
tree.levelInsert(11);
//tree.inOrderTraversal(tree.root);

console.log(heightOfTree(tree.root, 0));