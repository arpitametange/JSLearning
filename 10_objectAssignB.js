const bankSbi={
    bankName:"SBI Bank",
    ifscCode:1233,
    accountNo:9309898,
    location:"Pune"
}
console.log("*************************bankSbi object created using literals **********************");
console.log(` Bank Name: ${bankSbi.bankName}, IFSC Code ${bankSbi.ifscCode}, Account No.:${bankSbi.accountNo}, Location:${bankSbi.location}`);

console.log("*************************bankLocation object created using literals **********************");
const bankLocation={
    street:"Kothrud",
    city:"pune",
    pinCode:2344
}
console.log(`Street: ${bankLocation.street}, City: ${bankLocation.city}, Pincode: ${bankLocation.pinCode}`);

console.log("*************************Clonning of bankSbi and bankLocation objects using Object.assign() **********************");

let clonedUsingAssign=Object.assign({},bankSbi,bankLocation)
console.log(`Bank Name:${clonedUsingAssign.bankName}, IFSC Code:${clonedUsingAssign.ifscCode}, Account no:${clonedUsingAssign.accountNo}, Location:${clonedUsingAssign.location} `);

let clonedUsingAssignLocation=Object.assign({},bankLocation)
console.log(`Street:${clonedUsingAssignLocation.street},City:${clonedUsingAssignLocation.city}, Pin code:${clonedUsingAssignLocation.pinCode}`);

console.log("*************************Clonning of bankSbi and bankLocation objects using Spred Operator**********************");
let cloneUsingSpred={...bankSbi}
console.log(`Bank Name:${cloneUsingSpred.bankName}, IFSC Code:${cloneUsingSpred.ifscCode}, Account no:${cloneUsingSpred.accountNo}, Location:${cloneUsingSpred.location}`);

let cloneUsingSpredBankLocation={...bankLocation}
console.log(`Street:${cloneUsingSpredBankLocation.street},City:${cloneUsingSpredBankLocation.city}, Pin code:${cloneUsingSpredBankLocation.pinCode}`);


console.log("*************************rateOfInterest object created using literals **********************");

const rateOfInterest={
    homeLoanInterest:10,
    personalLoanInterest:23,
    dueInterest:12
}
console.log(`Home loan interest:${rateOfInterest.homeLoanInterest}, Personal loan interest:${rateOfInterest.personalLoanInterest}, Due interest:${rateOfInterest.dueInterest}`);

console.log("*************************Merge bankSbi,bankLocation and rateOfInterest into new object  **********************");
let sbiDetails={...bankSbi,...bankLocation,...rateOfInterest}
console.table(sbiDetails);
console.log("*************************Traverse sbiDetails object **********************");
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`${key}: ${element}`);
        
    }
}