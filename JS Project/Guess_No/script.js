let randomNum = parseInt(Math.random()*100+1);

let submit = document.querySelector('#subt');
let inputGuess = document.querySelector('#guessField');
let guessSlot = document.querySelector('.guesses');
let remainChance = document.querySelector('.lastResult');
let bot = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.resultParas');

let p = document.createElement('p'); 

let preGuess = [];
let numGess = 1;

let playGame = true;

if (playGame){
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(inputGuess.value);
        console.log(guess);
        validate(guess) 
    })
}



function validate(guess){
    if (isNaN(guess) || guess === ""   ){
        p.appendChild(document.createTextNode("Please enter valid no."));
        p.style.background='Red';
        p.style.padding='10px';
        p.style.fontSize='25px';
        // p.style.marginTop='116px';
        startOver.appendChild(p)
    } else if(guess < 1){
        p.appendChild(document.createTextNode("Please enter a value greater than 1"));
        p.style.background='Red';
        p.style.padding='10px';
        p.style.fontSize='25px';
        // p.style.marginTop='116px';
        startOver.appendChild(p)
    } else if(guess > 100){
        p.appendChild(document.createTextNode("Please enter a value smaller than 100"));
        p.style.background='Red';
        p.style.padding='10px';
        p.style.fontSize='25px';
        // p.style.marginTop='116px';
        startOver.appendChild(p);
    } else{
        preGuess.push(guess);
        if(numGess === 10){
            displayGuess(guess);
            displayMessage(`Game Over.Random no was ${randomNum}`)
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess){
    if(guess === randomNum){
        displayMessage('You guess it right');
        endGame();
    } else if(guess < randomNum){
        displayMessage('Your Guessed No. is to low')
    } else if(guess > randomNum){
        displayMessage('Your Guessed No. is to high')
    } 
}

function displayGuess(guess){
    inputGuess.value = '';
    if(numGess<=9){
    guessSlot.textContent += `${guess},`;
    } else {
        guessSlot.textContent += `${guess}`;
    }
    numGess++;
    remainChance.textContent = `${10 - numGess}`;

}

function displayMessage(message){
    bot.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    playGame = false;
    inputGuess = "";
    inputGuess.disabled = true; 
    
    p.classList.add('button');
    p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`;
    startOver.appendChild(p);
    
    newGame()

}

function newGame(){
    let newGame = document.querySelector('#newGame');
    newGame.addEventListener('click', (e) => {
        randomNum = parseInt(Math.random()*100+1);
        preGuess = [];
        numGess = 1;
        guessSlot.textContent = '';
        remainChance.textContent = `${11 - numGess}`;
        inputGuess.disabled = false; 
        startOver.removeChild(p);
        
        playGame = true;
    })

}       