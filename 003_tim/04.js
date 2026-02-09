// ****************************** Map filer and reduce ******************************
// map function apply some function to every single element inside of an array , and then give you a new array with the result of that function
// example 
// const number = [1,2,3,4]
// const double = number.map((num) => num *2)
// console.log(double);

// // we can do this with array of objects as well
// const users = [
//     { name: "Krishna", age: 19 },
//     { name: "Alice", age: 25 },
// ]
// const names = users.map((user) => user.name)
// console.log(names);

// reduce 
// reduce is typically used when you want to take an array and reduce that down to a single value .(ususally used to calculate the sum, but we can also use this to concatenate vaslues together)
// const numbers2 = [1,2,3,4]
// const sum = numbers2.reduce((acc, num) => acc + num, 0) // acc= accumulator value and the number we are currently considering 
// console.log(sum); // 10

// // filer functions works similarly to the map function 
// // except what it does is just take all the values from an array that match a specific criteeria based on some filter function :- this function needs to return true or faslse or at least a true or false value 
// const number3 = [1,2,3,4,5]
// const evenNumbers = number3.filter(num => num % 2 ===0);
// console.log(evenNumbers);


// ****************************** This keyword ******************************
// const person = { // person is an object 
//     name: "Krishna",
//     greet() {
//         console.log(`Hello, my name is ${this.name}`);
        
//     },
// }
// person.greet() // this works but if we use an arrow function 

// const person = { // person is an object 
//     name: "Krishna",
//     greet: () => {
//         console.log(`Hello, my name is ${this.name}`);
        
//     },
// }
// person.greet() // Hello, my name is undefined // why is because an arrow function actullay inherit this at the time in which they are defiend, not when they are called 
// // basically it inherits name from global scope and not from the local so name is undefined 

// ****************************** Promises ******************************
// Promise is an object that represents the eventual completion or failure of an Asynchronous operation 
// const myPromise = new Promise((resolve, reject) => {
//     // Asynchronous operation 
//     if(false) {
//         resolve("good"); // fulfill the promise 
//     } else {
//         reject("bad"); // reject the promise 
//     }
// });
// // promise is used when we dont know how long something is going to take to complete    

// myPromise.then((value) => { // .then is what happens when it is resolved 
//     console.log(value);
    
// }).catch((value)=>{ // this happens when the promise is rejected 
//     console.log(value)
// }).finally(()=> {
//     console.log("always executed")
// })

// const promise1 = Promise.resolve(3)
// const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 100, "foo")) // 100 milliseconds
// const promise3 = new Promise((resolve, reject) => setTimeout(reject, 500, "bar")) // 500 milliseconds

// Promise.all([promise1,promise2,promise3]) // this will run in parallel as this input output is not in our control (.all) 
// // results will be an array of all the results 
// .then((results) => {
//     console.log(results); // this will not run due to promise3 rejecting 
// }).catch((error)=> { // error will be any error that occured or first error that occured from our promises 
//     console.log(error); // "bar"
// })