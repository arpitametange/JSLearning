console.log('**********This is the first step**************');
function fun1(){
    console.log('Function1 with no argumets and no return value');
}
fun1()
function fun2(){
    console.log('Function2 with no argumetns and no return value');
}
fun2()

console.log('**********This is the second step**************');
function personalDetails(firstName,lastName,collegeName){
     console.log('Name:',firstName,', Last Name:',lastName, ', College Name :', collegeName );
    
}
personalDetails("Arpita","Metange","SGBAU");

console.log('**********This is the Third step**************');
function swapValuesDude(value1,value2){
       console.log('Before swap',value1,value2);
       var temp=value1;
       value1=value2;
       value2=temp;
       console.log('After swap',value1,value2);
}
swapValuesDude('Virat', 'Anushka');
swapValuesDude('1000','2000');


console.log('**********This is the Third step**************');
function addThreeValues(value1,value2,value3){
    var sum=value1+value2+value3;
    return sum;
}
var result=addThreeValues(10.23,600,40);
console.log(result);
var result=addThreeValues('Hello','Good','Morning');
console.log(result);