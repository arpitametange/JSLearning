const arrayNums=[20,3,4,56,90,400,49]
console.log(`Given Array: ${arrayNums}`);
console.log("****************************Shallow clonning on array*****************************************");
let clonedArray=arrayNums
console.log(`Clonned array : ${clonedArray}`);
clonedArray.push(55,66)
console.log("*************Updated cloned array with values = 55,66 ***************");
console.log(`Original array : ${arrayNums}, Cloned array: ${clonedArray} `);
console.log("****************************Deep clonning on array*****************************************");
let deepCloned=[...arrayNums]
console.log(`Deep clone array:${deepCloned}`);
arrayNums.push(10,25)
console.log("*************Updated original array with values = 10,25 ***************");
console.log(`Original array: ${arrayNums}, cloned array: ${deepCloned}`);
console.log("****************************New array created*****************************************");
let arrayEven=[2,30,14,8]
console.log(`arrayEven : ${arrayEven}`);
let mergedArray=[...arrayEven,...arrayNums]
console.log("**************arrayNums and arrayEven merged*******************************************");
console.log(`Merged array : ${mergedArray}`);
console.log("****************************employee_info  object Created***********************************");
const employee_info={
    emp_id:27,
    emp_name:"John Doe",
    salary:{
        july_month:"40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR"
    },
    address:{
        locality:{
            colony:"OM Vrindavan Society",
            street:"Maharashtra",    
        },
        city:"Mumbai",
        state:'Maharashtra',
        country:"India",08
        mobiles:["+91 8600 34 56 88 " , " 1800- 4567 32 ", " +91- 9096 5678 77"]
    }
}
console.log(employee_info);
console.log("******************************Employee details********************************");
console.log(`Address: Locality:${employee_info.address.locality.colony},${employee_info.address.locality.street}, City:${employee_info.address.city},State: ${employee_info.address.state}, Country: ${employee_info.address.country}`);
console.log(`Mobile numbers: ${employee_info.address.mobiles}`);
console.log("******************************Deep clone using JSON.stringfy()********************************");
let deepClonedEmp=JSON.parse(JSON.stringify(employee_info))
deepClonedEmp.salary.july_month="80k"
console.log(`Updated property of salary: ${deepClonedEmp.salary.july_month}`);
employee_info.address.country="United Kingdom"
console.log(`Updated the property "country" on original object - country:${employee_info.address.country}`);

