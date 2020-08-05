
class MixOrMatch{
    constructor(totalTime, cards) {
     this.totalTime = totalTime;
     this.cardsArray = cards;
     this.timeRemaining = totalTime;
     this.timer = document.getElementById('time-remaining');
     this.ticker = document.getElementById('flips');
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
            this.shuffleCards();
            this.countdown = this.startCountdown();
            this.busy = false;
        }, 500);

    }
    
    flipCard(card) {
        if(this.canFlipCard(card)) {
        this.totalClicks++;
        this.ticker.innerText = this.totalClicks;
        card.classList.add('visible');
        }
    }
     //shuffle cards
     shuffleCards() {
         //loop backwords 
         for(let i = this.cardsArray.length - 1; i > 0; i--) {
           let randIndex = Math.floor(Math.random() * (i + 1));
           this.cardsArray[randIndex].style.order = i;
           this.cardsArray[i].style.order = randIndex;
         }
     }


    canFlipCard(card){
      //if  the statement is true then return 
      return true;
      //return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }
}


//when the page is loaded (ready) you can fire js
function ready() {
 
    let overlays = Array.from(document.getElementsByClassName("overlay-text"));
    let cards = Array.from(document.getElementsByClassName("card"));
     //initialize a new obj
    let game = new MixOrMatch(100, cards);

 //hide class visible to start the game
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
           overlay.classList.remove('visible');
             game.startGame();
        });
    })
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