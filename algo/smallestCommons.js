function smallestCommons(numbers) {
    let result = 0
    let mulptiplier = 1
    const max = Math.max(...numbers)
    const min = Math.min(...numbers)
    while(result === 0) {
        const number = max * mulptiplier
        let notCommon = false
        for(let i = min; i < max; i++ ) {
            if(number % i !== 0) {
                notCommon = true       
            }
        }

        if (!notCommon) {
            result = number
        }
        mulptiplier++
    }
    console.log(result)

}

smallestCommons([1, 5]) // doit retourner un nombre
smallestCommons([1, 5]) // doit retourner 60 
smallestCommons([5, 1]) // doit retourner 60 
smallestCommons([2, 10]) // doit retourner 2520 
smallestCommons([1, 13]) // doit retourner 360360 
smallestCommons([23, 18]) // doit retourner 6056820