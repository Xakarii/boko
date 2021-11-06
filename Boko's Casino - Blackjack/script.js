///** This was created by Joshua Lopez */
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack',
  'Ten', 'Nine', 'Eight', 'Seven', 'Six',
  'Five', 'Four', 'Three', 'Two'  //removed the one value since Ace is handled separately in getScore, One of <suit> was showing up -MM
];

let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');
let board1 = document.getElementById ('player_board');
let board2 = document.getElementById ('dealer_board');

hitButton.style.display = 'none';
stayButton.style.display = 'none';

let gameStart = false,
  gameOver = false,
  playWon = false,
  dealerCards = [],
  playerCards = [],
  dealerScore = 0,
  playerScore = 0,
  cardImgCount = 0,
  gameCount = -1,
  dealerScoreVis = 0,
  bet = 10,
  cash = 100,
  deck = [];

newGameButton.addEventListener('click', function() {
  gameStarted = true;
  gameOver = false;
  playerWon = false;
  gameCount++;
  if (cash <= 0) {
    if (confirm("You are out of cash.  Would you like to visit an ATM? \nPress ok to withdraw 100 more dollars and play again!")) {
        alert("Good luck! I'm sure you can beat the house edge this time!");
        cash+=100;
    } else {
        alert("Perhaps you would enjoy a game with higher stakes?");
        location.href = 'http://casinoboko.com/phaser_demo/index.html';
    }
  }

  //setting the variables that will hold the div id's dealer_board and Player_board to
  //be used in a loop to remove any existing cards on the board.  Vars are redundant, 
  //can be replaced later by board1 and board2 or vice versa
  var dboard = document.getElementById("dealer_board");
  var pboard = document.getElementById("player_board");
  console.log(dboard.childNodes.length);
    for (let i = 0; i < dealerCards.length; i++) {
      console.log("dboard: " + dboard.childNodes.length);
      console.log("\ndealer cards: " + dealerCards.length);
      dboard.removeChild(dboard.childNodes[0]); 
      //dboard.removeChild(dboard.childNodes[dboard.childNodes.length]);
    }
    for (let i = 0; i < playerCards.length; i++) {
      console.log("pboard: " + pboard.childNodes.length);
      console.log("\nplayer cards: " + playerCards.length);
      pboard.removeChild(pboard.childNodes[0]); 
      //dboard.removeChild(dboard.childNodes[dboard.childNodes.length]);
    }

  deck = createDeck();
  shuffleDeck(deck);
  dealerCards = [getNextCard(), getNextCard()];
  playerCards = [getNextCard(), getNextCard()];
  newGameButton.style.display = 'none';
  hitButton.style.display = 'inline';
  stayButton.style.display = 'inline';
  showStatus();

 
  const img = new Image(130, 150); // width, height
  img.src = getCardImage(playerCards[playerCards.length-2]);
  document.getElementById("player_board").appendChild(img);
  const img2 = new Image(130, 150); // width, height
  img2.src = getCardImage(playerCards[playerCards.length-1]);
  document.getElementById("player_board").appendChild(img2);


  const img3 = new Image(130, 150); // width, height
  img3.src = "../assets/cards/Cards _large/card_back.png";
  document.getElementById("dealer_board").appendChild(img3);
  const img4 = new Image(130, 150); // width, height
  img4.src = getCardImage(dealerCards[dealerCards.length-1]);
  document.getElementById("dealer_board").appendChild(img4);
  
})

/** This was created by Alexander Martin */
function createDeck() {
  let deck = []
  for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
      let card = {
        suit: suits[suitIdx],
        value: values[valueIdx]
      }
      deck.push(card);
    }
  }
  return deck;
}

function shuffleDeck(deck){
  for(let i=0; i<deck.length; i++)
  {
    let swapIdx = Math.trunc(Math.random() *deck.length);
    let tmp = deck[swapIdx];
    deck[swapIdx] = deck[i];
    deck[i] = tmp; 
  }
}

hitButton.addEventListener('click', function(){
  playerCards.push(getNextCard());
  checkForEndOfGame();
  showStatus();
  const img = new Image(130, 150); // width, height
  img.src = getCardImage(playerCards[playerCards.length-1]);
  img.id = "img";
  document.getElementById("player_board").appendChild(img);
});

stayButton.addEventListener('click', function(){
  gameOver = true;
  checkForEndOfGame();
  showStatus();
});

