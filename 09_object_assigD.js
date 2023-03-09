let professor={
    firstName:'Avinash',
    lastName:"Gupta",
    city:"Amravati",
    id:23,
    number:8933849929,
    address:"samara nagar",
    state:"Maharashtra",
    country:"India",  
}
console.log("***********************Properties added to the object ******************************");
console.log(professor);
console.log("***********************Nested object 'degrees' added to the object******************************");
professor. degrees={
    engineering:"CSC",
    PHD:"Adv Computing"
}
console.log(professor.degrees);
console.log("***********************array certificate added to the object ******************************");
professor. certificates=["Hacker Rank Participation", "Certificate in IFE course","Certificate in Adv Programming"]
console.log(professor.certificates);

console.log("***********************Function added to the object ******************************");

professor. totalDegrees=function () {
    return `Teacher's engineering  degree in  ${this.degrees.engineering} and phd in ${this.degrees.PHD}`
}
var result=professor.totalDegrees();
console.log(result);
professor.totalExperience=14
console.log(`Total experience are ${professor.totalExperience}`);
professor.city="pune"
console.log(`City updated to  ${professor.city}`);
professor.id=25
console.log(`Id is updated to ${professor.id}`);
console.log(professor);
delete professor.number
console.log(`Number is deleted from the object`);
console.log(professor);
console.log("**********************Before adding new certificate in array****************************");
console.log( professor.certificates);
console.log("**********************After adding new certificate in array****************************");
professor.certificates.push("Oracle Certified")
console.log( professor.certificates);
console.log(`Last element of the array-certificate is = ${professor.certificates[professor.certificates.length-1]}`);

