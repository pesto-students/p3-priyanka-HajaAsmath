function sellStock(arr) {
    let {min, index} = findSmallest(arr);
    console.log(min);
    let maxProfit = 0;
    if(index === arr.length-1) {
        return maxProfit;
    }
    for(let i = index+1; i<arr.length;i++) {
        if((arr[i] - min) > maxProfit) {
            maxProfit = arr[i] - min;
        }
    }

    return maxProfit;
}

function findSmallest(arr) {
    let min = Infinity;
    let index = 0;
    for(let i = 0;i<arr.length;i++) {
        if(arr[i] < min) {
            min = arr[i];
            index = i;
        }
    }
    return {min : min, index: index};
}

console.log(sellStock([7,6,4,3,1]));