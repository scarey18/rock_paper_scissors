const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

function computerPlay() {
	const rand = Math.floor(Math.random() * 3);

	switch (rand) {
		case 0:
			rock.classList.add('compChoice');
			return 'rock'
		case 1:
			paper.classList.add('compChoice');
			return 'paper'
		case 2:
			scissors.classList.add('compChoice');
			return 'scissors'
	}
}
function playRound(player) {
	const comp = computerPlay();
	const win = document.querySelector('.win');
	const lose = document.querySelector('.lose');
	win.classList.add('hidden');
	lose.classList.add('hidden');

	if (player==comp) {
		win.textContent = "It's a tie!";
		lose.textContent = "It's a tie!";
		win.classList.toggle('hidden');
		lose.classList.toggle('hidden');
		return 'tie'

	} else if (player=='rock' && comp=='paper') {
		lose.textContent = "Paper beats rock";
		lose.classList.toggle('hidden');
		return 'lose'

	} else if (player=='rock' && comp=='scissors') {
		win.textContent = "Rock beats scissors";
		win.classList.toggle('hidden');
		return 'win'

	} else if (player=='paper' && comp=='rock') {
		win.textContent = "Paper beats rock";
		win.classList.toggle('hidden');
		return 'win'

	} else if (player=='paper' && comp=='scissors') {
		lose.textContent = "Scissors beats paper";
		lose.classList.toggle('hidden');
		return 'lose'

	} else if (player=='scissors' && comp=='rock') {
		lose.textContent = "Rock beats scissors";
		lose.classList.toggle('hidden');
		return 'lose'

	} else if (player=='scissors' && comp=='paper') {
		win.textContent = "Scissors beats paper";
		win.classList.toggle('hidden');
		return 'win'
	}
}
function playGame(player) {
	const playerScore = document.querySelector('.player .score');
	const compScore = document.querySelector('.comp .score');
   	const result = playRound(player);
   	switch (result) {
   		case 'win':
   			score = parseInt(playerScore.textContent);
   			playerScore.textContent = score + 1;
   			break;
   		case 'lose':
   			score = parseInt(compScore.textContent);
   			compScore.textContent = score + 1;
   			break;
   		case 'tie':
   			break;
   	}
   	const announcement = document.querySelector('.announcement');
   	const endgame = document.querySelector('.endgame');
   	if (playerScore.textContent >= 5) {
   		announcement.textContent = "You win! :)";
   		endgame.classList.toggle('hidden');
   	} else if (compScore.textContent >= 5) {
   		announcement.textContent = "You lose :(";
   		endgame.classList.toggle('hidden');
   	}
}

[rock, paper, scissors].forEach(function(button) {
	button.addEventListener('click', function() {
		rock.classList.remove('compChoice', 'playerChoice');
		paper.classList.remove('compChoice', 'playerChoice');
		scissors.classList.remove('compChoice', 'playerChoice');
		button.classList.add('playerChoice');
		const choice = this.id;
		playGame(choice);
	})
})

const reset = document.querySelector('.reset');

reset.addEventListener('click', function() {
	location.reload();
})