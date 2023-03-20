//Closure is when defined function inside function

// function outer() {
//     let inner=function () {
//         console.log("This is inner Function");
//     }
//     return 100;
// }
// const value=outer();
// console.log(value);


function outer() {
    console.log("This is outer function");
    let inner=function () {
        console.log("This is inner Function");
    }
    return inner;
}
 outer()();   //(this is shortcut to call function)

// const innerFun=outer();
// innerFun();

//this is to call function expression
// const innerFun= function (){
//     console.log("this is inner function");
// }
// innerFun();


function outer() {
    console.log("this is outer function");
let outerFunVariable=300;
    let inner=function(){
    console.log("this is inner function");
    let innerFunVariable=100;
    console.log(innerFunVariable);
    console.log(outerFunVariable);
}
return inner;
}
//in above outer function we can access part of outer function anywhere inside outer function
