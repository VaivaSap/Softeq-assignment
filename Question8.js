/*Solve the game "Guess a number", find a secret integer between 1 and 1000000 in less than 50
guesses. Write a function that solves the game and returns the solution by using the function
verify() which is defined with the following specification:
function verify(guess: integer) -> integer
Returns:
● 0 if the guess is the solution, your program won,
● -1 if the solution is smaller than the guessing parameter,
● 1 if the solution is bigger than the guessing parameter.
Warning: You are not allowed to call verify() more than 50 times or you lose*/




const minGuessValue = 1;
const maxGuessValue = 1000000;
let guessCount=0;
let guess; 
let newMinGuessValue = minGuessValue;
let newMaxGuessValue = maxGuessValue;
let loopedResult = newMaxGuessValue/2;



// A random number is chosen; helps with testing of the main function 
function randomNumberFromInterval(minGuessValue, maxGuessValue) {
    return Math.floor(Math.random() * (maxGuessValue - minGuessValue + 1) + minGuessValue)
  }
  
  const randomNumber = randomNumberFromInterval(1, 1000000)
  console.log(randomNumber)


//Defining possible outcomes
function verify(guess) {
    

    if(guess === randomNumber) {
        return 0;  
    } 

    if(guess > randomNumber){
    console.log("The number is lower than that");
    return -1;

}

    if(guess < randomNumber){
    console.log("The number is higher than that");
    return 1;
}

}


//Guessing game in progress

for(i = 0; i<50; i++) {

let result = verify(loopedResult); //1, 0 or -1


if(result === 1){ //higher side // 500000

    newMinGuessValue = loopedResult + 1;
}

else if(result === -1){ //lower
  newMaxGuessValue = loopedResult - 1;
}
  
else if(result === 0){ 
    console.log("Success!")
   break;
}


console.log(loopedResult, newMaxGuessValue, newMinGuessValue); 

loopedResult =  Math.round((newMinGuessValue) + Math.round(Math.round(newMaxGuessValue) - Math.round(newMinGuessValue))/2);




guessCount = i;
}


console.log(`The number was ${randomNumber}. You needed ${guessCount} guesses to find it.`);