function checkForEndOfGame(){
  updateScores();
  
  if(gameOver){
    while(dealerScore<playerScore &&
          playerScore <=21 &&
          dealerScore <=21){
            dealerCards.push(getNextCard());
            const img = new Image(130, 150); // width, height
            img.src = getCardImage(dealerCards[dealerCards.length-1]);
            img.id = "img";
            document.getElementById("dealer_board").appendChild(img);
            updateScores();
    }
    //document.getElementById("dealer_board").removeChild(childNodes[0]); 
    var dboard = document.getElementById("dealer_board");
    dboard.removeChild(dboard.childNodes[0]); 
    const img = new Image(130, 150); // width, height
    img.src = getCardImage(dealerCards[0]);
    img.id = "img";
    document.getElementById("dealer_board").prepend(img);
  }
    
    if(playerScore>21){
      playerWon=false;
      gameOver = true;
    }
    
    else if(dealerScore>21){
      playerWon = true;
      gameOver = true;
    }
    
    else if(gameOver){
      if(playerScore>dealerScore){
        playerWon = true;
      }
      else{
        playerWon = false;
      }
    }
}

function getCardString(card) {
  return card.value + " of " + card.suit;
}
function getCardNumericValue(card){
  switch(card.value){
    case 'Ace':
      return 1;
    case 'Two':
      return 2;
    case 'Three':
      return 3;
    case 'Four':
      return 4;
    case 'Five':
      return 5;
    case 'Six':
      return 6;
    case 'Seven':
      return 7;
    case 'Eight':
      return 8;
    case 'Nine':
      return 9;
    default:
      return 10; 
  }
}
function showStatus()
{
  if(!gameStarted)
  {
    textArea.innerText = 'Welcome to Blackjack!';
    return; 
  }
  
  let dealerCardString = '';
  let dealerCardStringVis = getCardString(dealerCards[1]) + '\n';
  for(let i=0; i<dealerCards.length; i++)
  {
    dealerCardString += getCardString(dealerCards[i]) + '\n';
  }
  let playerCardString='';
  for(let i=0; i<playerCards.length; i++)
  {
    playerCardString += getCardString(playerCards[i]) + '\n';
  }
  
  updateScores();
  
  if (gameOver) {
  textArea.innerText = 'Dealer has:\n' +
                        dealerCardString + 
                        '(score: ' + dealerScore + ')\n\n' +
                        
                        'You have:\n' +
                        playerCardString + 
                        '(score: ' + playerScore + ')\n\n';
  }
  else {
    textArea.innerText = 'Dealer has:\n' +
                        dealerCardStringVis + 
                        '(score: ' + dealerScoreVis + ')\n\n' +
                        
                        'You have:\n' +
                        playerCardString + 
                        '(score: ' + playerScore + ')\n\n';
  }

                        
  if(gameOver){
    if(playerWon)
    {
      let wonAmount = bet;
      cash += bet;
      let winString = "YOU WIN! " + "  Cash remaining: " + cash + " dollars.";
      textArea.innerText += winString;
    }
    else{
      let loseAmount = bet;
      cash -= bet;
      let loseString =  "DEALER WINS! " + "  Cash remaining: " + cash + " dollars.";
      textArea.innerText += loseString;
    }
    //dboard.removeChild(dboard.childNodes[0]); 
    //document.getElementById("dealer_board").prepend(getCardImage(dealerCards[0]));


    newGameButton.style.display = 'inline';
    hitButton.style.display = 'none';
    stayButton.style.display = 'none';
    
  }
}
    /*Changed the logic so that the game doesn't end early
      if you get an Ace, previously the game would stop
      incrementing score if Ace was drawn. Also made
      getScore handle multiple aces correctly
      //Contributed by Michael Mondragon
    */
function getScore(cardArray){
  let score = 0;
  let aceCount = 0;
  let hasAce = false;
  for(let i=0; i<cardArray.length; i++){
    let card = cardArray[i];
    if(card.value != 'Ace'){
    score += getCardNumericValue(card);
    }
    else if (card.value == 'Ace'){
      hasAce = true;
      aceCount++;
      score = score+11;
    }
    while(aceCount > 0 && score > 21){
        score = score-10;
        aceCount--;
      } 
    }

   return score; 
}

