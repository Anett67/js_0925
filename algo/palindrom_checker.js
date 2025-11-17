function check(string) {
  const inputArray = string.replace(/[\W_]+/g,"").split('')

  const reversedArray = [...inputArray].reverse()

  if(inputArray.join('').toLowerCase() === reversedArray.join('').toLowerCase()) {
    return `${string} is a palindrome`
  }

  return `${string} is not a palindrome`
}

console.log(check("five|/|four"))