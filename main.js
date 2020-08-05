
class MixOrMatch {
  constructor(totalTime, cards) {
    this.totalTime = totalTime;
    this.cardsArray = cards;
    this.timeRemaining = totalTime;
    this.timer = document.getElementById("time-remaining");
    this.ticker = document.getElementById("flips");
  }
  // every time you start a new game, everythign resets
  startGame() {
    this.cardToCheck = null;
    this.totalClicks = 0;
    this.timeRemaining = this.totalTime;
    this.matchedCards = [];
    this.busy = true;
    this.hideCards();
    this.timer.innerText = this.timeRemaining;
    this.ticker.innerText = this.totalClicks;
    setTimeout(() => {
      this.shuffleCards(this.cardsArray);
      this.countDown = this.startCountDown();
      this.busy = false;
    }, 500);
  }
  startCountDown() {
    return setInterval(() => {
      this.timeRemaining--;
      this.timer.innerText = this.timeRemaining;
      if (this.timeRemaining === 0) this.gameOver();
    }, 1000);
  }
  gameOver() {
    clearInterval(this.countDown);
    document.getElementById("game-over-text").classList.add("visible");
  }

  victory() {
    clearInterval(this.countDown);
    document.getElementById("victory-text").classList.add("visible");
  }

  hideCards() {
    this.cardsArray.forEach((card) => {
      card.classList.remove("visible");
      card.classList.remove("matched");
    });
  }

  flipCard(card) {
    if (this.canFlipCard(card)) {
      this.totalClicks++;
      this.ticker.innerText = this.totalClicks;
      card.classList.add("visible");

      if (this.cardToCheck) {
        this.checkForCardMatch(card);
      } else {
        this.cardTocheck = card;
      }
    }
  }

  checkForCardMatch(card) {
    if (this.getCardType(card) === this.getCardType(this.cardToCheck))
      this.cardMatch(card, this.cardToCheck);
    else this.cardMisMatch(card, this.cardToCheck);

    this.cardToCheck = null;
  }

  cardMatch(card1, card2) {
    this.matchedCards.push(card1);
    this.matchedCards.push(card2);
    card1.classList.add("matched");
    card2.classList.add("matched");
    if (this.matchedCards.length === this.cardsArray.length) this.victory();
  }

  cardMisMatch(card1, card2) {
    this.busy = true;
    setTimeout(() => {
      card1.classList.remove("visible");
      card2.classList.remove("visible");
      this.busy = false;
    }, 1000);
  }

  //shuffle cards
  shuffleCards(cardsArray) {
    //loop backwords
    for (let i = cardsArray.length - 1; i > 0; i--) {
      let randIndex = Math.floor(Math.random() * (i + 1));
      cardsArray[randIndex].style.order = i;
      cardsArray[i].style.order = randIndex;
    }
  }

  getCardType(card) {
    return card.getElementsByClassName("card-value")[0].src;
  }

  canFlipCard(card) {
    //if  the statement is true then return

    return (
      !this.busy &&
      !this.matchedCards.includes(card) &&
      card !== this.cardToCheck
    );
  }
}


//when the page is loaded (ready) you can fire js
function ready() {
 
    let overlays = Array.from(document.getElementsByClassName("overlay-text"));
    let cards = Array.from(document.getElementsByClassName("card"));
     //initialize a new obj
    let game = new MixOrMatch(30, cards);

 //hide class visible to start the game
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
           overlay.classList.remove('visible');
             game.startGame();
        });
    });
//on click of card trigget eventListener
    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipCard(card);
        });
    });
}


//make sure that html and js are loaded before running js
if(document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', ready());
}else {
    ready();
}