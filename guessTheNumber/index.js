let randomNumber=parseInt(Math.random()*100+1);

const submit=document.querySelector("#submit");
const userInput=document.querySelector("#text");
const guesses=document.querySelector(".guesses");
const remaining=document.querySelector(".lastResult");
const lowOrHi=document.querySelector(".lowOrHi");
const startOver=document.querySelector(".resultParas");

const p=document.createElement('p');


let prevGuess=[];
let numGuess=1;
let playGame=true;

if(playGame)
{
    submit.addEventListener("click",(e)=>{
        e.preventDefault();
        console.log(e);
        let guess=parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess)
{
    if (isNaN(guess))
    {
        alert(`Please enter a valid number`);
    }
    else if(guess<1)
    {
        alert(`Number can not be less than 1`);
    }
    else if(guess>100)
    {
        alert(`Number can not be greater than 100`);
    }
    else
    {
        prevGuess.push(guess);
        if(numGuess===11)
        {
            displayGuess(guess);
            displayMessage(`Game over. Random number was ${randomNumber}`);
            endGame();
        }
        else
        {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess)
{
    if(guess===randomNumber)
    {
        displayMessage(`Congratulations! You guessed it right. ${guess} is the correct number.`);
        endGame();
    }
    else if(guess<randomNumber)
    {
        displayMessage(`Guessed number is too low`);
    }
    else if(guess>randomNumber)
    {
        displayMessage(`Guessed number is too high`);
    }
}

function displayGuess(guess)
{
    userInput.value='';
    guesses.innerHTML+=`${guess} `;
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`;
}

function displayMessage(message)
{
    lowOrHi.innerHTML=`<p>${message}</p>`;
}

function endGame()
{
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.innerHTML=`<button class="btn" id="newGame">Start Newgame</button>`;
    p.style.textAlign="center";
    startOver.appendChild(p);
    playGame='false';
    newGame();
}

function newGame()
{
    const newGameButton=document.querySelector("#newGame");
    newGameButton.addEventListener("click",function(e){
        randomNumber=parseInt(Math.random()*100+1);
        prevGuess=[];
        numGuess=1;
        guesses.innerHTML="";
        ramaining.innerHTML=`11-${numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame=true;
    });
}