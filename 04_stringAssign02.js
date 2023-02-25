console.log('****************This is the first step**************')
function stringHandsOn() {
  console.log('    Hey you are doing good,keep it up   ')
  console.log('****************This is the second step**************')
  var lengthstring = '    Hey you are doing good,keep it up   '
  console.log('length of string is :', lengthstring.length)
  console.log('****************This is the third step**************')
  console.log('After removing leading and trailing extra spaces')
  var trimstr = lengthstring.trim()
  console.log(trimstr)
  console.log('****************This is the fourth step**************')
  console.log(
    'Length of the spaces removed :',
    lengthstring.length - trimstr.length,
  )

  console.log('****************This is the fifth step**************')
  console.log(
    'first and last character ',
    trimstr.charAt(0),
    trimstr.charAt(trimstr.length - 1),
  )

  console.log('****************This is the sixth step**************')
  var totalwords = trimstr.split(' ')
  console.log('Total words in a string is:', totalwords.length)

  console.log('****************This is the seventh step**************')
  var indexOfGood = trimstr.indexOf('good')
  console.log('This is the index of good:', indexOfGood)

  console.log('****************This is the eigth step**************')
  var sub = trimstr.substring(22)
  console.log('using substring method: ', sub)
  var slicestr = trimstr.slice(22)
  console.log('using slice method: ', slicestr)

  console.log('****************This is the ninth step**************')
  var endswith = trimstr.endsWith('up')
  console.log('string ends with up:', endswith)

  console.log('****************This is the tenth step**************')

  var startswith = trimstr.startsWith('Hey')
  console.log('string starts with hey:', startswith)
}
stringHandsOn()
