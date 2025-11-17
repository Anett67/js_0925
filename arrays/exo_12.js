function titleCase(str) {
    const array = str.split(' ')
    const result = array.map(item => {
        itemArray = item.toLowerCase().split('')
        itemArray[0] = itemArray[0].toUpperCase()
        return itemArray.join('')
    })
    return result.join(' ')
}

console.log(titleCase("I'm a little tea pot"))


