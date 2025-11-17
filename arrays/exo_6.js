let fruits = ["apple", "banana", "cherry", "banana", "apple", "cherry"]

const countOccurrences = (arr, value) => {
    let count = 0
    arr.forEach(item => {
        if (item === value)
            count++
    })
    return count
}

function  mostFrequent(arr) {
    let maxOccurrence = 0
    let result = ''
    arr.forEach(fruit => {
        const count = countOccurrences(arr, fruit)
        if(count > maxOccurrence) {
            result = fruit
            maxOccurrence = count
        }
    })
    return result
}

console.log(mostFrequent(fruits))