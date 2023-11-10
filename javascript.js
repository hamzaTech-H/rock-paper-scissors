function getComputerChoice() {
    let arr=['Rock','Paper','Scissors']
    return arr[Math.floor(Math.random()*3)] 
}

function playRound(playerSelection, computerSelection) {
    
    let result 
    
    switch (playerSelection + computerSelection) {
        case ('rock' + 'scissors'):
        case ('scissors' + 'paper'):  
        case ('paper' + 'rock'):
            matchScore.player++ ;
            result=`You Win! ${playerSelection} beats ${computerSelection}`;
            break;

        case ('scissors' + 'rock'):
        case ('rock' + 'paper'):
        case ('paper' + 'scissors'):
            matchScore.computer++ ;
            result=`You Lose! ${computerSelection} beats ${playerSelection}`;
            break;

        default:
            result=`It's Tie! ${computerSelection} tie with ${playerSelection}`
            break;
    }
    
    return result;
  }

function game(){

    matchScore={
        player:0,
        computer:0
    }

    for (let i = 0; i < 5; i++) {
        
        do {
            playerSelection=prompt("Enter 'Rock','Paper' or 'Scissors' :").toLowerCase()

        } while (!['rock','paper','scissors'].includes(playerSelection) );
        
        computerSelection=getComputerChoice().toLocaleLowerCase()
        alert(playRound(playerSelection,computerSelection))
    }

    alert(matchScore.player+' | '+matchScore.computer)
}

game()

