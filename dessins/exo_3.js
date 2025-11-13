const black = '⬛'
const white = '⬜'
const size = 10
let result = ''
for(let i = 0; i < size; i++) {
    for(let j = 0; j < size; j++) {
        if(i === 0 || i === size - 1) {
            result += black
        } else if (j === 0 || j === size - 1) {
            result += black
        } else {
            result += white
        }
    }
    result += '\n'
}

console.log(result)