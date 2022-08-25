class Graph {
    constructor() {
        this.adjacentList = new Map();
    }

    addEdge(src, dest) {
        if(this.adjacentList.has(src)) {
            let arr = this.adjacentList.get(src);
            arr.push(dest);
        } else {
            if(dest) {
                this.adjacentList.set(src, [dest]);
            } else {
                //fix for directed graph
                this.adjacentList.set(src, []);
            }
        }
    }

    createBiGraphFromArray(arr) {
        for(let i = 0;i<arr.length;i++) {
            let subArr = arr[i];
            for(let ele of subArr) {
                this.addEdge(i, ele);
                this.addEdge(ele, i);
            }
        }
    }

    createGraphFromArray(arr) {
        for(let i = 0;i<arr.length;i++) {
            let subArr = arr[i];
            if(subArr.length !== 0) {
                for(let ele of subArr) {
                    this.addEdge(i, ele);
                }
            } else {
                this.addEdge(i)
            }
        }
    }
}

module.exports = {
    Graph
}