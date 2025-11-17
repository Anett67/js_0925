function removeDuplicates(arr) {
    const uniqueValues = []
    arr.forEach(item => {
        if (!uniqueValues.includes(item))
            uniqueValues.push(item)
    })
    return uniqueValues
}

let numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(numbers));
