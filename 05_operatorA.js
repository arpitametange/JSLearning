console.log(`*****This is the first step*****`)
function sqareOfWordLength(word) {
  console.log(`Word length is ${word.length}`)
  return word.length ** 2
}
console.log(`//Length of javascript//`)
var wordlength = sqareOfWordLength('JavaScript')
console.log(`The square of string Javascript is ${wordlength} `)
console.log(`//Length of Google//`)
var wordGoogle = sqareOfWordLength('Google Chrome')
console.log(`The square of string  google is ${wordGoogle}`)
console.log(`//Length of DeveloperSmart//`)
var wordDeveloperSmart = sqareOfWordLength('Developer Smart')
console.log(`The square of string  developerSmart is ${wordDeveloperSmart}`)

console.log(`*****This is the second step*****`)
function str() {
  console.log(`The string is : I am Angular Developer`)
}
str()
var len = `I am Angular Developer`
var lengthstr = len.length
console.log(`Length of sting = ${lengthstr}`)
var spl = len.split(' ')
console.log(`Length of total words in string = ${spl.length}`)
var div = lengthstr / spl.length
console.log(`String length divided by total number of words in string = ${div}`)
var multiplystr = lengthstr * spl.length
console.log(
  `Multiplication of string length and total words available = ${multiplystr}`,
)
