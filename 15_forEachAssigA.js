const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601]
console.log("***************************Array elements and index************************");
arrayNumbers.forEach((element,index)=>{
    console.log(`Index :${index}, Array elements:${element}`);
})
console.log("***************************Positive elements in the array************************");
arrayNumbers.forEach((element)=>{
    if (element>0) {
        console.log(element);
    }
})
console.log("****************************Negative elements in the array************************");
let newArray=[]
arrayNumbers.forEach((element)=>{
if (element<0) {
    newArray.push(element)
}
})
console.log(newArray);


console.log("***************************Even numbers in array************************");
let evenNo=[]
arrayNumbers.forEach((element)=>{
if (element%2==0) {
    evenNo.push(element)
}
})
console.log(`Even numbers: ${evenNo}`);

console.log("***************************Sum of the all elements************************");
let sum=0
arrayNumbers.forEach((element)=>{
            sum=sum+element
})
console.log(`Sum of the array elements: ${sum}`);
console.log("***************************Even index value in the array************************");
let store=[]
arrayNumbers.forEach((element,index)=>{
    if (index%2==0) {
        store.push(element)
    }
})
console.log(store);