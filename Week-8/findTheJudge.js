findTownJudge = (arr, n) => {
    let indegree = new Array(n+1).fill(0);
    let outdegree = new Array(n+1).fill(0);

    for(let subArr of arr) {
        let a = subArr[0];
        let b = subArr[1];
        indegree[b]++;
        outdegree[a]++;
    }

    for(let i = 0;i<=n;i++) {
        if(indegree[i] === n-1 && outdegree[i] === 0) {
            return i;
        }
    }
    return -1;
}

console.log(findTownJudge([[1,2]], 2));