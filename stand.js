function determineWinner()
{
  if (((dealerScore > myScore) && (dealerScore <= 21)) || (myScore > 21))
  {
    document.getElementById('announcement').innerHTML="<p>You lose! :-( Play again?</p>";
    document.display.gamesWon.value = parseInt(document.display.gamesWon.value) - 1;
  } // end if dealer wins
  
  else if ((dealerScore < myScore) || (dealerScore > 21))
  {
      document.getElementById('announcement').innerHTML="<p>You win! :-) Congratulations! Play again?</p>";
      document.display.gamesWon.value = parseInt(document.display.gamesWon.value) + 1;
  } // end if I win

  else if (dealerScore == myScore)
  {
    document.getElementById('announcement').innerHTML="<p>Tie game! Play again?</p>";
  } // end if a tiedetermineWinner

  else
    alert("Error code 3");
  
  roundOver = true;
  return;
} // end determineWinner()

function resetGame()
{
  dealtCards.length = 0;
  myTurnOver = false;
  busted = false;
  myScore = dealerScore = 0;
  document.display.myScore.value = document.display.dealerScore.value = 0;
  document.display.myCards.value = document.display.dealersCards.value = "";
  document.getElementById('announcement').innerHTML="";
  document.getElementById('me').innerHTML = "<p>Me:</p>";
  document.getElementById('dealer').innerHTML = "<p>Dealer:</p>";
  
  return;
}


function stand()
{
  if (!busted)
  {
  myTurnOver = true;
  while (dealerScore < 15)
  {
  getCard();
  displayCard("dealer");
  updateScore("dealer");
  }
  
  determineWinner();
  }
  
  else
    alert("Busted.  Press deal to start a new hand.");
  return;
}
