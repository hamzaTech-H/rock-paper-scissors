function getComputerChoice() {
    let arr=['Rock','Paper','Scissors']
    return arr[Math.floor(Math.random()*3)] 
}

function playRound(playerSelection, computerSelection) {
    
    matchScore={
        player:0,
        computer:0
    }
    switch (playerSelection , computerSelection) {
        case ('rock' , 'scissors'):
            matchScore.player++
            alert("You Win! Rock beats Scissors")
            break;
        case ('scissors' , 'paper'):
            matchScore.player++
            alert("You Win! Scissors beats Paper")
            break;
        case ('paper' , 'rock'):
            alert("You Win! Paper beats Rock")
            break;

            
        case ('scissors' , 'rock'):
            alert("You Lose! Rock beats Scissors")
            break;
        case ('rock' , 'paper'):
            alert("You Lose! Paper beats Rock")
            break;
        case ('paper' , 'scissors'):
            alert("You Lose! Scissors beats Paper")
            break;

        default:
            alert("It's Tie! ")
            break;
    }
    
  }

function game(){
    for (let i = 0; i < 5; i++) {
        
        do {
            playerSelection=prompt("Enter 'Rock','Paper' or 'Scissors' :").toLowerCase()

        } while (!['rock','paper','scissors'].includes(playerSelection) );
        
        computerSelection=getComputerChoice().toLocaleLowerCase()
        playRound(playerSelection,computerSelection)
    }
}

game()

