console.log("******First step*****");
function greaterNumber(n1,n2){
         console.log( (n1>n2) ? `greater no is ${n1}`:`greater no is ${n2}`);
       
}
console.log(`Between 10 and -10 :`);
greaterNumber(10,-10)
console.log(`Between 800 and 899 : `);

greaterNumber(800,899);

console.log("******Second step*****");

function isEvenOddNum(n){
    var no=(n%2==0) ?`${n} True`:`${n} False`;
    return no;
}
var number=isEvenOddNum(29);
console.log(number);

number=isEvenOddNum(44);
console.log(number);

number=isEvenOddNum(0);
console.log(number);

number=isEvenOddNum(101);
console.log(number);


console.log("******Third step*****");

function wordLength(word){
           var wordl=word.length%2==0?`EVEN`:`ODD`;
           return wordl;
}
console.log(`JavaScript length is ${wordLength("JavaScript")} `);
console.log(`developer length is ${wordLength("developer")} `);
console.log(`Google length is ${wordLength("Google")} `);
