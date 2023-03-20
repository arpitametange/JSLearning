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
console.log("**************** 1) Employees working in TCS*************");
for (let index of array_employees) {
    if (index.emp_company=='TCS') {
        console.log(`Employee name: ${index.emp_name}, Company name: ${index.emp_company}`);
    }
}

console.log("**************** 2) Finance Department's Employees*************");

for (let index of array_employees) {
    if (index.emp_dept=="Finance") {
        console.log(`Department : ${index.emp_dept}, Employee name: ${index.emp_name}`);
        
    }
    
}

console.log("**************** 3) Employees whose name start with 'R' *************");
for (let index of array_employees) {
    if (index.emp_name.startsWith("R")) {
        console.log(index);
    }
}

console.log("**************** 4) Employees whose salary greater than 75000 *************");
for (let index of array_employees) {
    if (index.emp_salary>75000) {
        console.log(`Employee name: ${index.emp_name}, Company name: ${index.emp_company}, Salary: ${index.emp_salary}`);
    }
    
}

console.log("**************** 5) Employees whose salary greater than  equal to 50000 *************");
for (let index of array_employees) {
    if (index.emp_salary>=50000 && index.emp_dept=="IT") {
        console.log(index);
    }
}

console.log("**************** 6) Employees from 'Infy' *************");
for (let index of array_employees) {
    if (index.emp_company=="Infy") {
        console.log(index);
    }
    
}


