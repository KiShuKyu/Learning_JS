// ****************************** String ******************************
// String interpolation f sting basically

// const name = "Krishna"
// const repo = 9

// // console.log(name , repo); BAD PRACTICE

// console.log(`Hello my name is ${name} and my repo count is ${repo}`);
// // another way to declare string
// const gameName = new String ("Valorant")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());

// ****************************** Numbers ******************************

// const score = 400
// console.log(score)

// const balance = new Number(300)
// console.log(balance);
// console.log(balance.toFixed(2)); // precision values 

// const otherNumber = 3278.2345
// console.log(otherNumber.toPrecision(4)); // points ko hata dega basically

// const hundreds = 10000000
// console.log(hundreds.toLocaleString())

// ****************************** Math  ******************************
// console.log(Math)
// console.log(Math.round(453.57))
// console.log(Math.ceil(4.2))

// console.log(Math.random());
// console.log((Math.random()*10) + 1);


// const min = 10
// const max = 20 

// console.log((Math.floor(Math.random() * (max - min + 1))) + min )

// ****************************** Date and Time ******************************

let myDate = new Date() // type of date is object
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date (2023, 9, 7) // for time as well (2023, 9, 7, 5 ,3 )
// let myCreatedDate = new Date ("2023-10-7") //for yymmdd format 
// let myCreatedDate = new Date ("10-07-2006") // indian
// console.log(myCreatedDate.toDateString());

// let myTimeStamp = Date.now()
// // console.log(myTimeStamp)
// // console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());


newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "IST"
})
console.log(newDate);
