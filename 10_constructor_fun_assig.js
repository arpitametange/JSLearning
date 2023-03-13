function Bank(bankName,location,ifsCode,branchCode){
          this.bankName=bankName;
          this.location=location;
          this.ifsCode=ifsCode;
          this.branchCode=branchCode
}
console.log("*******************Object creation with the help of constructor function **********************");
const yesBank=new Bank("Yes Bank","Pune","YESB1234","YES4394")
console.log(` Bank Name: ${yesBank.bankName}, Location: ${yesBank.location} , IFSC Code: ${yesBank.ifsCode}, Branch code: ${yesBank.branchCode}`);

const sbiBank=new Bank("SBI Bank","Mumbai","SBIN6744","SBI4994")
console.log(` Bank Name: ${sbiBank.bankName}, Location: ${sbiBank.location} , IFSC Code: ${sbiBank.ifsCode}, Branch code: ${sbiBank.branchCode}`);

const mahBank=new Bank("Maharashtra Bank","Nagpur","MAHB34234","MAH6394")
console.log(` Bank Name: ${mahBank.bankName}, Location: ${mahBank.location} , IFSC Code: ${mahBank.ifsCode}, Branch code: ${mahBank.branchCode}`);

const axisBank=new Bank("AXIS Bank","Hydrabad","UTIB9234","UTI3394")
console.log(` Bank Name: ${axisBank.bankName}, Location: ${axisBank.location} , IFSC Code: ${axisBank.ifsCode}, Branch code: ${axisBank.branchCode}`);
console.log("");
console.log("*******************Adding the data memeber to object ******************************************");

Bank.prototype.openTime="9 AM IST"
Bank.prototype.closeTime="6 PM IST"
console.log(`Open time of SBI Bank: ${sbiBank.openTime} and close time of SBI Bank: ${sbiBank.closeTime} `);
console.log(`Open time of Axis Bank: ${axisBank.openTime} and close time of AXIS Bank: ${axisBank.closeTime}`);
console.log(`Bank Name: ${yesBank.bankName}, Branch code: ${yesBank.branchCode}, open time of Yes Bank: ${yesBank.openTime}`);
