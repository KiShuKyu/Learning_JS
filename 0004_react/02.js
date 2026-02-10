// DOM -> Document Object Model 
// It is a representation of a web page 
// The Js can basically interact with 
// The Js is actually used to add interactivity into your website by manupilating the DOM 
// But grabbing headers manually and changing them manually is not efficient so that is why React was created 
// what react does is that it creates a virtual representation of a DOM (virtual DOM)

// ****************************** Import export function in JS ******************************

// using node js  
// const axios = require('axios') // import using node.js
// MediaSourceHandle.export = { anObject }; // export 

// // in react 
// import axios from "axios";
// export {anObject}

// ****************************** optional Traning  ******************************
/*
const fetchData = async () => {
    const data = await fetch("imaginartapi.com");
    const name = data.person.name; // we dont know that person will be there or not so we use person? which means that it will only search for name in case person exists which means it won't break our app
}
*/
// ****************************** Template Literals ******************************
/*
const fetchData = async (animalName) => { // inside thi fetch data function we have an  argument called animalName
    const data = await fetch("imaginartapi.com/searchTerms/cat"); // we have to define correctly to get that name or information thats where templete literals comes in play
    const name = data.person.name; 
}
*/
//
const fetchData = async (animalName) => { 
    const data = await fetch(`imaginartapi.com/searchTerms=${animalName}`); 
    const name = data.person.name; 
}