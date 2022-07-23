function sellStock(arr) {
    let maxProfit = 0;
    let currentMin = Infinity;

    for(let i = 0;i<arr.length;i++) {
        if(arr[i] < currentMin) {
            currentMin = arr[i];
        }
        //currentMin = Math.min(arr[i], currentMin);
        maxProfit = Math.max(maxProfit, arr[i] - currentMin);

    }

    return maxProfit;
}

console.log(sellStock([7,1,5,3,6,4]));