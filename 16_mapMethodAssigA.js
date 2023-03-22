
const arrayNumbers=[20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`Given array: ${arrayNumbers}`)
let mapMethod=arrayNumbers.map((element)=>{
         return element+10
})
console.log(`After adding the 10 to each element: ${mapMethod}`);

console.log("***********************************************************************");
console.log(`Given array :${arrayNumbers}`)
let mapMethod2=arrayNumbers.map(element => element**2)
console.log(`Square to each array element: ${mapMethod2}`);

console.log("************************************************************************");
let mapMethod3=arrayNumbers.map((element,index)=>{
       return element+index
})
console.log(`Given array :${arrayNumbers}`)
console.log(`After adding the index value into each array element: ${mapMethod3}`);
