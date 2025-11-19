const input = document.getElementById('userInput')
const message = document.getElementById('message')
const button = document.getElementById('button')

const messages = {
    'Bonjour': 'Bonne journée !',
    'Au revoir':'À la prochaine !'
}

button.addEventListener('click', function() {
    if(['Bonjour', 'Au revoir'].includes(input.value)) {
        message.textContent = messages[input.value]
        message.classList.add('text-success')
        message.classList.remove('text-danger')
        return
    }

    message.textContent = 'Je ne comprends pas'
    message.classList.remove('text-success')
    message.classList.add('text-danger')
})