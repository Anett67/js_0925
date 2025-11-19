const images = document.querySelectorAll('.thumbnail')
const mainImage = document.getElementById('mainImage')
images.forEach(image => {
    image.addEventListener('click', function (event) {
        console.log('image')
        mainImage.setAttribute('src', event.target.getAttribute('src'))
    })
})