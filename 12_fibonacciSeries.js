console.log("*******************First ten prime numbers********************");
let arrayPrime=[]
var isprime;
var count=0
function prime(num,num2){
for (let index = num; count< num2; index++) {   
    isprime=true;
   
    for(let j=2;j<index;j++){          
     if (index%j===0) {       
    isprime=false
    break;
     }
    }
    if( isprime) {
    arrayPrime.push(index)
    count++
    }    
    
}
console.log(arrayPrime);
}
prime(2,10)

console.log("*******************Fibonacci series********************");
function name(num) {
let store=[]
var first1=0
var second2=1
store.push(first1)
store.push(second2)
for (let index = 0; index <=num; index++) {
    let temp=first1+second2
    store.push(temp)
    first1=second2
    second2=temp
}
console.log(store);

}
name(10)



// we can use this method 

function fabSeries(fabTerm){
    let first = 0;
    let second = 1;
    let next = 0;
    for (let index = 1; index <= fabTerm; index++) {
     console.log(first);   
      next = first + second; 
      first = second;
      second = next;  
    }
}
fabSeries(7);

function primeNumbers(startValue,totalPrime){
    let count = 0;
    let num = startValue;
    const arrayOfPrime = [];
    while (count<totalPrime) {
        let isPrimeNum = isPrime(num);
        if(isPrimeNum) {
            count++;
            arrayOfPrime.push(num);
        }
        num++;
    } 
    console.log(arrayOfPrime); 
}

function isPrime(num){
    for (let index = 2; index < num; index++) { // num = 7 index= 7
        if(num%index ==0) {// 7%6==0
            return false;
        }
    }
    return true;
}
primeNumbers(3, 10);
primeNumbers(20, 10);
primeNumbers(50, 15);




