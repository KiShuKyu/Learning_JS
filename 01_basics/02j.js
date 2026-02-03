// ****************************** DataTypes ******************************
"use strict"; // treat all JS code as newer version
// which has classes modules arrow functions etc

// alert("hellow") we are using node js not browser so no output is expected
// null is an object whereas undefined is a type of undefined

// ****************************** type conversions ******************************

// let score = "33"
// now if 
// let score = "33abc"

// // "33" => 

// console.log(typeof score);
// console.log(typeof (score))

// let scoreInNumber = Number(score)
// console.log(typeof (scoreInNumber))
// console.log(scoreInNumber) // this will give NaN not a number  


// ****************************** Operations ******************************
// let value = 3
// let negValue = -value
// console.log(negValue);

// console.log("1"+2);
// console.log(1+'2');
// console.log("1"+2+2);
// console.log(1+2+'2');

// console.log(+true);
// console.log(+'')

// let num1, num2, num3

// num1 = num2 = num3 = 2+2

// console.log(num1)
// console.log(num2)
// console.log(num3)

// let gameCounter = 100
// gameCounter++;
// console.log(gameCounter)

// let x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`);
// // Expected output: "x:4, y:3"

// let a = 3;
// const b = ++a;

// console.log(`a:${a}, b:${b}`);
// // Expected output: "a:4, b:4"

// ****************************** Comparison ******************************
// console.log('2' > '1');

// console.log(null > 0)
// console.log(null >= 0) // true because of value conversion problem as it converts null value to a number and treting it as 0
// console.log(null == 0)

// console.log(undefined >= 0); // false for any case 

// strict check === 
// console.log("2" === 2)

// ****************************** Data Types ******************************
// Primitive data types are call by value
// 7 types : String, number, bool, null, undefined, Symbol, BigInt

// let id = Symbol('123')
// let anotherId = Symbol('123')

// console.log(id === anotherId)
// if let BigNumber = 113234234535363n n = big int bn jaega 

// Refrence type non primitive: 
// Arrays, Object, Functions 

// const Heroes = ["Batman", "Captian America", "Spiderman"];
// let myObj = {
//     name: "Krishna",
//     age: 19,
// }

// const myFunction = function(){
//     console.log("Hello World");
// }

// ****************************** Stack and Heap ******************************
// Memory Type :- Stack (Primitive) / Heap (non primitive) original value ka reference milta h 

// let myName = "KrishnaZGoat"
// let realname  = myName  
// realname = "Krishna Dhiman"
// console.log(realname);
// console.log(myName)

// let userOne = {
//     email:"krishna@gmail.com",
//     id: "1235",
// }

// let userTwo = userOne 

// userOne.email= "krishnahdiman8527@gmail.com"
// console.log(userTwo);
// console.log(userOne);