function updateScores(){
  dealerScoreVis = getScore(dealerCards) - getCardNumericValue(dealerCards[0]);
  dealerScore = getScore(dealerCards);
  console.log("Dealer score is: " + getScore(dealerCards));
  console.log("Plaeyer score is: " + getScore(playerCards));
  playerScore = getScore(playerCards); 
}


function getNextCard() {
  return deck.shift();
}


function getCardImage(card) {
  let cardImage = "";
  if (card.value == 'Ace' && card.suit == 'Spades'){
      cardImage = "../assets/cards/Cards _large/card_spades_A.png";
  }
  else if (card.value == 'Two' && card.suit == 'Spades') {
    cardImage = "../assets/cards/Cards _large/card_spades_02.png";
  }
  else if (card.value == 'Three' && card.suit == 'Spades') {
    cardImage = "../assets/cards/Cards _large/card_spades_03.png";
  }
  else if (card.value == 'Four' && card.suit == 'Spades') {
    cardImage = "../assets/cards/Cards _large/card_spades_04.png";
  }
  else if (card.value == 'Five' && card.suit == 'Spades') {
    cardImage = "../assets/cards/Cards _large/card_spades_05.png";
  }
  else if (card.value == 'Six' && card.suit == 'Spades') {
    cardImage = "../assets/cards/Cards _large/card_spades_06.png";
  }
  else if (card.value == 'Seven' && card.suit == 'Spades') {
    cardImage = "../assets/cards/Cards _large/card_spades_07.png";
  }
  else if (card.value == 'Eight' && card.suit == 'Spades') {
    cardImage = "../assets/cards/Cards _large/card_spades_08.png";
  }
  else if (card.value == 'Nine' && card.suit == 'Spades') {
    cardImage = "../assets/cards/Cards _large/card_spades_09.png";
  }
  else if (card.value == 'Ten' && card.suit == 'Spades') {
    cardImage = "../assets/cards/Cards _large/card_spades_10.png";
  }
  else if (card.value == 'Jack' && card.suit == 'Spades') {
    cardImage = "../assets/cards/Cards _large/card_spades_J.png";
  }
  else if (card.value == 'Queen' && card.suit == 'Spades') {
    cardImage = "../assets/cards/Cards _large/card_spades_Q.png";
  }
  else if (card.value == 'King' && card.suit == 'Spades') {
    cardImage = "../assets/cards/Cards _large/card_spades_K.png";
  }

  else if (card.value == 'Ace' && card.suit == 'Hearts'){
    cardImage = "../assets/cards/Cards _large/card_hearts_A.png";
  }
  else if (card.value == 'Two' && card.suit == 'Hearts') {
    cardImage = "../assets/cards/Cards _large/card_hearts_02.png";
  }
  else if (card.value == 'Three' && card.suit == 'Hearts') {
    cardImage = "../assets/cards/Cards _large/card_hearts_03.png";
  }
  else if (card.value == 'Four' && card.suit == 'Hearts') {
    cardImage = "../assets/cards/Cards _large/card_hearts_04.png";
  }
  else if (card.value == 'Five' && card.suit == 'Hearts') {
    cardImage = "../assets/cards/Cards _large/card_hearts_05.png";
  }
  else if (card.value == 'Six' && card.suit == 'Hearts') {
    cardImage = "../assets/cards/Cards _large/card_hearts_06.png";
  }
  else if (card.value == 'Seven' && card.suit == 'Hearts') {
    cardImage = "../assets/cards/Cards _large/card_hearts_07.png";
  }
  else if (card.value == 'Eight' && card.suit == 'Hearts') {
   cardImage = "../assets/cards/Cards _large/card_hearts_08.png";
  }
  else if (card.value == 'Nine' && card.suit == 'Hearts') {
    cardImage = "../assets/cards/Cards _large/card_hearts_09.png";
  }
  else if (card.value == 'Ten' && card.suit == 'Hearts') {
    cardImage = "../assets/cards/Cards _large/card_hearts_10.png";  
  }
  else if (card.value == 'Jack' && card.suit == 'Hearts') {
    cardImage = "../assets/cards/Cards _large/card_hearts_J.png";
  }
  else if (card.value == 'Queen' && card.suit == 'Hearts') {
    cardImage = "../assets/cards/Cards _large/card_hearts_Q.png";
  }
  else if (card.value == 'King' && card.suit == 'Hearts') {
    cardImage = "../assets/cards/Cards _large/card_hearts_K.png";
  }

    
  else if (card.value == 'Ace' && card.suit == 'Diamonds'){
    cardImage = "../assets/cards/Cards _large/card_diamonds_A.png";
  }
  else if (card.value == 'Two' && card.suit == 'Diamonds') {
    cardImage = "../assets/cards/Cards _large/card_diamonds_02.png";
  }
  else if (card.value == 'Three' && card.suit == 'Diamonds') {
    cardImage = "../assets/cards/Cards _large/card_diamonds_03.png";
  }
  else if (card.value == 'Four' && card.suit == 'Diamonds') {
    cardImage = "../assets/cards/Cards _large/card_diamonds_04.png";
  }
  else if (card.value == 'Five' && card.suit == 'Diamonds') {
    cardImage = "../assets/cards/Cards _large/card_diamonds_05.png";
  }
  else if (card.value == 'Six' && card.suit == 'Diamonds') {
    cardImage = "../assets/cards/Cards _large/card_diamonds_06.png";
  }
  else if (card.value == 'Seven' && card.suit == 'Diamonds') {
    cardImage = "../assets/cards/Cards _large/card_diamonds_07.png";
  }
  else if (card.value == 'Eight' && card.suit == 'Diamonds') {
   cardImage = "../assets/cards/Cards _large/card_diamonds_08.png";
  }
  else if (card.value == 'Nine' && card.suit == 'Diamonds') {
    cardImage = "../assets/cards/Cards _large/card_diamonds_09.png";
  }
  else if (card.value == 'Ten' && card.suit == 'Diamonds') {
    cardImage = "../assets/cards/Cards _large/card_diamonds_10.png";  
  }
  else if (card.value == 'Jack' && card.suit == 'Diamonds') {
    cardImage = "../assets/cards/Cards _large/card_diamonds_J.png";
  }
  else if (card.value == 'Queen' && card.suit == 'Diamonds') {
    cardImage = "../assets/cards/Cards _large/card_diamonds_Q.png";
  }
  else if (card.value == 'King' && card.suit == 'Diamonds') {
    cardImage = "../assets/cards/Cards _large/card_diamonds_K.png";
  }

    
  else if (card.value == 'Ace' && card.suit == 'Clubs'){
    cardImage = "../assets/cards/Cards _large/card_clubs_A.png";
  }
  else if (card.value == 'Two' && card.suit == 'Clubs') {
    cardImage = "../assets/cards/Cards _large/card_clubs_02.png";
  }
  else if (card.value == 'Three' && card.suit == 'Clubs') {
    cardImage = "../assets/cards/Cards _large/card_clubs_03.png";
  }
  else if (card.value == 'Four' && card.suit == 'Clubs') {
    cardImage = "../assets/cards/Cards _large/card_clubs_04.png";
  }
  else if (card.value == 'Five' && card.suit == 'Clubs') {
    cardImage = "../assets/cards/Cards _large/card_clubs_05.png";
  }
  else if (card.value == 'Six' && card.suit == 'Clubs') {
    cardImage = "../assets/cards/Cards _large/card_clubs_06.png";
  }
  else if (card.value == 'Seven' && card.suit == 'Clubs') {
    cardImage = "../assets/cards/Cards _large/card_clubs_07.png";
  }
  else if (card.value == 'Eight' && card.suit == 'Clubs') {
   cardImage = "../assets/cards/Cards _large/card_clubs_08.png";
  }
  else if (card.value == 'Nine' && card.suit == 'Clubs') {
    cardImage = "../assets/cards/Cards _large/card_clubs_09.png";
  }
  else if (card.value == 'Ten' && card.suit == 'Clubs') {
    cardImage = "../assets/cards/Cards _large/card_clubs_10.png";  
  }
  else if (card.value == 'Jack' && card.suit == 'Clubs') {
    cardImage = "../assets/cards/Cards _large/card_clubs_J.png";
  }
  else if (card.value == 'Queen' && card.suit == 'Clubs') {
    cardImage = "../assets/cards/Cards _large/card_clubs_Q.png";
  }
  else if (card.value == 'King' && card.suit == 'Clubs') {
    cardImage = "../assets/cards/Cards _large/card_clubs_K.png";
  }

  else {
    cardImage = "../assets/cards/Cards _large/card_back.png";
  }
  
  return cardImage;
}
