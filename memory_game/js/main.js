var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  },
];

var cardsInPlay = [];
var score = 0;

function createBoard() {
  for (i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    cardElement.className = "card";
    document.getElementById('game-board').appendChild(cardElement);
  }
}

function resetBoard() {
  for (i = 0; i < cards.length; i++) {
    document.getElementsByClassName('card')[i].setAttribute('src', 'images/back.png');
    cardsInPlay = [];

  }
}

function checkForMatch() {
  if (cardsInPlay.length === 2) {
    if(cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
      score++
      document.getElementById('score').innerHTML = score + " wins in a row!";
    } else {
      alert("Sorry, try again");
      score = 0;
      document.getElementById('score').innerHTML = "Back to zero :(";
    }
  }
}

function flipCard(cardId) {
  var cardId = this.getAttribute('data-id');
  this.setAttribute('src', cards[cardId].cardImage);
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank)
  console.log(cards[cardId].cardImage)
  console.log(cards[cardId].suit)
  checkForMatch();
}

createBoard();
