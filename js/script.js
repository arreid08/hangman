// console.log(`we're Live!`)

// Code for Header Buttons:
// SET variables for each button
let restart = document.querySelector(".restart")
let start = document.querySelector(".start")
// SET event listeners for each button and what actions will happen.
restart.addEventListener('click', (e) => {
    if(confirm("Do you want to play again?")) {
        location.reload()
    }
})

// Code to toggle visibility:
// SET variables for the keyboard and start screen blocks
let keyboard = document.querySelector(".alphabet")
let startScreen = document.querySelector(".initialScreen")


// Code for clicking initial screen buttons:
// SET variable for submit and random buttons
let random = document.querySelector("#random")
let submit = document.querySelector("#submit")

// SET an array of random words
// SET randomWords as an empty string.
let wordArray = ["candy", "Christmas", "friend", "chimpanzee", "giraffe"]
let randomWord = ''

// SET a variable for the image tag.
let images = document.querySelector(".image")
let imageCount = 0

// SET a variable for guesses
let guesses = document.querySelector('#turnsLeft')
let guessLeft = 7


// Select a random word when the random button has been pushed.
random.addEventListener('click', (e) => {
    randomWord = wordArray[Math.floor(Math.random()*wordArray.length)]
    document.getElementsByClassName(".puzzle").innerHTML = randomWord
    console.log(randomWord)
    for (let i = 0; i < randomWord.length; i++) {
        let wordDiv = document.createElement('div')
        wordDiv.id = 'underline'+[i]
        wordDiv.className = 'underline'
        // console.log('wordDiv', wordDiv)
        document.querySelector('.puzzle').appendChild(wordDiv)
    }
    keyboard.style.visibility = "visible"
    startScreen.style.visibility = "hidden"
})

// FUNCTION checking for a match from the keyboard to the random word
function checkMatch(letter) {
    // console.log(letter)
    // IF the button clicked matches a letter in the hidden word.
    if (randomWord.includes(letter)) {
        // THEN show the letter in all the necessary spaces.

        console.log('it includes that letter')
        // ELSE rotate through the images to show the hangman
    } else {
        console.log('wrong letter')
        // SUBTRACT guesses by 1
        guessLeft--
        // console.log(guessLeft)
        imageCount++
        // console.log(imageCount)
        // SET the main image to be the new image
        images.src = `images/${imageCount}.jpg`
        // IF guessLeft = 0 popup a box that shows you lost
        if (guessLeft === 0){
            // display a modal saying you lose.
            console.log('you lose')
            // break
        }        
        // DISPLAY new value for guessesLeft
        guesses.innerText = guessLeft
        // console.log(guesses.innerText)
        // }
    }
}

// Code for clicking on letters:
// SET variable for keystroke
let chooseLetter = document.querySelectorAll('.letter')
// FUNCTION to call all the keys
function buttons () {
    // LOOP through the letters to find the right one.
    for (i=0; i<chooseLetter.length; i++) {
        // CREATE an event listener for when a letter is clicked
        chooseLetter[i].addEventListener('click', (e) => {
            let chosenLetter = e.target.textContent
            // console.log(e)
            // SEND the letter to the checkMatch function to COMPARE
            checkMatch(chosenLetter)
            // console.log(chosenLetter)
            // DISABLE the button that was clicked
            e.target.disabled = true
            // SET the button to class active when it is clicked to show it has been used.
            // chosenLetter.classList.add('active')
        })
    }
}

buttons()





// Sources:
// w3schools.com
// https://css-tricks.com/snippets/javascript/select-random-item-array/ (used for the random word generator)