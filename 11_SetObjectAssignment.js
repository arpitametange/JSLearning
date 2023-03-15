class Bank{
    constructor(bankName,location,accountNo,ifsc,interestRate){
        this.bankName=bankName
        this.location=location
        this.accountNo=accountNo
        this.ifsc=ifsc
        this.interestRate=interestRate
    }

}
console.log("*******************************Object created using class***********************************");
let axis_bank=new Bank("Axis bank","Pune","AXIS2343","Axis12334",12)
let sbi_bank=new Bank("SBI bank","Mumbai","SBIN6744","SBI4994",10)
let icici_bank=new Bank("ICICI bank","Pune","ICICE5535","ICIC92434",14)
let kotak_bank=new Bank("Kotak bank","Nagpur","KOTAK33455","KKBK13434",12)
let hdfc_bank=new Bank("hdfc bank","Kolhapur","HDFC2574","HDFC332434",17)
let punjab_bank=new Bank("Punjab bank","Nanded","PUNJAB19238","PUNB222",9)
console.log(axis_bank);
console.log(sbi_bank);
console.log(icici_bank);
console.log(kotak_bank);
console.log(hdfc_bank);
console.log(punjab_bank);

console.log("*******************************All object element added to the set***********************************");
let setOfObject=new Set()
setOfObject.add(axis_bank)
setOfObject.add(sbi_bank)
setOfObject.add(icici_bank)
setOfObject.add(kotak_bank)
setOfObject.add(hdfc_bank)
setOfObject.add(punjab_bank)
console.log(setOfObject);

console.log("*******************************Set traversing using for of loop***********************************");
for (const iterator of setOfObject) {
    console.log(`Bank name:${iterator.bankName}, Location:${iterator.location}`);
    
}