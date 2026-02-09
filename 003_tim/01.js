// ****************************** UserInput ******************************
// npm init -y will create a package.json file which will mangae the different dependencies and their versions 
// now npm install prompt-sync it will create node_modules file and package-lock.json file 

// const prompt = require("prompt-sync")()

// const v  = prompt("Enter your name ") 
// console.log(v)
// undefiend = I will assign value later on
// null assigned value to nothing

// var is a function scope  
// let and const are block scope 

// js has build in type conversion


// if else statements 
// if (false) {
//     console.log("Hellow");
// } else if (false) {
//     console.log("crazy");
// } else {
//     console.log("yooo");
//     console.log(" ");
// }
// console.log("yo");


// ternary condityion 
// const cond = 2 < 3 ? "okay cool" : "no"
// console.log(cond);

// switch statements 

// const value = 8

// switch (value) {
//     case 3: 
//         console.log("3 is cool")
//         break;
//     case 4:
//         console.log("4 is cool")
//         break;
//     case 5: 
//         console.log("5 is cool")
//         break;
//     default:
//         console.log("ew")
//         break;
// }   


// arrays 
// const arr = [1,2,3,true]
// const arr2 = new Array(5)
// // console.log(arr2[2]);
// //or 
// const arr3 = Array.from("Hellow")
// // console.log(arr3);
// // or
// // console.log(arr3[arr3.length - 1])
// arr3[5] = ""
// // console.log(arr3);
// arr3[arr3.length + 5] = "test"
// // console.log(arr3);
// // arr3.shift() removes 1st element of an array
// // arr3.unshift("new") adds new at the 1st element of an array
// // arr3.pop() removes the lat element of an array
// // arr3.push(2) adds 2 at the last in the array
// // arr3.lastIndexOf("l") // last se index bataega
// // arr3.indexOf("o") // shuru se index bataega
// // arr3.includes("l") // bool value dega

// const arr7 = arr.concat(arr3) // concatinates 2 strings together
// console.log(arr7) 
// const str = arr.join("|") // converts to string with a joining keyword
// console.log(str)
// const arr4 = arr.slice(1,3) // start till end index 
// console.log(arr4)
// const arr5 = arr.splice(1,1) // index and till how much places
// console.log(arr4)

// array destucting and spread 
// const [x,y] = [1,2]
// console.log(x,y); // destructing 
// now if 
// const v = [x,x2,...y] = [1,2,3,4,5] // spread operator                  
// console.log(v);
// console.log(x,x2,y);

// now 
const x = [1,2,3,4]
const y = [7,6,7,...x] // or const y = x (if)
y.push("Hellow") // it will also be changed in x but using spread it will not be 

console.log(x,y);
