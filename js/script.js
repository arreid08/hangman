// console.log(`we're Live!`)

// Code for Header Buttons:
// SET variables for each button
let restart = document.querySelector(".restart")
// SET event listeners for each button and what actions will happen.
restart.addEventListener('click', (e) => {
    restartModal.style.visibility = "visible"
    restartModal.querySelector(".close")
    .addEventListener('click', (e) => {
        restartModal.style.visibility = "hidden"
        location.reload()
    })
    
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
let wordArray = ["candy", "christmas", "friend", "chimpanzee", "giraffe"]
let randomWord = ''

// SET a variable for the image tag.
let images = document.querySelector(".image")
let imageCount = 0

// SET a variable for guesses
let guesses = document.querySelector('#turnsLeft')
let guessLeft = 7

// SET a variable for correct letters
let correctLetters = 0

// SET a variable to combine the underlined spots with the index
let position = document.querySelector("#underline")


// SET the variable for the modal
let winModal = document.querySelector("#winModal")
let loseModal = document.querySelector("#loseModal")
let close = document.querySelector(".close")


// Select a random word when the random button has been pushed.
random.addEventListener('click', (e) => {
    randomWord = wordArray[Math.floor(Math.random()*wordArray.length)]
    document.getElementsByClassName(".puzzle").innerHTML = randomWord
    console.log(randomWord)
    for (let i = 0; i < randomWord.length; i++) {
        let wordSpan = document.createElement('span')
        wordSpan.id = 'underline'+[i]
        wordSpan.className = 'underline'
        // console.log('wordSpan', wordSpan)
        document.querySelector('.puzzle').appendChild(wordSpan)
    }
    keyboard.style.visibility = "visible"
    startScreen.style.visibility = "hidden"
})



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

// FUNCTION checking for a match from the keyboard to the random word
function checkMatch(letter) {
    // console.log(letter)
    // IF the button clicked matches a letter in the hidden word.
    if (randomWord.includes(letter)) {
        // THEN show the letter in all the necessary spaces.
        // LOOP through the letters of the randomWord to see how many times that letter pops up
        for (let i = 0; i < randomWord.length; i++) {
            // IF the letter appears in the word
            if(letter == randomWord[i]){
                // THEN tally up the number of correct letters
                correctLetters ++
                // console.log(correctLetters)
                // DETERMINE the location in the word that letter falls.
                position = `#underline${i}`
                // console.log(position)
                // SET a variable for the new location
                let location = document.querySelector(position)
                // console.log(location)
                location.innerText = letter
                // IF the length of the randomWord is as long as the tally
                if(randomWord.length === correctLetters){
                    // DISPLAY a model to say you won!
                    winModal.style.visibility = "visible"
                    winModal.querySelector(".close")
                    .addEventListener('click', (e) => winModal.style.visibility = "hidden")
                }
            }
        }
        // console.log('it includes that letter')
        // ELSE rotate through the images to show the hangman
    } else {
        // console.log('wrong letter')
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
            // console.log('you lose')
            // MODAL to show you lose.
            loseModal.style.visibility = "visible"
            loseModal.querySelector(".close")
            .addEventListener('click', (e) => {
                loseModal.style.visibility = "hidden"
                location.reload()
            })
        }        
        // DISPLAY new value for guessesLeft
        guesses.innerText = guessLeft
    }
}



buttons()





// Sources:
// w3schools.com
// https://css-tricks.com/snippets/javascript/select-random-item-array/- used for the random word generator
// https://www.w3schools.com/howto/howto_css_modals.asp - used for setting up my modal
// https://css-tricks.com/considerations-styling-modal/ - modal styling