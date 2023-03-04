if (true) {
    var some=89  
}

console.log(some);  //we can access it from outside the if block because  var has function scope


if (true) {
    let some=89 ;
    const age=23; 
   
}
console.log(some); 
console.log(age); 
  
// we cannot access the let and const outside the if/for/while/do while/switch block because they have the block scope


function nameFunction(num) {
    if (true) {
        var a=34;
       
    }

    console.log(a);
}
nameFunction(78)  //we can access it from outside the if block but only inside the function block because  var has function scope


function nameFunction(num) {
    if (true) {
        let  a=34;
        console.log(a); //we only access it inside the if block.
    }

    console.log(a);    //we cannot access the let outside the if block
}
nameFunction(78) 

// we cannot access the let and const outside the if/for/while/do while/switch block because they have the block scope. 





if (true) {
    let v='arpita'
    if (true) {
        console.log(v);   
        //we can access let because this is inside the if block , let have block scope
    }
}
