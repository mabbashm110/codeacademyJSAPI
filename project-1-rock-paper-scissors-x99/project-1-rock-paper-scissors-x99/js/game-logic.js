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

const setPlayerMoves = (playerName, playerMove1, playerMove1Val, playerMove2, playerMove2Val, playerMove3, playerMove3Val) => {
    //Check values not undefined
    if ((playerName && playerMove1 && playerMove1Val && playerMove2 && playerMove2Val && playerMove3 && playerMove3Val) 
    && (gameOptions.indexOf(playerMove1) > -1) 
    && (gameOptions.indexOf(playerMove2) > -1) 
    && (gameOptions.indexOf(playerMove3) > -1)){

        console.log("Vales correct and not null");
        console.log(gameOptions.indexOf(playerMove2));
        //Check values less than 1, greater than 99, totals greater than 99.
        
        if ((playerMove1Val && playerMove2Val && playerMove3Val) < 1 || 
            (playerMove1Val && playerMove2Val && playerMove3Val) <= 100 ||
            (playerMove1Val + playerMove2Val + playerMove3Val) > 99)
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

setPlayerMoves('Player Two', 'rock', 11, 'paper', 23, 'scissors', 55);

/*
const getRoundWinner = (moveNumber) =>{
    switch (moveNumber){
        case 1:

    }
}


const getWinnerMove = (player1Move, player2Move) =>{
    if (player1Move === "rock"){
        switch (player2Move){
            case "rock":
                "Tie";
                break;
            case "paper":
                "Player Two";
                break;
            case "scissors":
                "Player One"
                break;
        }
    }
    else if (player1Move === "paper"){
        switch (player2Move){
            case "rock":
                "Player One";
                break;
            case "paper":
                "Tie";
                break;
            case "scissors":
                "Player Two";
                break;
        }

    }
    else{
        switch(player2Move){
            
        }
    }
}
*/