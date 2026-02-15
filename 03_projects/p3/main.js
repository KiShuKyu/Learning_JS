const clock = document.querySelector('#clock')


// let date = new Date()
// console.log(date.toLocaleTimeString())

// baar baar run ho ye code toh (kyuki jb hum refresh krte h tbhi ye update hota h)

setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()

}, 1000) // 1000 is the interval 1 sec 