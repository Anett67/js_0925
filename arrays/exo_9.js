function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2]
}

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(mergeArrays(arr1, arr2));
