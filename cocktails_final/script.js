const navItems = document.querySelectorAll('.nav-item')
const list = document.getElementById('list')
const drinkInfo = document.getElementById('drink-info')
const drinkImage = document.getElementById('drink-image')
const drinkName = document.getElementById('drink-name')
const drinkIngredients = document.getElementById('drink-ingredients')
const drinkInstructions = document.getElementById('drink-instructions')
const modal = document.getElementById('modal')


async function fetchData(id) {
    try {
        const response = await fetch(`https://thecocktaildb.com/api/json/v1/1/filter.php?c=${id}`)
        const cocktalData = await response.json()
        addItems(cocktalData.drinks)
    } catch(error) {
        console.error(error)
    }
}

async function fetchDetails(id) {
    try {
        const response = await fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        const cocktalDetails = await response.json()
        initModal(cocktalDetails.drinks[0])
    } catch(error) {
        console.error(error)
    }
}

navItems[0].classList.add('active')
fetchData('Cocktail')


navItems.forEach(item => {
    item.addEventListener('click', function(event) {
        navItems.forEach(item => item.classList.remove('active'))
        event.currentTarget.classList.add('active')
        fetchData(event.currentTarget.id)
    })
})

function addItems(drinks) {
    list.innerHTML = ''
    drinks.forEach(drink => {
        const container = document.createElement('div')
        container.classList.add('list-item', 'col-12', 'col-sm-3')
        const title = document.createElement('h3')
        title.textContent = drink.strDrink
        const thumbnail = document.createElement('img')
        thumbnail.setAttribute('src', drink.strDrinkThumb)
        thumbnail.classList.add('thumbnail')
        container.appendChild(thumbnail)
        container.appendChild(title)
        list.appendChild(container)    

        container.addEventListener('click', function() {
            fetchDetails(drink.idDrink)
        })
    })
}

function initModal(drink) {
    drinkName.textContent = drink.strDrink
    drinkImage.setAttribute('src', drink.strDrinkThumb)
    drinkInstructions.textContent = drink.strInstructions

    const keys = Object.keys(drink).filter(key => key.indexOf('strIngredient') !== -1 && drink[key] !== null)

    drinkIngredients.innerHTML = ''
    keys.forEach(key => {
        const ingredient = document.createElement('li')
        ingredient.textContent = drink[key]
        drinkIngredients.appendChild(ingredient)
    })

    modal.style.display = 'flex'
}

modal.addEventListener('click', function(event) {
    if(event.target === modal) 
        modal.style.display = 'none'
})
