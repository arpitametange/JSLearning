console.log(`start`);
var num=10;
if(num>0){
    console.log(`inside if`);
    console.log(`number is positive ${num}`);
}
console.log(`End`);

var ageForvote=19;
if (ageForvote >=18){
    console.log('you are eligible for voting');
    console.log(`Age is : ${ageForvote}`);
}
console.log(`End of next if block`);

function checkEvenOdd(num){
    if (num%2==0){
        return 'EVEN';
    }
    if (num%2!=0){
        return 'ODD';
    }
}
var result=checkEvenOdd(45)
console.log(`Given number 45 is ${result}`);

var num1=5;
if (num1>0) {
    console.log(`number ${num1} is positive`);
    
} else {
    console.log(`number ${num1} is negative`);
    
}

function maleMarriageEligibility(gender,age,boyName){
    if (gender=="Male" && age>=21) {
        console.log('You are eligible');
        
    } else {
        console.log('You are not eligible');

        
    }
}
maleMarriageEligibility('Male', 25,'Billgates')