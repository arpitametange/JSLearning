console.log("************************Arrow function with no args and no return value*****************************");
let show= () => console.log("Good Morning, Today is Monday");
show()



console.log("***************************Arrow function with arguments and no return value***********************");
let argumentThree= (n1,n2,n3=1)=> n1*n2*n3
console.log(`The multiplication of 5,5,2 is ${argumentThree(5,5,2)}`);
console.log(`The multiplication of 10,4 is ${argumentThree(10,4)}`);

console.log("***************************Arrow function with five arguments and return value*******************");
let argumentsFive=(n1,n2,n3,n4,n5)=> {
   return n1+n2+n3+n4+n5
}
let sum=argumentsFive(100,100,200,349,756)
console.log(`The adition of 100,100,200,349,756 is ${sum}`);
let result=argumentsFive("I am", " learning", " ES6", ' features', " in depth")
console.log(`The concatenation of five values = ${result}`);




