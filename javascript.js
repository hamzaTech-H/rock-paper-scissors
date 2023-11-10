matchScore={
    player:0,
    computer:0
}


function getComputerChoice() {
    let arr=['Rock','Paper','Scissors']
    return arr[Math.floor(Math.random()*3)] 
}

function playRound(playerSelection, computerSelection) {
    
    let result 
    
    switch (playerSelection + computerSelection) {
        case ('Rock' + 'Scissors'):
        case ('Scissors' + 'Paper'):  
        case ('Paper' + 'Rock'):
            matchScore.player++ ;
            result=`You Win! ${playerSelection} beats ${computerSelection}`;
            break;

        case ('Scissors' + 'Rock'):
        case ('Rock' + 'Paper'):
        case ('Paper' + 'Scissors'):
            matchScore.computer++ ;
            result=`You Lose! ${computerSelection} beats ${playerSelection}`;
            break;

        default:
            result=`It's Tie! ${computerSelection} tie with ${playerSelection}`
            break;
    }
    
    const container = document.querySelector('div')
    container.textContent=result
    container.style.cssText = "margin-top: 16px; color : red;"
    
    console.log(result);
    console.log(matchScore);

    if (matchScore.player == 5 || matchScore.computer == 5 ) {
        if (matchScore.player == 5 ){
            alert("You win!")
        }
        else if (matchScore.computer == 5 ) {
            alert("You Lose!")
        }

        for (const key in matchScore) {
            matchScore[key] = 0;
        } 
        console.log(matchScore)
    }

  }

