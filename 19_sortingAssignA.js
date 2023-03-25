console.log("****************************Given array******************************");
const arrayRollNumbers=[113,45,56,11,32,45,109,799,56,45]
console.log(arrayRollNumbers);
console.log("****************************Reverse array******************************");
let reverse=arrayRollNumbers.reverse()
console.log(reverse);
console.log("***********************Sort() method without any custom sorting logic*****************************");
let sortWithoutLogic=arrayRollNumbers.sort()
console.log(sortWithoutLogic);
console.log("*********************Array sorting in ascending order by custom logic*****************************");
arrayRollNumbers.sort((a,b)=>{
      return a>b?1:-1
})
console.log(arrayRollNumbers);
console.log("****************************Greatest number from the array******************************");
let newArray=arrayRollNumbers.sort((a,b)=>{
    return a>b?1:-1
})
console.log(newArray[newArray.length-1]);
console.log("****************************Smallest number from the array******************************");
console.log(newArray[0]);
console.log("****************************Remove the duplicate from the array******************************");
let duplicate=[...new Set(arrayRollNumbers)]
console.log(duplicate);

