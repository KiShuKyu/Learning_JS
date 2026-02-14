const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body");


// events in js 
// jb bhi event click krte h us evenmt ko function me le skte h aaur uske saath kuch activity kr skte h

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function(e) {
        console.log(e)
        console.log(e.target);
        if(e.target.id === "grey"){
            body.style.backgroundColor = e.target.id; // body = grey
        }
        if(e.target.id === "white"){
            body.style.backgroundColor = e.target.id; 
        }
        if(e.target.id === "blue"){
            body.style.backgroundColor = e.target.id; 
        }
        if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id;
        }
    })
})