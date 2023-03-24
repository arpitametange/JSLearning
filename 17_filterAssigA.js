const arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19];
console.log(`Given array: ${arrayNumbers}`);
console.log("******************Numbers which are greater than 50***************");
let greaterNo=arrayNumbers.filter(element=> element>50)
console.log(greaterNo);
console.log("******************Even Numbers from the given array***************");
let even=arrayNumbers.filter(element=> element%2==0)
console.log(even);
console.log("******************Odd Numbers from the given array***************");
let odd=arrayNumbers.filter(element=> element%2!=0)
console.log(odd);
console.log("******************Numbers which are the multiple of 5***************");
let fiveMultiple=arrayNumbers.filter(element=> element%5==0)
console.log(fiveMultiple);
console.log("******************Numbers which are between 20 and 50***************");
let num=arrayNumbers.filter(element => element>20 && element<50)
console.log(num);

