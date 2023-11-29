function computeMatches(){
    // Variables
    let userGuess;
    let randomNumbers = [];
    let matches = 0;

    // fill array
    for(i = 0; i < 5; i++){
        randomNumbers[i] = Math.floor(Math.random() * 10) + 1;
    }

    // Input
    userGuess = parseInt(prompt("Guess a number between 1 and 10:"),10);

    // count matches - this could have been done on the first loop
    for(i = 0; i < 5; i++){
        if(randomNumbers[i] === userGuess){
            matches++;
        }
    }

    document.getElementById("main").innerHTML += "<br>Number are: " + randomNumbers.toString() + "<br>Your guess: " + userGuess + "<br>Matches: " + matches;
}
