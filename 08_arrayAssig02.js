const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`Given Array = ${arrayNumbers}`);
let arrayLen=arrayNumbers.length
console.log(`1) Total elements available in array is = ${arrayLen}`);
console.log(`2) first element in the array is ${arrayNumbers[0]} and the last element in the array is ${arrayNumbers[arrayNumbers. length-1]} `);
console.log(`3) Third last element in the array is  ${arrayNumbers[arrayNumbers.length-3]}`);
////////////EVEN NUMBERS PRESENT IN ARRAY//////////////
let count=[]
for (let index = 0; index < arrayNumbers.length; index++) {
    let even=arrayNumbers[index]
    if (even%2==0) {
        count.push(even)
        
    }  
}
console.log(`4) Even numbers present in array = ${count}`);  
////////////ODD NUMBERS PRESENT IN ARRAY/////////////
let oddno=[]
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%2!=0) {
        oddno.push(element)
    }
}
console.log(`5) Odd numbers present in array = ${oddno}`);

//////////////////////////EVEN POSITION ELEMENTS IN ARRAY///////////////////////////////
let evenposition=[]
let sum1=0
for (let index = 0; index < arrayNumbers.length; index++) {
    const ele=arrayNumbers[index]
    if (index%2==0) {
        evenposition.push(ele)
        sum1=sum1+ele
        
    }
    
}
console.log(`6) Even position elements in the array is = ${evenposition} and sum of the even position elements in the array is ${sum1}`);


//////////////////////////ODD POSITION ELEMENTS IN ARRAY///////////////////////////////
let oddposition=[]
let sum2=0
for (let index = 0; index < arrayNumbers.length; index++) {
    const element2 = arrayNumbers[index];
    if (index %2!=0) {
        oddposition.push(element2)
        sum2=sum2+element2
        
    }   
}
console.log(`7) Odd position elements in the array is = ${oddposition}  and the sum of the odd position elenments in the array is ${sum2}`);
 
////////////////////////////////////Sum of all elements////////////////////////////////////////////////////
let sum=0
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    sum=sum+element
}
console.log(`8) Sum of the all elements present in the array ${sum}`);

/////////////////////////////Numbers which is the multiple of 5/////////////////////////////////////////
let arrayfive=[ ]
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%5==0) {
        arrayfive.push(element)
    }
}
console.log(`9) Numbers which are the multiple of 5 is = ${arrayfive}`);


console.log(`10) Is number 115 available in array = ${arrayNumbers.includes(115)}`);
console.log(`11) Is number 23 available in array = ${arrayNumbers.includes(23)}`);

let arrayAdd=arrayNumbers.splice(3,0,55,66)
console.log(`12) 55 and 66 added in the array before index 3 = ${arrayNumbers} `);

let arrayremove=arrayNumbers.splice(4,3)
console.log(`13) 3 elements deleted from the array = ${arrayNumbers}`);













