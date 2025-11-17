function truncateString(str, num) {
    if(str.length <= num)
        return str;

    const subString = str.split('').splice(0, num).join('')
    return `${subString}...`
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))


// Solution avec ternaire
function truncateStringWithTernary(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str;
}

console.log(truncateStringWithTernary("A-tisket a-tasket A green and yellow basket", 8))
