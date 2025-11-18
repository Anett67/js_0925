
function myReplace(string, search, word) {
  if(search[0] === search[0].toUpperCase()) {
    word = word[0].toUpperCase() + word.slice(1) 
  } else if(search[0] === search[0].toLowerCase()) {
    word = word[0].toLowerCase() + word.slice(1) 
  }
  
  const newString = string.replace(search, word)  
  console.log(newString)
}

myReplace("Let us go to the store", "store", "mall") // doit retourner “Let us go to the mall”
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") // doit retourner “He is Sitting on the couch”.
myReplace("I think we should look up there", "up", "Down") // doit retourner “I think we should look down there”.
myReplace("This has a spellngi error", "spellngi", "spelling") // doit retourner “This has a spelling error”.
myReplace("His name is Tom", "Tom", "john") // doit retourner “His name is John”
myReplace("Let us get back to more Coding", "Coding", "algorithms") // doit retourner “Let us get back to more Algorithms”.