let sbiBank={
    bankName:"State bank of india",
    location:"Pune",
    accountNo:93439,
    ifsc:343343434,
    interestRate:12,
    showDetails:function () {
        console.log(`1)Bank name: ${sbiBank.bankName} 2)Location: ${sbiBank.location} 3)Account no: ${sbiBank.accountNo} 4)ifsc code: ${sbiBank.ifsc} 5)Interest Rate: ${sbiBank.interestRate}  `);
    }
}
sbiBank.showDetails()

let axisBank={
    bankName:"Axis bank",
    location: "Nagpur",
    accountNo:23489,
    ifsc:98980112,
    interestRate:10,
    showDetails:function () {
    console.log(`1)Bank name: ${axisBank.bankName} 2)Location: ${axisBank.location} 3)Account no: ${axisBank.accountNo} 4)ifsc code: ${axisBank.ifsc} 5)Interest Rate: ${axisBank.interestRate}  `);
}
}
axisBank.showDetails()

let hdfcBank={
    bankName:"hdfc bank",
    location:"Nanded",
    accountNo:2389892,
    ifsc:3403903232,
    interestRate:9,
    showDetails:function () {
        console.log(`1)Bank name: ${hdfcBank.bankName} 2)Location: ${hdfcBank.location} 3)Account no: ${hdfcBank.accountNo} 4)ifsc code: ${hdfcBank.ifsc} 5)Interest Rate: ${hdfcBank.interestRate} `);
    }
}
hdfcBank.showDetails()

let yesBank={
    bankName:"Yes bank",
    location:"mumbai",
    accountNo:03030,
    ifsc:21243232,
    interestRate:12,
    showDetails:function () {
         console.log(`1)Bank name: ${yesBank.bankName} 2)Location: ${yesBank.location} 3)Account no: ${yesBank.accountNo} 4)ifsc code: ${yesBank.ifsc} 5)Interest Rate: ${yesBank.interestRate} `);
        
    }
}
yesBank.showDetails()