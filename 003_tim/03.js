// ****************************** Objects  ******************************
// // objects -> have properties associated with values 
// const obj = {
//     name: "Krishna",
//     age: 19,
//     sayHellow: function() {
//         return "hellow" // function inside an object
//     },
//     career: {
//         // object inside an object
//     }
// }

// // obj.age = 20
// // obj.newProp = [1,2]

// // obj["name"]

// // delete obj.career

// // to get values of objects 
// console.log(Object.keys(obj), Object.values(obj));
// // loop through this 
// for (let key in obj) {
//     console.log(key);
// }
// // combining two objects together
// const obj2 = {
//     hairColor: "black",
//     arr: [1,2,3],
//     // if we rename our name it will override to the latest one 
//     name: "Krishna"
// }

// const obj3 = {...obj, ...obj2}
// console.log(obj3);


// ****************************** Sets ******************************
// const mySet = new Set();
// mySet.add(1)
// mySet.delete(1)
// mySet.has(1)
// mySet.size

// mySet.clear()
// const arr = new Array.from(mySet)

// ****************************** Maps ******************************
// const myMap = new Map();
// const numberMap = new Map([[1, 'one'], [2, 'two']])

// // myMap.set(4,'four')
// // myMap.delete(4)
// // myMap.get(4) // value of 4 
// // myMap.has(1)
// // myMap.size()

// // for (const [key,value] of numberMap){ // to get only key for for (const key of myMap.key())
// //     console.log(key,value);
    
// // }
// // myMap.clear()
// const arr = Array.from(numberMap) // its going o give us an array that looks like arrays nested inside arrays
// console.log(arr); //[ [ 1, 'one' ], [ 2, 'two' ] ]

// ****************************** Error handling  ******************************
// try {
//     riskFunction();
// } catch (error) {
//     console.error("An error occured:" , error.message);
// } finally {
//     console.log("Cleanup code can go here. "); // Always runs 
// }

// // our errror exceptions
// throw new Error("this is not good!")


// ****************************** functions  ******************************
function great(name, age = 12, function2) {
    console.log(name, age);
}
//                or
// const greet = function(name) {
//     console.log("Hello" ,name);
    
// }
// greet("krishna")

//                or
// const greet = (name) => name + "!" // => is an arrow function arrow defines function body or the direct return 
// console.log(greet('Krishna'));

//                or
// const greet = (name) => {
//     return () => name
// }

// greet("name")()

// rest parameters allows a function to accept an indefinite number of arguments as an array

// function addNums(...numbers) { // we can get any number of arguments this will come in as an array
//     return [1,2,3]
// }

