function spinalCase(string) {
    let inputArray = string.replace(/[\W_]+/g," ")
    inputArray = inputArray.replace(/([A-Z])/g, ' $1').trim().replaceAll(/ +(?= )/g,'').replaceAll(' ', '-')
    console.log(inputArray.toLowerCase())
}


spinalCase("This Is Spinal Tap") // doit retourner “this-is-spinal-tap”
spinalCase("thisIsSpinalTap") // doit retourner “this-is-spinal-tap”
spinalCase("The_Andy_Griffith_Show") // doit retourner “the-andy-griffith-show”
spinalCase("Teletubbies say Eh-oh") // doit retourner “teletubbies-say-eh-oh” 
spinalCase("AllThe-small Things") // doit retourner “all-the-small-things”