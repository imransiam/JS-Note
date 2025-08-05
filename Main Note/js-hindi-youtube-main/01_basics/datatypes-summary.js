//  Primitive 
//* Primitive data types are immutable and are passed by value.
//* They are stored directly in the variable and not in a reference.
//* If you change the value of a primitive data type, it creates a new value in memory.

//  6 types : String, Number, Boolean, null, undefined, Symbol
//* BigInt is also a primitive data type but it is not included in the above list.
//* BigInt is used to represent integers with arbitrary precision.
//-  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')//? unique identifier, used to create unique keys for objects
//* Symbols are immutable and unique, they are not converted to string or number
//* They are used to create private properties in objects
//* Symbols can be used as keys in objects, but they are not enumerable
const anotherId = Symbol('123')

console.log(id === anotherId);//? false because they are unique symbols

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId); //? symbol
console.log(typeof bigNumber); //? bigint
console.log(typeof score); //? number
console.log(typeof scoreValue); //? number
console.log(typeof isLoggedIn); //? boolean
console.log(typeof outsideTemp); //? object (null is considered an object in JavaScript)
console.log(typeof userEmail); //? undefined (because it is not assigned any value)
console.log(typeof heros); //? object (arrays are a type of object in JavaScript)
console.log(typeof myObj); //? object
console.log(typeof myFunction); //? function (functions are also objects in JavaScript)



// https://262.ecma-international.org/5.1/#sec-11.4.3