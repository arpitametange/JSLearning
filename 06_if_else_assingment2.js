console.log("******First step*****");
function greaterNumber(n1,n2){
    if (n1>n2) {
        console.log(`Amongst 10 and -10 the greater no is ${n1}`)
    
    } else {
        console.log(`Amongst 800 and 899 the greater no is ${n2}`);
    }
}
greaterNumber(10,-10)
greaterNumber(800,899);


console.log("******Second step*****");

function isEvenOddNum(n){
    if (n%2==0) {
        var no= `${n} True`
    } else {
        var no=`${n} False`
    }
    
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
    if (word.length%2==0) {
        var wordl=`EVEN`;
           return wordl;
    } else {
        var wordl= `ODD`;
        return wordl;
        
    }
}
console.log(`JavaScript length is ${wordLength("JavaScript")} `);
console.log(`developer length is ${wordLength("developer")} `);
console.log(`Google length is ${wordLength("Google")} `);




