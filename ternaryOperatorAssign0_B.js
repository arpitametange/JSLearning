console.log('****First step****');
function maleMarriageEligibility(gender, age, boyName){
   var male=gender="Male" && age>=21? `Hey ${boyName} you are eligible for Marriage'`: `Hey ${boyName} you are not eligible for Marriage`;
   return male;
}
var returnmale=maleMarriageEligibility("Male",25,"Billgates");
console.log(returnmale);
returnmale= maleMarriageEligibility("Male",17,"Stew Jobs");
console.log(returnmale);



console.log('****Second step****');
function femaleMarriageEligibility(gender, age, girlName){
    var female=gender="Female" && age>=18? `Hey ${girlName} you are eligible for Marriage`:`Hey ${girlName} you are not eligible for Marriage`;
    return female;
}
var returnfemale=femaleMarriageEligibility("Female",16,"Jenifer");
console.log(returnfemale);
returnfemale= femaleMarriageEligibility("Female",27,"Malinda Gates");
console.log(returnfemale);








