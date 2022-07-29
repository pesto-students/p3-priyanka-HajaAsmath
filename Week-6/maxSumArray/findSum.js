findSum = (arr, key) => {
    arr.sort((a, b) => {
        return a - b;
    });
    console.log(arr);
    let len = arr.length;
    let result = Infinity;
    for(let i = 0;i<len-2;i++) {
        let p1 = i+1;
        let p2 = len-1;


        while(p1<p2) {
            let sum = arr[i] + arr[p1] + arr[p2];
            if(sum === key) {
                return key;
            }
            if(Math.abs(key - sum) < Math.abs(key - result)) {
                result = sum;
            }
            if(sum < key) {
                p1++;
            } else {
                p2--;
            }
        }
    }
    return result;
}


console.log(findSum([-1,2,1,-4], 1));
