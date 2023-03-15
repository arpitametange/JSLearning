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

console.log("*******************************Map: key is accountNo and value is object***********************************");
let newmap=new Map()
newmap.set(axis_bank.accountNo,axis_bank)
newmap.set(sbi_bank.accountNo,sbi_bank)
newmap.set(icici_bank.accountNo,icici_bank)
newmap.set(kotak_bank.accountNo,kotak_bank)
newmap.set(hdfc_bank.accountNo,hdfc_bank)
newmap.set(punjab_bank.accountNo,punjab_bank)
console.log(newmap);

console.log("*******************************Traversing Map***********************************");
let keys=newmap.keys()
for (const iterator of keys) {
    const element=newmap.get(iterator)
    console.log(`Bank name:${element.bankName}, Account No:${element.accountNo}, Interest Rate:${element.interestRate}`);
}