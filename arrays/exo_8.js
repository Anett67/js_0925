function filterEven(arr) {
    return arr.filter(item => item % 2 === 0)
}

let numbers = [1, 2, 3, 4, 5, 6];
console.log(filterEven(numbers));
