const getWinnerMove = (player1Move, player2Move) =>{
    //setPlayerMoves()
    console.log(player1Move, player2Move)
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
    else{
        // switch(player2Move){

        // }
        return "nope"
    }
}

getWinnerMove("rock", "scissors")