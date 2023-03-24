class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_anil= new Employee(22,"Anil","IT",50000,'TCS')
const emp_radha= new Employee(33,"Radha","HR",74000,"Wipro")
const emp_rishi= new Employee(55,"Rishi","Finance",47000,"TCS")
const emp_sonali= new Employee(66,"Sonali","Finance",45000,"Infy")
const emp_monika= new Employee(77,"Monika","IT",40000,"Wipro")
const emp_viny= new Employee(88,"Vinayaka","IT", 75000, "TCS")
const emp_mahi= new Employee(99,"Mahesh","HR",85000,"Infy")


let array_employees=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi]
console.log("***************************All employees from the 'TCS'****************************");
let empTcs=array_employees.filter((element)=> {
    if (element.emp_company=="TCS") {
        console.log(`Company Name: ${element.emp_company}, Employee Name: ${element.emp_name}`);  
    } 
})
console.log("*************************Average salary of employee from company Wipro****************************");
let average2;
let avrg=array_employees.filter(element=> {
    return element.emp_company=="Wipro"
})

let reduce=avrg.reduce((element,value)=>{
     return element.emp_salary+value.emp_salary
})
average2=reduce/avrg.length
console.log(average2);

console.log("****************Average salary of employee from companies Wipro and Infy ********************");
let average;
let newarray=array_employees.filter((element)=>{
    return element.emp_company=="Wipro" || element.emp_company=="Infy"
})
let sum=0
newarray.forEach((element)=>{
   return sum=sum+element.emp_salary
})

average=sum/newarray.length
console.log(average);