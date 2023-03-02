console.log("*********First step**********");
var fun=function(str){
    var count=0;
    for (let index = 0; index < str.length; index++) {
        var chr=str.charAt(index)
        if (chr=='a' || chr=='e' || chr=='i' || chr=='o' || chr=='u' || chr=='A' || chr=='E' || chr=='I' || chr=='O' || chr=='U' ) {
            count=count+1;            
        }
        
    }
    return count;
}
var store=fun("JavaScript is the language Of Internet");
console.log(`The vowels present in string "JavaScript is the language Of Internet" is : ${store}`);
var store1=fun("I am Angular Developer");
console.log(`The vowels present in string "I am Angular Developer" is : ${store1}`);
var store2=fun("Hard work and commitment is the key of success");
console.log(`The vowels present in string "Hard work and commitment is the key of success" is : ${store2}`);


console.log("*******Second step*********");
function lastWordCharsCount(total) {
   var  countchr=0
    for (let index = total.length-1; index >=0; index--) {
        var chrtotal=total.charAt(index)
        if (chrtotal==" ") {
           
            break;
        } 
        countchr=countchr+1;      
    }
    return countchr;
}

var totalchr=lastWordCharsCount("JavaScript is the language Of Internet");
console.log(`Total characters available in last word of the string = "JavaScript is the language Of Internet" is : ${totalchr}`);
var totalchr1=lastWordCharsCount("I am Angular Developer");
console.log(`Total characters available in last word of the string = "I am Angular Developer" is : ${totalchr1}`);
var totalchr2=lastWordCharsCount("Hard work and commitment is the key of success");
console.log(`Total characters available in last word of the string = "Hard work and commitment is the key of success" is : ${totalchr2}`);
