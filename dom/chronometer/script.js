const start = document.getElementById('start')
const pause = document.getElementById('pause')
const reset = document.getElementById('reset')
const hoursContent = document.getElementById('hours')
const minutesContent = document.getElementById('minutes')
const secondsContent = document.getElementById('seconds')
const decisecondsContent = document.getElementById('deciseconds')


let hours = 0;
let minutes = 0;
let seconds = 0;
let deciseconds = 0;
let started = false;

let incrementDeciseconds;
let incrementSeconds;
let incrementMinutes;
let incrementHours;

function increment() {
    if(started) {
        return
    }
    started = true
    incrementDeciseconds = setInterval(function() {
        deciseconds++
        if(deciseconds === 10) {
            deciseconds = 0
        }
        decisecondsContent.textContent = deciseconds
    }, 100)
    incrementSeconds = setInterval(function() {
        seconds++
        if(seconds === 60) {
            seconds = 0
        }
        secondsContent.textContent = seconds
    }, 1000)
    incrementMinutes = setInterval(function() {
        minutes++  
        minutesContent.textContent = minutes     
        if(minutes === 60) {
            minutes = 0
        }     
    }, 60000)
    incrementHours = setInterval(function() {
        hours++
        hoursContent.textContent = hours            
    }, 3600000)
}

function stop() {
    started = false
    clearInterval(incrementDeciseconds)
    clearInterval(incrementSeconds)
    clearInterval(incrementMinutes)
    clearInterval(incrementHours)
}

function resetTime() {
    deciseconds = 0
    seconds = 0 
    minutes = 0
    hours = 0
    hoursContent.textContent = hours
    minutesContent.textContent = minutes
    secondsContent.textContent = seconds  
    decisecondsContent.textContent = deciseconds
}

start.addEventListener('click', increment)
pause.addEventListener('click', stop)
reset.addEventListener('click', function() {
    stop()
    resetTime()
})

