//make sure that html and js are loaded before running js
if(document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', ready());
}else {
    ready();
}
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
    }
}


//when the page is loaded (ready) you can fire js
function ready() {
 
    let overlays = Array.from(document.getElementsByClassName("overlay-text"));
    let cards = Array.from(document.getElementsByClassName("card"));

 //hide class visible to start the game
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
           overlay.classList.remove('visible');
        });
    })
//on click of card trigget eventListener
    cards.forEach(card => {
        card.addEventListener('click', () => {

        });
    });
}

