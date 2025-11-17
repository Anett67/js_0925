// 1. Calcul de l'âge
function calculateAge(birthDate) {
    const date = new Date(birthDate)
    const currentDate = new Date()

    console.log(Math.floor((currentDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24 * 365)))
}

calculateAge('1990-05-15')

// 2. Vérification de la validité d'une date
function isValidDate(dateString) {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = addZero(date.getMonth() + 1)
    const day = addZero(date.getDate())

    console.log(`${year}-${month}-${day}` === dateString)
}

function addZero(number) {
    return number < 10 ? `0${number}` : number
}

isValidDate('2023-02-29')

// 3. Prochaine date dans une semaine
function addOneWeek(date) {
    const dateObject =  new Date(date)
    dateObject.setDate(dateObject.getDate() + 7)
    console.log(dateObject)
}

addOneWeek('2024-12-25')

// 4. Nombre de jours restants jusqu'à une date spécifique

const now = new Date()


function daysUntil(targetDate) {
    const currentDate = new Date()
    targetDate = new Date(targetDate)
    let result = targetDate.getTime() - currentDate.getTime()
    return Math.ceil(result / (1000 * 60 * 60 * 24))
}

console.log(daysUntil("2025-11-20"))

// 5. Formatage personnalisé d'une date
function formatCustomDate(date) {
    const dateObject = new Date(date)
    console.log(dateObject.toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }))
}

formatCustomDate('2024-10-12')

