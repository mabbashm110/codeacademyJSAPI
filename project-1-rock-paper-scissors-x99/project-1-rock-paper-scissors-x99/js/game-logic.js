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


const setPlayerMoves = (playerName, playerMove1, playerMove1Val, playerMove2, playerMove2Val, playerMove3, playerMove3Val) => {
    //Check values not undefined
    if (playerName && playerMove1 && playerMove1Val && playerMove2 && playerMove2Val && playerMove3 && playerMove3Val){
        console.log("Not null")
        //Check values less than 1, greater than 99, totals greater than 99.
        if((playerMove1Val && playerMove2Val && playerMove3Val)> 0 && 
        (playerMove1Val || playerMove2Val || playerMove3Val) <= 100 &&
        (playerMove1Val + playerMove2Val + playerMove3Val) <= 100)
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
