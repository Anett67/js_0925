function reverseWords(sentence) {
    const result = []
    sentence.split(' ').forEach(word => result.unshift(word))
    return result.join(' ')
}

let sentence = "I love programming";
console.log(reverseWords(sentence));

// avec la méthode reverse()
function reverseWords2(sentence) {
    return sentence.split(' ').reverse().join(' ')
}

let sentence2 = "I love Javascript";
console.log(reverseWords2(sentence));
