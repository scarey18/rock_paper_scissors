function computerPlay() {
	let rand = Math.floor(Math.random() * 3);
	switch (rand) {
		case 0:
			return 'rock'
			break;
		case 1:
			return 'paper'
			break;
		case 2:
			return 'scissors'
	}
}
function playRound() {
	let player = prompt("Rock, Paper, or Scissors?").toLowerCase();
	let comp = computerPlay();
	if (player==comp) {
		console.log("The computer selected " + comp + ". It's a tie!");
		return 'tie'
	} else if (player=='rock' && comp=='paper') {
		console.log("You lose! Paper beats rock");
		return 'lose'
	} else if (player=='rock' && comp=='scissors') {
		console.log("You win! Rock beats scissors");
		return 'win'
	} else if (player=='paper' && comp=='rock') {
		console.log("You win! Paper beats rock");
		return 'win'
	} else if (player=='paper' && comp=='scissors') {
		console.log("You lose! Scissors beats paper");
		return 'lose'
	} else if (player=='scissors' && comp=='rock') {
		console.log("You lose! Rock beats scissors");
		return 'lose'
	} else if (player=='scissors' && comp=='paper') {
		console.log("You win! Scissors beats paper");
		return 'win'
	} else {
		console.log("That's not one of the options! Try again");
		return 'error'
	}
}
function game() {
	let round = 1;
	let playerScore = 0;
	let compScore = 0;
    while (round <= 5) {
    	console.log("Round " + round + ":")
    	let result = playRound();
    	switch (result) {
    		case 'win':
    			round++;
    			playerScore++;
    			break;
    		case 'lose':
    			round++;
    			compScore++;
    			break;
    		case 'tie':
    			round++;
    			break;
    		case 'error':
    			break;
    	}
    }
    console.log("Final score: " + playerScore + " to " + compScore);
    if (playerScore > compScore) {
    	console.log("You win!!!");
    } else if (playerScore < compScore) {
    	console.log("You lose :(");
    } else if (playerScore == compScore) {
    	console.log("It's a tie!");
    }
}