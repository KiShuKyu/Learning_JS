const { useReducer } = require("react")

let randomNumber = parseInt(Math.random()*100 + 1)

// (.for class) (# for id)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHight = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')


const p = document.createElement('p')


let prevGuess = []
let numGuess = 1

let playGame = true 

if (playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    // abc toh nhi h number bada toh nhi h 
    // 1-100 ke beech me value h ya nhi 
    if (isNaN(guess)){
        alert('Please enter a valid number')
    } else if(guess < 1){
        alert('Please enter a number more than 1')
    } else if(guess > 100){
        alert('Please enter a number less than 100.')
    } else {
        prevGuess.push(guess) // array ke andar push kr dia 
        if (numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game over random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    // khi vo value random number ke equal toh nhi h 
    // if = (go to displayMessage )
    if(guess === randomNumber){
        displayMessage(`You guessed it right the number was ${guess}`)
        endGame()
    }   else if (guess < randomNumber){
        displayMessage('Number is too low')
    }   else if (guess > randomNumber){
        displayMessage('Number is too high')
    }
}

function displayGuess(guess){
    // cleaning of the values  
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    // 
    lowOrHight.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}


function newGame(){
    const newgameButton = document.querySelector('#newGame')
    newgameButton.addEventListener('click', function(e){
        // 1st reset all the variables then playGame true
        randomNumber = parseInt(Math.random()*100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame =true
    })

}

