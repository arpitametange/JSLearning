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

let mapEmployees=new Map()
mapEmployees.set(emp_anil.emp_id,emp_anil)
mapEmployees.set(emp_radha.emp_id,emp_radha)
mapEmployees.set(emp_rishi.emp_id,emp_rishi)
mapEmployees.set(emp_sonali.emp_id,emp_sonali)
mapEmployees.set(emp_monika.emp_id,emp_monika)
mapEmployees.set(emp_viny.emp_id,emp_viny)
mapEmployees.set(emp_mahi.emp_id,emp_mahi)

console.log("***********************Log Employees Id and details with help of for each************************");
mapEmployees.forEach(function(element){
    console.log(`${element.emp_id} ===> Name: ${element.emp_name}, Department: ${element.emp_dept}, Company: ${element.emp_company}, Salary: ${element.emp_salary}`);
})

