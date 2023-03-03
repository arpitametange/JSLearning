function factorialofWordsCount(word) {
    if (word==null || word==undefined || word==NaN   ) {
        console.log(`${word} is not the string, we cant find the factorial of it's total words`);
    }
    else if(word==""){
           console.log(`"" is an empty string, we cant find the factorial of it`);
    }
    else{
    count=1
    factorial=1
    for (let index = 0; index < word.length; index++) {
     var wordl=word.charAt(index)
        if (wordl==" ") {
            count=count+1;
            factorial=factorial*count
        }
      
    }
    return factorial
}
}
let word1=factorialofWordsCount("Revision is the mother of Success");
console.log(`"Revision is the mother of Success"= The total number of words present in string is ${count} & Factorial of it is ${word1}`);
console.log("---------------------------------------------------------------------------------------------------");
let word2=factorialofWordsCount("We never fail, we always learn");
console.log(`"We never fail, we always learn" = The total number of words present in string is ${count}  & Factorial of it is ${word2}`);
console.log("---------------------------------------------------------------------------------------------------");

let word3=factorialofWordsCount(null);
console.log("---------------------------------------------------------------------------------------------------");

let word4=factorialofWordsCount("");
console.log("---------------------------------------------------------------------------------------------------");

let word5=factorialofWordsCount("Arpita Vilas Metange");
console.log(`"Arpita Vilas Metange" = The total number of words present in string is ${count} & Factorial of it is ${word5}`);

console.log("---------------------------------------------------------------------------------------------------");
