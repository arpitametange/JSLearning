const arraySeasonalFruits=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`******************  List of seasonal fruits - ${arraySeasonalFruits}    *************************`);
console.log("***************First step = log the first and last element to the console**************");
let arrayFirstElement=arraySeasonalFruits[0];
let arrayLastElement=arraySeasonalFruits[arraySeasonalFruits.length-1];
console.log(`First element in the array = ${arrayFirstElement}`) 
console.log(`Last elment in the array = ${arrayLastElement} `);
console.log("**********************Second step = Add element to the array***************************");
let arrayAddElementFirstPosition=arraySeasonalFruits.unshift('Papaya')
console.log(`"Papaya" added to the array = ${arraySeasonalFruits}`);

console.log("***********************Third step = Remove the element********************************");
let arrayremoveElement=arraySeasonalFruits.splice(4,1)
console.log(`"Mango" removed from the array = ${arraySeasonalFruits}`);

console.log("**********************Fourth step = Add element 'Pineapple' at the last position***************************");
let arrayAddElementAtLastPosition=arraySeasonalFruits.push('Pineapple')
console.log(`"pineapple added to the last position = ${arraySeasonalFruits} `);

console.log("**********************Fifth step = Insert an element'Dragon Fruit' before 'water Melon'***************************");
let arrayInsertElement=arraySeasonalFruits.splice(4,0,'Dragon Fruit')
console.log(`After inserting the element "Dragon Fruit" = ${arraySeasonalFruits}`);


console.log("**********************Sixth step = Replace an element 'Orange' with 'Kiwi'**************************");
let arrayReplace=arraySeasonalFruits.splice(2,1,'Kiwi');
console.log(`After replacing 'Orange' with 'Kiwi' = ${arraySeasonalFruits} `);


console.log("**********************Seventh step =Log the element starting from index 1 to 4 **************************");
console.log(arraySeasonalFruits);
let arraylogelement=arraySeasonalFruits.slice(1,5)
console.log(`Element from index 1 to 4  = ${arraylogelement}`);

console.log("**********************Eighth step = Select the last three element and log on console**************************");
console.log(arraySeasonalFruits);
let arrayLastlog=arraySeasonalFruits.slice(arraySeasonalFruits.length-3)
console.log(`Last three elements in the array = ${arrayLastlog}`);
