//Time Complexity O(n)
//Auxilary Space complexity O(1)

function spiralMatrix(arr, n, m) {
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = m - 1;
    let b = false, l = false, r = false;
    let t = true;
    let x = 0, y = 0;

    for(let i = 0;i<m*n;i++) {
        if(t) {
            console.log(arr[x][y]);
            if(y === right) {
                r = true;
                t = false;
                x++;
                continue;
            }
            y++;
        } else if(r) {
            console.log(arr[x][y]);
            if(x == bottom) {
                r = false;
                b = true;
                y--;
                continue;
            }
            x++;
        } else if(b) {
            console.log(arr[x][y]);
            if(y == left) {
                b = false;
                l = true;
                x--;
                continue;
            }
            y--;
        } else if(l) {
            console.log(arr[x][y]);
            if(x == top + 1) {
                t = true;
                l = false;
                y++;
                top++;
                right--;
                bottom--;
                left++;
                continue;
            }
            x--;
        }
    }
}


let arr = [ [ 1, 2, 3, 4 ], [ 5, 6, 7 ,8], [ 9, 10, 11, 12 ] ];
spiralMatrix(arr, 3, 4);