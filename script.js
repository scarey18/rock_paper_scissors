function computerPlay() {
	const rand = Math.floor(Math.random() * 3);
	switch (rand) {
		case 0:
			return 'rock'
		case 1:
			return 'paper'
		case 2:
			return 'scissors'
	}
}
function playRound(player) {
	const comp = computerPlay();
	const win = document.querySelector('.win');
	const lose = document.querySelector('.lose');

	win.style.visibility = 'hidden';
	lose.style.visibility = 'hidden';

	if (player==comp) {
		win.textContent = "It's a tie!";
		lose.textContent = "It's a tie!";
		win.style.visibility = 'visible';
		lose.style.visiblity = 'visible';
		return 'tie'

	} else if (player=='rock' && comp=='paper') {
		lose.textContent = "Paper beats rock";
		lose.style.visibility = 'visible';
		return 'lose'

	} else if (player=='rock' && comp=='scissors') {
		win.textContent = "Rock beats scissors";
		win.style.visibility = 'visible';
		return 'win'

	} else if (player=='paper' && comp=='rock') {
		win.textContent = "Paper beats rock";
		win.style.visibility = 'visible';
		return 'win'

	} else if (player=='paper' && comp=='scissors') {
		lose.textContent = "Scissors beats paper";
		lose.style.visibility = 'visible';
		return 'lose'

	} else if (player=='scissors' && comp=='rock') {
		lose.textContent = "Rock beats scissors";
		lose.style.visibility = 'visible';
		return 'lose'

	} else if (player=='scissors' && comp=='paper') {
		win.textContent = "Scissors beats paper";
		win.style.visibility = 'visible';
		return 'win'
	}
}
function game() {
	const playerScore = document.querySelector('.player .score');
	const compScore = document.querySelector('.comp .score');

    while (playerScore.textContent < 5 && compScore.textContent < 5) {
    	const result = playRound();
    	switch (result) {
    		case 'win':
    			const score = parseInt(playerScore.textContent);
    			playerScore.textContent = score + 1;
    			break;
    		case 'lose':
    			const score = parseInt(compScore.textContent);
    			compScore.textContent = score + 1;
    			break;
    		case 'tie':
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