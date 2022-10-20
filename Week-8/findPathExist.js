const {Graph} = require('./graph')

findPathExist = (graph, src, dest) => {
    let visited = [];

    let q = [];
    q.push(src);

    while(q.length !== 0) {
        let cur = q.shift();
        if(cur === dest) {
            return true;
        }
        let ele = graph.adjacentList.get(cur);
        if(!visited.includes(cur)) {
            for(let i of ele) {
                if(!visited.includes(i)) {
                    q.push(i);
                }
            }
        }

        visited.push(cur);
    }
    return false;
}


let graph = new Graph();

let arr = [[0,1],[0,2],[1,3],[3,5],[5,4],[4,3]];
for(let ele of arr) {
    graph.addEdge(ele[0], ele[1]);
    graph.addEdge(ele[1], ele[0]);
}

console.log(findPathExist(graph, 0, 5));