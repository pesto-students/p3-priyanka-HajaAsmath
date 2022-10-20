sortArray = function(arr) {
    let zeros = 0;
    let ones = 0;
    let tows = 0;
    for(let i = 0;i<arr.length;i++) {
        switch (arr[i]) {
            case 0:
                zeros++;
                break;
            case 1:
                ones++
                break;
            case 2:
                tows++
                break;
            default:
                break;

        }
    }
    for(let i = 0;i<arr.length;i++) {
        if(zeros > 0) {
            arr[i] = 0;
            zeros--;
        } else if(ones > 0) {
            arr[i] = 1;
            ones--;
        } else if(tows > 0) {
            arr[i] = 2;
            tows--;
        }
    }
    return arr;
}

let arr = [0, 2,1,2,1, 0, 2];
console.log(sortArray(arr));