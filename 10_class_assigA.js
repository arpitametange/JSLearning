console.log(
  '**********************************CLASS FOR VEHICLE***********************',
)
class Vehicle {
  constructor(carName, ownerName, model, color, registrationNo) {
    this.carName = carName
    this.ownerName = ownerName
    this.model = model
    this.color = color
    this.registrationNo = registrationNo
  }
}
console.log(
  '************************Class vehicle with constructor***********************',
)
let vehicleFirst = new Vehicle(
  'TOYOTA',
  'Shrikant Bhosale',
  'Hyundai i20',
  'red',
  23123,
)
console.log(vehicleFirst)
let vehicleSecond = new Vehicle(
  'Maruti Suzuki',
  'Ankit Sharma',
  'Ignis Alpha',
  'white',
  99893,
)
console.log(vehicleSecond)
let vehicleThird = new Vehicle(
  'Mahindra',
  'Sharavil Deshmukh',
  'Thar',
  'black',
  67854,
)
console.log(vehicleThird)
let vehicleForth = new Vehicle(
  'TOYOTA',
  'Aimesh Deshpande',
  'Hyundai Tucson',
  'green',
  845894,
)
console.log(vehicleForth)
let vehicleFifth = new Vehicle(
  'Mahindra ',
  'Jay Deshpute',
  'XUV500',
  'grey',
  834492,
)
console.log(vehicleFifth)
console.log(
  "**************Object add into the array and display with help of 'for of'****************",
)
let arrayOfVehicles = [
  vehicleFirst,
  vehicleSecond,
  vehicleThird,
  vehicleForth,
  vehicleFifth,
]
for (const iterator of arrayOfVehicles) {
  console.log(
    `Company name :${iterator.carName},Owner name:${iterator.ownerName},Model:${iterator.model},Color:${iterator.color},Registration no:${iterator.registrationNo}`,
  )
}

console.log(
  '**********************************CLASS FOR COLLEGE***********************************',
)

class College {
  constructor(
    collegeName,
    teachers,
    department,
    address,
    city,
    state,
    country,
  ) {
    this.collegeName = collegeName
    this.teachers = teachers
    this.department = department
    this.address = address
    this.city = city
    this.state = state
    this.country = country
  }
}
let clgFirst = new College(
  'Vidyabharati college',
  65,
  'Chemistry',
  'Camp road',
  'Amravati',
  'Maharashtra',
  'India',
)
console.log(clgFirst)
let clgSecond = new College(
  'Sipna college of Engineering',
  60,
  'CSC',
  'Badnera road',
  'Amravati',
  'Maharashtra',
  'India',
)
console.log(clgSecond)
let clgThird = new College(
  'Prof Ram Meghe college of Engineering ',
  45,
  'Civil engineering ',
  'Badnera road',
  'Amravati',
  'Maharashtra',
  'India',
)
console.log(clgThird)
let clgForth = new College(
  ' Shri Shivaji Science college',
  45,
  'Geology',
  'Morshi road',
  'Amravati',
  'Maharashtra',
  'India',
)
console.log(clgForth)

console.log(
  "***********************Traverse with the help of 'for in'**************************",
)
function traverseObject(arg) {
  for (const key in arg) {
    const element = arg[key]
    console.log(`${key}: ${element}`)
  }
  
}
traverseObject(clgFirst)
console.log('*****************************************************')

traverseObject(clgSecond)
console.log('*****************************************************')
traverseObject(clgThird)

console.log('*****************************************************')
traverseObject(clgForth)
console.log(
  '*****************************PRIME NUMBERS**************************',
)

console.log('The given number is 11')
function name1(num) {
  for (let index = 2; index < num; index++) {
    if (num % index==0) {
    return `11 is not a prime number`
    
  }
  else{
    return `${num}  prime no`;
  }
  }
}

var r=name1(11)
console.log(r);

