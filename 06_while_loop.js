//WAP to print numbers from 0 to 10
var index=0; // initialization
while (index<=10) { // condition
    console.log(index);
    index++; // Update Expression
}


const arrayOfNumbers1 = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];
var index=0;
 while (index<arrayOfNumbers1.length) {
    console.log(arrayOfNumbers1[index]);
    
            index++
        }




console.log("Even numbers");
const arrayOfNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];

var index=0; // initialization
let sum = 0;
while (index<arrayOfNumbers.length) { // condition
    const element = arrayOfNumbers[index];
    if(element%2==0) {
        console.log(element);
        sum = sum + element;
    }
    index++; // Update Expression
}
