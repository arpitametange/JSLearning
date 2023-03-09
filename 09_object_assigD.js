let professor={
    firstName:'Avinash',
    lastName:"Gupta",
    city:"Amravati",
    id:23,
    number:8933849929,
    address:"samara nagar",
    state:"Maharashtra",
    country:"India",
    degrees:{
        engineering:"CSC",
        PHD:"Adv Computing"
    },
    certificates:["Hacker Rank Participation", "Certificate in IFE course","Certificate in Adv Programming"],
    totalDegrees:function () {
        return `1)Teacher's engineering  degree in  ${this.degrees.engineering} and phd in ${this.degrees.PHD}`
    },
    totalExperience:"14 years"
}
var result=professor.totalDegrees();
console.log(result);
console.log(`2)Total experience are ${professor.totalExperience}`);
console.log(professor);
professor.city="pune"
console.log(`3)City updated to  ${professor.city}`);
professor.id=25
console.log(`4)Id is updated to ${professor.id}`);
console.log(professor);
delete professor.number
console.log(`5)Number is deleted from the object`);
console.log(professor);

console.log("**********************Before adding new certificate in array****************************");
console.table( professor.certificates);
console.log("**********************6)After adding new certificate in array****************************");
professor.certificates.splice(professor.certificates.length,1,"Oracle Certified")
console.table( professor.certificates);
console.log(`Last element of the array-certificate is = ${professor.certificates[professor.certificates.length-1]}`);

