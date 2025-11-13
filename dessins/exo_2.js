const black = '⬛'
const white = '⬜'
const size = 15
let result = ''
for(let i = 1; i <= size; i++) {
    for(let j = 0; j <= size; j++) {
        if((i % 2 === 1 && j % 2 === 1) || (i % 2 === 0 && j % 2 === 0)) {
            result += black
        } else {
            result += white
        }
    }
    result += '\n'
}

console.log(result)