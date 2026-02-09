// const prompt = require("prompt-sync")()
// const v  = prompt("Enter your name ") 


// do while loop
// do and check the condition afterwards
// do {
//     console.log("run");
//     break
// } while(true)

// // while 
// while(true) {
//     console.log("hellow");
//     break
// }

//for loop
// for (let i =0; i <10; i++) {
//     console.log(i);
//     if (i == 6){
//             break
//         }
//     continue
        
// }

// loop through array 
const arr = [1,2,3,4]
// for (let i =0; i < arr.length + 1; i++) {
//     console.log(arr[i]);
// }
// // another method
// for (let value of arr) {
//     console.log(value);
// }
// how to get index and value 
for (let [i, value] of arr.entries()) {
    console.log(i, value);
    
}