// basic syntax of a function 
/*
function Greet() {
    console.log("Hello Krishna");
}
Greet()
*/
// ****************************** arrow function ******************************
// const is recommended 
// const Greet = () => { // this is better working with callback functions 
//     console.log("Hello Krishna");
// } 
// Greet()

// we can export it differently to have an function work in different file same as module 
// for the basic one 
// export default function Greet() {
//     console.log("Hello Krishna");
// }


// export const Greet = () => { // this is better working with callback functions 
//     console.log("Hello Krishna");
// } 

// const MyComponent = () => {
//     return <div> </div> // this is for react 
// }

// // ****************************** Anonymous function ******************************
// // allows you to execute commands without having to declare a function 
// <button onClick={ () => { 
//     console.log("hello")
//     }}
// ></button>

// ****************************** Working with conditionals ******************************
// using ternary operations 
// react helps you write javascript inside of you html but it's not actually called html it's a modified version of html called jsx which allows you to write js 
// its one of the best parts of react beacuse it allows you to write conditionals and write logic and make that represent your UI
/*
const a = 10
const b = 20
const c = a > b ? true: false // easyyyyyyyy
console.log(c);

const name = () => {
    return a > b ? <div> "Jack" </div> : <div> "Oggy" </div>
}
*/

// ****************************** Objects  ******************************
/*
const person = {
    name: "Krishna",
    age: 19,
    married: false,
}

// const name = person.name
// const age = person.age          // this is taking to much of a space 
// const married = person.married

const {name, age, married} = person
*/
// 3 variables which represents their corresponding properties inside of person 

// if you use global you dont have to 
/*
const name = "Krishna"
const person = {
    name,
    age: 19,
    married: false,
}
*/
/*
// if person 1 and person2 are same except of name 
const person1 = {
    name: "Krishna",
    age: 19,
    married: false,
}

const person2 = {...person1, name:"Jeet"}
*/

// ****************************** Maps filter and reduce ******************************
//Maps
// adding the one to the end 
// let names = ["Krishna", "jeet", "Vishal"]
// names.map((name) => {
//     // console.log(name);
//     return console.log(name + "1")    
// })

// filter  
// true false output 
// let names = ["Krishna", "jeet", "Vishal", "Vishal", "Vishal", "Vishal"]
// names.filter((name) => {
//     return console.log(name !== "Vishal");
// })

// ****************************** Async + Await + Fetch ******************************