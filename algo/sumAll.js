function sumAll(array) {
    let count = 0
    for(let i = Math.min(...array); i <= Math.max(...array); i++) {
        count += i
    }
    console.log(count)
}

sumAll([1, 4]) // doit retourner un nombre
sumAll([1, 4]) // doit retourner 10
sumAll([4, 1]) // doit retourner 10
sumAll([5, 10]) // doit retourner 45
sumAll([10, 5]) // doit retourner 45