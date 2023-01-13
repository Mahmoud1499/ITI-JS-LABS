// console.log("Arrays Methods");


//==================== METHOD 1 =================================================
// -concat() :
// - Joins arrays and returns an array with the joined arrays
// ==============================================================================
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2); // output Array [Cecilie,Lone,Emil,Tobias,Linus]

//==================== METHOD 2 =================================================
// - toString() :
// - returns a string with array values separated by commas
// - does not change the original array.
// ==============================================================================
const fruits = ["Banana", "Orange", "Apple", "Mango"]; 
let text = fruits.toString() // output String "Banana,Orange,Apple,Mango"

//==================== METHOD 3 =================================================
// - valueOf() :  WHYYY????!!
// - method returns the array itself.
// - method does not change the original array
// ==============================================================================
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
const myArray = fruits2.valueOf(); // output Array ["Banana", "Orange", "Apple", "Mango"]

//==================== METHOD 4 =================================================
// - shift() :  
// - method returns selected elements in an array, as a new array.
// - method selects from a given start, up to a (not inclusive) given end
// - method does not change the original array.
// ==============================================================================
const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
fruits8.shift("Lemon","Pineapple"); //output Array [Orange,Apple,Mango]

//==================== METHOD 5 =================================================
// - unshift() :  
// - method adds new elements to the beginning of an array.
// - method overwrites the original array.
// ==============================================================================
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.unshift("Lemon","Pineapple"); //output Array [Lemon,Pineapple,Banana,Orange,Apple,Mango]

//==================== METHOD 6 =================================================
// - slice() :
// - method returns selected elements in an array, as a new array.
// - method selects from a given start, up to a (not inclusive) given end.
// - method does not change the original array.
// ==============================================================================
const fruits7 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus7 = fruits.slice(1, 3); //output Array [Orange,Lemon]

//==================== METHOD 7 =================================================
// - splice() :
// - method adds and/or removes array elements.s
// - method overwrites the original array.
// ==============================================================================
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
// At position 2, add 2 elements: 
fruits4.splice(2, 0, "Lemon", "Kiwi"); // output array [Banana,Orange,Lemon,Kiwi,Apple,Mango]

//==================== METHOD 8 =================================================
// - sort() :
// - sorts the elements of an array.
// - overwrites the original array.
// - sorts the elements as strings in alphabetical and ascending order.
// ==============================================================================
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
fruits5.sort(); // output Array [Apple,Banana,Mango,Orange]

//==================== METHOD 9 =================================================
// - reverse() :
// - method reverses the order of the elements in an array.
// -method overwrites the original array.
// ==============================================================================
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits6.reverse(); // output Array [Mango,Apple,Orange,Banana]

//==================== METHOD 10 =================================================
// - push() :
// - method adds new items to the end of an array.
// - method changes the length of the array.
// - method returns the new length.
// ==============================================================================
const fruits10 = ["Banana", "Orange", "Apple", "Mango"];
fruits10.push("Kiwi", "Lemon"); // output Array [Banana,Orange,Apple,Mango,Kiwi,Lemon]

//==================== METHOD 11 =================================================
// - pop() :
// - method removes (pops) the last element of an array.
// - method changes the original array.
// - method returns the removed element.
// ==============================================================================
const fruits11 = ["Banana", "Orange", "Apple", "Mango"];
fruits11.pop(); // output Mango

//==================== METHOD 12 =================================================
// - forEach ====> Report
// ==============================================================================

//==================== METHOD 13 =================================================
// - map ====> Report.
// ==============================================================================

