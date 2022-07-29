// Window sliding algo for subarray
// maxSubArr = (arr) => {
//     let windowSize = 1;
//     let max = 0;

//     let sum = 0;
//     while(windowSize < arr.length) {
//         for(let i = 0;i < windowSize;i++) {
//             sum = sum + arr[i];
//         }
    
//         for(let i = windowSize;i<arr.length;i++) {
//             if(sum > max) {
//                 max = sum;
//             }

//             sum = (sum - (arr[i - windowSize])) + (arr[i]);
//         }
        
//         sum = 0;
//         windowSize++;
//     }

//     return max;

// }

// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// console.log(maxSubArr(arr));

// Kadane's Algo

// -2 -2 -2
// -2 1  1
// 1 -3 -2
// -2 4 4
// 4 -1 3
// 3 2 5
// 5 1 6
// 6 -5 1
// 1 4 5

function maxSubArr(arr) {
    let max = -Infinity;
    let currMax = 0;

    for(let i = 0;i<arr.length;i++) {
        currMax = Math.max(arr[i], arr[i] + currMax);
        console.log(currMax);
        if(currMax > max) {
            max = currMax;
        }
    }
    return max;
}

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSubArr(arr));
