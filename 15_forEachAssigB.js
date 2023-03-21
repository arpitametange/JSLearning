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

console.log("**************************TCS employees details***************************");

let array_employees=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi]

array_employees.forEach(function(element) {
    if(element.emp_company=="TCS"){
    console.log(`Employee Name: ${element.emp_name},Company Name: ${element.emp_company}`);
    }
});


console.log("******************Employees with salary greater than or equal to 50000***************************");
array_employees.forEach(function(element){
if(element.emp_salary>=50000){
    console.log(`Employee id: ${element.emp_id}, Employee Name: ${element.emp_name}, Department: ${element.emp_dept}, Employee's salary: ${element.emp_salary}, Company Name: ${element.emp_company}`);}
});


console.log("**************************Sum of all employees salary***************************");
let sum=0
array_employees.forEach(function(element){
    sum=sum+element.emp_salary

})
console.log(`Sum of all employees salary: ${sum}`);


console.log("**************************Average salary*********************************");
let average;
array_employees.forEach(function(element,index,array){
 let numberOfemp=array.length
 average=sum/numberOfemp
});
console.log(`Total salary average :${average}`);


console.log("***************IT and HR department employees whose salary greater than or equal to 75000************");
array_employees.forEach(function(element){
if((element.emp_dept=="IT" || element.emp_dept=="HR") && element.emp_salary>=75000){
    console.log(`Employee id: ${element.emp_id}, Employee Name: ${element.emp_name}, Department: ${element.emp_dept}, Employee's salary: ${element.emp_salary}, Company Name: ${element.emp_company}`);}

})