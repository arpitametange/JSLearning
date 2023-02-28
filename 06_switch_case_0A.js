function monthOfYear(monthNumber) {
  switch (monthNumber) {
    case 1:
      console.log(`${monthNumber}st month is the January`)
      break
    case 2:
      console.log(`${monthNumber}nd month is the February`)
      break
    case 3:
      console.log(`${monthNumber}rd month is the March`)
      break
    case 4:
      console.log(`${monthNumber}th month is the April`)
      break
    case 5:
      console.log(`${monthNumber}th month is the May`)
      break
    case 6:
      console.log(`${monthNumber}th month is the June`)
      break
    case 7:
      console.log(`${monthNumber}th month is the July`)
      break
    case 8:
      console.log(`${monthNumber}th month is the August`)
      break
    case 9:
      console.log(`${monthNumber}th month is the september`)
      break
    case 10:
      console.log(`${monthNumber}th month is the October `)
      break
    case 11:
      console.log(`${monthNumber}th month is the November`)
      break
    case 12:
      console.log(`${monthNumber}th month is the December`)
      break
    default:
        console.log(`Invalid month number : ${monthNumber}`);
      break
  }

}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);

