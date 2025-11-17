let fruits = ["apple", "banana", "cherry", "banana", "banana", "cherry"]

const countOccurrences = (arr, value) => {
    let count = 0
    arr.forEach(item => {
        if (item === value)
            count++
    })
    return count
}

console.log(countOccurrences(fruits, "cherry"))

const countOccurrencesForOf = (arr, value) => {
    let count = 0
    for(let item of arr) {
        if (item === value)
            count++
    }
    return count
}

console.log(countOccurrencesForOf(fruits, "cherry"))