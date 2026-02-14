const form = document.querySelector('form')
// this use case will give you empty
// const weight = parseFloat(document.querySelector('#weight').value)

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseFloat(document.querySelector('#height').value)  // we get the value of hight but in string (so we use parseINT)
    const weight = parseFloat(document.querySelector('#weight').value)  
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height) ){
        results.innerHTML = `Please give a valid height ${height}???`
    } else if(weight === '' || weight < 0 || isNaN(weight) ){
        results.innerHTML = `Please give a valid weight ${weight}???`
    } else {
        const result = (weight / ((height*height)/10000)).toFixed(2) // .2f == .tofixed(2)
        // show the result
        results.innerHTML = `Result = ${result}`
    }
    
})