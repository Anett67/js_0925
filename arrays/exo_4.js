let fruits = ["apple", "banana", "cherry"]
const reverseArray = (array) => {
    const newArray = []
    array.forEach((item, index) => newArray.unshift(array[index]))
    return newArray
}

console.log(reverseArray(fruits))