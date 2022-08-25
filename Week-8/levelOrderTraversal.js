const {BinaryTree} = require('./binarytree')
levelTraversal = (tree) => {
    if(tree.root == null) {
        return;
    }
    let q = [];
    q.push(tree.root);
    while(q.length !== 0) {
        let ele = q.shift();
        console.log(ele.data);
        if(ele.left !== null) {
            q.push(ele.left);
        }
        if(ele.right !== null) {
            q.push(ele.right);
        }
    }
}
let tree = new BinaryTree();
tree.insertToTreeFromArray([3,9,20,null,null,15,7]);
levelTraversal(tree);