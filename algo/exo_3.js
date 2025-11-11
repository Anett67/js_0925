let firstName = 'John'
let lastName = 'Doe'

const temporary = firstName
firstName = lastName
lastName = temporary

console.log(firstName)
console.log(lastName)