let score = 33

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber)


// "33" => 33
// "33abc"=> NaN
// ture => 1; false => 0

let isLoggedIn = "captain"

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "captain" => true

// operations //


let value = 3
let negValue = -value
// console.log(negValue)

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");


// console.log(+true);

let gameCounter = 100

gameCounter++ //prefix and postfix in JS

// console.log(gameCounter);

// console.log(null > 0)
// console.log(null >= 0)
// console.log(null == 0)

// === strict check, also check datatype 

// console.log("2" === 2);


//Primitive datatype

// 7 types : String, Number, Boolean, Null, undefined, symbol, bigint


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// Reference (non premitive datatype)

// Array, Objects, Functions