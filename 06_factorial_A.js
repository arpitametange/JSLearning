function factorialOfNum(num) {
   
    if (num==null || num==0 || num==NaN ) {
        
        console.log(`${num} , please enter the valid number`);       
        
    }  else {  
         var count=1;
          for (let index = num; index >=1; index--) {
     
           count=count*index;
           
       }
       return count;
       
      
}
}
let firstnum=factorialOfNum(5);
console.log(`The factorial of 5 is ${firstnum}`);
console.log("---------------------------------------------------------------------");

let secondnum=factorialOfNum(3);
console.log(`The factorial of 3 is ${secondnum}`);
console.log("---------------------------------------------------------------------");
 
let thirdnum=factorialOfNum(null);
console.log("---------------------------------------------------------------------");

let fourthnum=factorialOfNum(8);
console.log(`The factorial of 8 is ${fourthnum}`);
console.log("---------------------------------------------------------------------");

let fourthnum1=factorialOfNum(undefined);
console.log("---------------------------------------------------------------------");

let fourthnum2=factorialOfNum(9);
console.log(`The factorial of 9 is ${fourthnum2}`);
console.log("---------------------------------------------------------------------");

let fourthnum3=factorialOfNum(0);
console.log("---------------------------------------------------------------------");
