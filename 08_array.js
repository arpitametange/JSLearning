let arrayOfNumbers = [ 0, 2, 4, 5, 8, 4, 0, 8];
console.log(arrayOfNumbers);
// console.table(arrayOfNumbers);
const totalArrayElements =  arrayOfNumbers.length;
console.log(`Total elements available in array is: ${totalArrayElements}`);


const is8Available = arrayOfNumbers.includes(8);
console.log(`Is 8 available: ${is8Available} `);

const is9Available = arrayOfNumbers.includes(9);
console.log(`Is 9 available: ${is9Available} `);

const indexOf8 = arrayOfNumbers.indexOf(8);
console.log(`Index of 8 element is: ${indexOf8} `);

const indexOf100 = arrayOfNumbers.indexOf(100);
console.log(`Index of 100 element is: ${indexOf100} `);


var arrayOfNumbers1 = [ 10, 20, 25, 15, 30, 5];
const valueAtIndex2 = arrayOfNumbers1[2];
console.log(`Value at index 2 is: ${valueAtIndex2}`);

arrayOfNumbers[3] = 35;
console.log(arrayOfNumbers);
arrayOfNumbers1[1]=50;
console.log(arrayOfNumbers1);


var arrayOfNumbers3 = [ 10, 20, 25, 15, 30, 5];
console.log("==== Adding element in the last using push() === ");
arrayOfNumbers3.push(40);
console.log(arrayOfNumbers3);
console.log("==== Adding element in the first using unshift() === ");
arrayOfNumbers3.unshift(5);
console.log(arrayOfNumbers3);

var arrayOfNumbers3 = [ 10, 20, 25, 15, 30, 5];
console.log(arrayOfNumbers3);
console.log("==== Removing last element using pop() === ");
arrayOfNumbers3.pop();
console.log(arrayOfNumbers3);
console.log("==== Removing first element using shift() === ");
arrayOfNumbers.shift();
console.log(arrayOfNumbers3);


var arrayOfNumbers3 = [ 10, 20, 25, 15, 30, 5, 40, 45];
console.log("==== slice(startIndex) === ");
const arrayFromIndex3 = arrayOfNumbers3.slice(3);
console.log(arrayFromIndex3);

console.log("==== slice(startIndex, endIndex) === ");
const subArray = arrayOfNumbers3.slice(2, 5);
console.log(subArray);






console.log("============================");
var arrayOfNumbers3 = [ 10, 20, 25, 15, 40, 45];
console.log("==== splice(startIndex) === ");
const splicedArray = arrayOfNumbers3.splice(3);
console.log(`Removed elements from array is: ${splicedArray}` );
console.log(arrayOfNumbers3);

var arrayOfNumbers3 = [ 10, 20, 25, 15, 40, 45];
console.log("==== splice(startIndex, deleteCount) === ");
const splicedArrayWithDeleteCount = arrayOfNumbers3.splice(2, 2);
console.log(`Removed elements using deleteCount is: ${splicedArrayWithDeleteCount}` );
console.log(arrayOfNumbers3)


var arrayOfNumbers3 = [ 10, 20, 25, 15, 40, 45];
const spliced = arrayOfNumbers3.splice(1,1);
console.log(spliced);


var arrayOfNumbers4 = [ 10, 20, 25, 15, 40, 45];
console.log(arrayOfNumbers4.splice(3,1));

var arrayOfNumbers5 = [ 10, 20, 25, 15, 40, 45];
console.log(arrayOfNumbers5.splice(1,2));


var arrayOfNumbersa = [ 10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice(3,1);
console.log(`After removing 15: ${arrayOfNumbersa}`);

console.log("=====splice() to insert one elements without replacing existing element ====================");
var arrayOfNumbersa = [ 10, 20, 25, 15, 40, 45];
arrayOfNumbersa.splice( 2, 0, 22);
console.log(arrayOfNumbersa);

console.log("=====splice() to insert one elements without replacing existing element ====================");
var arrayOfNumbersa = [ 10, 20, 25, 15, 40, 45];
// 5, 35, 55
arrayOfNumbersa.splice( 4, 0, 5, 35, 55);
console.log(arrayOfNumbersa);



console.log("=====splice() to insert one elements without replacing existing element ====================");
var arrayOfNumbersi = [ 10, 20, 25, 15, 40, 45];
arrayOfNumbersi.splice( 4, 0, 5, 35, 55);
console.log(arrayOfNumbersi);

console.log("=====splice() to replace one elements ====================");
var arrayOfNumbersi = [ 10, 20, 25, 15, 40, 45];
arrayOfNumbersi.splice(2, 2 ,50,60);
console.log(arrayOfNumbersi);