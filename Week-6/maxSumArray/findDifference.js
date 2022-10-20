function findDifferenceExist(arr, key) {
    let map = new Map();
    for(let i = 0;i<arr.length;i++) {
        map.set(arr[i], arr[i]);
    }

    for(let mapKey of map.keys()) {
        if(map.has(mapKey-key)) {
            return 1;
        }
    }

    return 0;

}

console.log(findDifferenceExist([5, 10, 3, 2, 50, 80], 76));