function hurufVokal(str) {
    var vokal = 'aiueoAIUEO';
    var count = 0;
    for(var x = 0; x < str.length; x++){
        if(vokal.indexOf(str[x]) !== -1){
            count++;
        }
    }
   return count;
}
console.log(hurufVokal('Farhah Kamilatun Nuha'));