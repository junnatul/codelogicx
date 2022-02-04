function findLargestAndSmallestWord(str){
    let words=str.split(' ');
    let largest=words[0];
    let smallest=words[0];
    for(let i=0; i<words.length; i++){
        if(words[i].length>largest.length){
            largest=words[i];
        }
        if(words[i].length<smallest.length){
            smallest=words[i];
        }
    }
    console.log("Largest:",largest);
    console.log("smallest:",smallest);
}
findLargestAndSmallestWord("It is a string with smallest and largest word.");