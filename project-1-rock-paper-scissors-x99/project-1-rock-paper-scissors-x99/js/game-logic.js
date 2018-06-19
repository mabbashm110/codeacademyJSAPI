// All code should be written in this file.
//Player 1
let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;
//Values
let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;

//Player 2
let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;
//Values
let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

let gameOptions = ["rock", "paper", "scissors"];

//Refactored methods for the game ================================================================


const ensureGameOptions = (playerMoves) =>{
    if (gameOptions.indexOf(playerMoves) > -1){
        return true;
    }
    else{
        return false;
    }
}

const setPlayerMoves = (playerName, playerMove1, playerMove1Val, playerMove2, playerMove2Val, playerMove3, playerMove3Val) => {
    //Check values not undefined
    if ((playerName && playerMove1 && playerMove1Val && playerMove2 && playerMove2Val && playerMove3 && playerMove3Val) 
    && (ensureGameOptions(playerMove1)) 
    && (ensureGameOptions(playerMove2)) 
    && (ensureGameOptions(playerMove3))){
        //console.log("Not null")
        //Check values less than 1, greater than 99, totals greater than 99.
        if ((playerMove1Val && playerMove2Val && playerMove3Val) > 1 && 
        (playerMove1Val + playerMove2Val + playerMove3Val) <= 99 &&
        (playerMove1Val && playerMove2Val && playerMove3Val) <= 100)
        {
            console.log(playerMove1Val + playerMove2Val + playerMove3Val);
            //Check player
            if (playerName === 'Player One'){
                //Best practice create a player object, initiate players and assign
                playerOneMoveOneType = playerMove1;
                playerOneMoveOneValue = playerMove1Val;
                playerOneMoveTwoType = playerMove2;
                playerOneMoveTwoValue = playerMove2Val;
                playerOneMoveThreeType = playerMove3;
                playerOneMoveThreeValue = playerMove3Val;
                console.log(`Player One ${playerOneMoveOneType}`);
                }
            else {
                playerTwoMoveOneType = playerMove1;
                playerTwoMoveOneValue = playerMove1Val;
                playerTwoMoveTwoType = playerMove2;
                playerTwoMoveTwoValue = playerMove2Val;
                playerTwoMoveThreeType = playerMove3;
                playerTwoMoveThreeValue = playerMove3Val;
                console.log(`Player Two ${playerTwoMoveOneType}`);
            }
        }
        else{
            console.log("null")
        }
    }
}

//Refactored methods for use with getRoundWinner() ====================================================

//Find the winning move - in association with getRoundWinner()
const getWinnerMove = (player1Move, player2Move) =>{
    //setPlayerMoves()
    if (player1Move === "rock"){
        switch (player2Move){
            case "rock":
                return "Tie";
                break;
            case "paper":
                return "Player Two";
                break;
            case "scissors":
                return "Player One"
                break;
        }
    }
    else if (player1Move === "paper"){
        switch (player2Move){
            case "rock":
                return "Player One";
                break;
            case "paper":
                return "Tie";
                break;
            case "scissors":
                return "Player Two";
                break;
        }
    }
    else if (player1Move === "scissors"){
        switch (player2Move){
            case "rock":
                return "Player Two";
                break;
            case "paper":
                return "Player One";
                break;
            case "scissors":
                return "Tie";
                break;
        }

    }
    else{
        // switch(player2Move){

        // }
    }
}

//Get a Tie Breaker
const getTieWinner = (playerMove1Val, playerMove2Val) =>{
    if(playerMove1Val > playerMove2Val){
        return "Player One";
    }
    else if (playerMove1Val < playerMove2Val) {
        return "Player Two";
    }
    else{
        return "Tie";
    }
}

//Ensures values are not null or undefined
const ensureValues = () => {
    if (playerOneMoveOneType && playerOneMoveOneValue && playerOneMoveThreeType && playerOneMoveThreeValue
        && playerOneMoveTwoType && playerOneMoveTwoValue && playerTwoMoveOneType && playerTwoMoveOneValue
        && playerTwoMoveThreeType && playerTwoMoveThreeValue && playerTwoMoveTwoType && playerTwoMoveTwoValue) {
        
            return true;
        }
     else {
         return false;
     }

}

const getRoundWinner = (roundValue) =>{
    let winner;
    
    //Issue with scope of variables
    //console.log(Boolean(ensureValues));
    //Find non-null values
    if (ensureValues){

        //Verify winner
        switch(roundValue){
            case 1:
                winner = getWinnerMove(playerOneMoveOneType, playerTwoMoveOneType);
                //console.log(winner)
                break;
            case 2:
                winner = getWinnerMove(playerOneMoveTwoType, playerTwoMoveTwoType);
                //console.log(winner)
                break;
            case 3:
                winner = getWinnerMove(playerOneMoveThreeType, playerTwoMoveThreeType);
                //console.log(winner)
                break;
            default:
                return null;
                //console.log("Null One")
                break;
        }
    }
    else{
        return null;
        //console.log("Null Two")
    }
    
    //Verify tie breaker with value
    if (winner === "Tie"){
        //console.log(winner)
        switch(roundValue){
            case 1:
                //console.log(playerOneMoveOneValue, playerTwoMoveOneValue)
                return getTieWinner(playerOneMoveOneValue, playerTwoMoveOneValue);
                break;
            case 2:
                //console.log(playerOneMoveTwoValue, playerTwoMoveTwoValue)
                return getTieWinner(playerOneMoveTwoValue, playerTwoMoveTwoValue);
                break;
            case 3:
                //console.log(playerOneMoveThreeValue, playerTwoMoveThreeValue)
                return getTieWinner(playerOneMoveThreeValue, playerTwoMoveThreeValue);
                break;
            default:
                return null;
                break;
        }
    }
    //Otherwise return a winner
    else{
        return winner
    }
}

const getGameWinner = () =>{
    let whoWonRound;
    let playerOneWins = 0;
    let playerTwoWins = 0;

    for (i = 1; i < 4; i++){
        whoWonRound = getRoundWinner(i);
        if (whoWonRound === "Player One")
        {
            playerOneWins++;
            console.log(playerOneWins)
        }
        else if (whoWonRound === "Player Two")
        {
            playerTwoWins++;
            console.log(playerTwoWins)
        }
    }

        if (playerOneWins > playerTwoWins){
            return "Player One";
        }
        else if (playerOneWins < playerTwoWins){
            return "Player Two";
        }
        else if (playerOneWins === playerTwoWins){
            return "Tie";
        }
    }
