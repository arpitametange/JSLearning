///function with no argumets and no return value
function showFullName() {
  console.log('my full name is : arpita metange')
}
showFullName() //function call or invocation

// function with arguments and no return value
function showAge(age) {
  console.log('my age is :', age)
}
showAge(24)

//function with no arguments and  return value

function fullName() {
  var name = 'arpita metange'
  return name
}
var fName = fullName()
console.log(fName)

//function with argumets and return value

function sumOfNumbers(num1, num2, num3) {
  var sum = num1 + num2 + num3
  return sum
}
var sumResult = sumOfNumbers(10, 45, 79)
console.log(sumResult)

var num1 = 100
var num2 = 200

var str1 = 'Sweety'
var str2 = 'Cutey'

var name1 = 'Anvita'
var name2 = 'ankita'

function swapVariables(value1, value2) {
  console.log('Before Swap: ', value1, value2)
  var temp = value1
  value1 = value2
  value2 = temp
  console.log('After Swap: ', value1, value2)
  return 'Swapping variables successfully completed'
}
var swapResult = swapVariables(num1, num2) // Function call or Function invoke
console.log(swapResult)

var swapResult2 = swapVariables(str1, str2)
console.log(swapResult2)


