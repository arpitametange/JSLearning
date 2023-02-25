console.log('****First step****');
function maleMarriageEligibility(gender, age, boyName){
   if (gender="Male" && age>=21) {
       var male=`Hey ${boyName} you are eligible for Marriage`;
   } else {
    var male=`Hey ${boyName} you are not eligible for Marriage`;
   } 
   return male;
}
var returnmale=maleMarriageEligibility("Male",25,"Billgates");
console.log(returnmale);
returnmale= maleMarriageEligibility("Male",17,"Stew Jobs");
console.log(returnmale);


console.log('****Second step****');
function femaleMarriageEligibility(gender, age, girlName){
    if (gender="Female" && age>=18) {
        var female= `Hey ${girlName} you are eligible for Marriage`;
    } else {
        var female=`Hey ${girlName} you are not eligible for Marriage`;
    }
    return female;
}
var returnfemale=femaleMarriageEligibility("Female",16,"Jenifer");
console.log(returnfemale);
returnfemale= femaleMarriageEligibility("Female",27,"Malinda Gates");
console.log(returnfemale);