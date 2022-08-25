const {Graph} = require('./graph')

findAllPaths = (graph, arr, curPosition, globalArr) => {
    arr.push(curPosition);
    if(curPosition === graph.adjacentList.size - 1) {
        globalArr.push([...arr]);
        return;
    }
    let ele = graph.adjacentList.get(curPosition);
    for(let i of ele) {
        findAllPaths(graph, arr, i, globalArr);
        arr.pop();
    }
    return globalArr;
}

const graph = new Graph();
graph.createGraphFromArray([[4,3,1],[3,2,4],[3],[4],[]]);
let result = findAllPaths(graph, [], 0, []);
console.log(result);
