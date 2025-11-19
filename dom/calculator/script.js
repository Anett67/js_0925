const number1 = document.getElementById('number1')
const number2 = document.getElementById('number2')
const result = document.querySelector('#result span')
const button = document.getElementById('calculate')

button.addEventListener('click', function() {
    if(!number1.value || !number2.value) {
        alert('Veuillez saisir deux nombres')
    }

    result.textContent = parseInt(number1.value) + parseInt(number2.value)

})
