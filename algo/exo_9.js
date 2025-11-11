const hour = 13

if(hour < 6 || hour > 22) {
    console.log('nuit')
} else if (hour < 12) {
    console.log('matin')
} else if (hour < 18) {
    console.log('après-midi')
} else {
    console.log('soir')
}