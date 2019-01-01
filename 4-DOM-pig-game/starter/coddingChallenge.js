
/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

var scores, roundScore, activePlayer, gamePlaying, lastScore;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gamePlaying){
    //anonymous function
    //1. Random number
    // var dice = Math.floor(Math.random() * 6) + 1;
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    // var diceDOM = document.querySelector('.dice');
    // diceDOM.style.display = 'block';
    // diceDOM.src = 'dice-' + dice + '.png';
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

    //3. Update the round scoure IF the rolled dice is NOT 1
    if (dice1 !== 1 && dice2 !== 1){
        roundScore += dice1 + dice2;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else{
        // next player (ternary operator)
    nextPlayer();    
    }
    /*if(dice === 6 && lastScore === 6) {
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = '0';
        nextPlayer();
    }else if (dice !== 1){
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else{
        // next player (ternary operator)
    nextPlayer();    
    }

    lastScore = dice;
    */
}
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying){
  // Add current score to Global score
  scores[activePlayer] += roundScore;
  //scores[activePlayer] = scores[activePlayer] + roundScore;  (same as above)
    var input = document.querySelector('.final-score').value;

    // Undefined, 0, '' or null is COERCED to false
    // Anthing else is COERCED to True
    var winningScore;
        if(input){
            winningScore = input;
        }else{
            winningScore = 100
        }

  // Update the UI
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
  // Check if player won the game
  if (scores[activePlayer] >= winningScore){
      document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
    //   document.querySelector('.dice').style.display = 'none';
      document.getElementById('dice-1').style.display = 'none';
      document.getElementById('dice-2').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
  } else{
      // Next Player
      nextPlayer();
  }
    }
  
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        /*if(activePlayer === 0){
            activePlayer = 1;
        }else{
            activePlayer = 0
        }*/
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');

        //document.querySelector('.dice').style.display = 'none';
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
        
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0, 0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;

// document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent;
//console.log(x);

//document.querySelector('.dice').style.display = 'none';
document.getElementById('dice-1').style.display = 'none';
document.getElementById('dice-2').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}
