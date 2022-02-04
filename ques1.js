function removeCharacter(string,character){
    return string.split(character).join('');
}
console.log(removeCharacter("Junnatul","t"))