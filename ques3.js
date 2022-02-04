function sortArrayWithFrequency(frequency){
    for( var i=0; i<frequency.length; i++){
        for( var j=i+1; j<frequency.length; j++){
            if(frequency[i]>frequency[j]){
                var temp= frequency[i];
                frequency[i]=frequency[j];
                frequency[j]=temp;
            }
        }
    }
    return frequency;
}
console.log(sortArrayWithFrequency([1,3,5,5,5,7,7,8,8,0]));