const black = '⬛'
const white = '⬜'
const size = 14
let result = ''
let mode = 2

for(let i = 0; i < size; i++) {
    for(let j = 0; j < size; j++) {
        const whiteRows = i === 1 || i === size - 2
        const whiteColumns =  j === 1 || j === size - 2
        const firstAndLastRow = i === 0 || i === size - 1
        const firstAndLastColumn = j === 0 || j === size - 1

        if(mode === 1) {
            if((whiteColumns && !firstAndLastRow) || (whiteRows && !firstAndLastColumn)) {
                result += white
            } else {
                result += black
            }
        } else {
            if((firstAndLastColumn || firstAndLastRow) || i === j || i === size - 1 - j ) {
                result += black
            } else {
                result += white
            }
        }

    }
    result += '\n'
}

console.log(result)