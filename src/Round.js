const Turn = require('../src/Turn');

class Round {
    constructor(deck) {
        this.deck = deck;
        this.currentCard = deck.cards[0];
        this.turns = 0;
        this.incorrectGuesses = [];

    }
    returnCurrentCard() {
        return this.currentCard;
    }
    takeTurn(guess) {
        let startTurn = new Turn(guess, this.currentCard);
        this.turns++; 

        if(!startTurn.evaluateGuess()) {
            this.incorrectGuesses.push(this.currentCard.id);
        }
        this.currentCard = this.deck.cards[this.turns];
        this.returnCurrentCard();
        return startTurn.giveFeedback();
    }
    calculatePercentCorrect() {
        return Math.round(((this.turns - this.incorrectGuesses.length)/this.turns) * 100);

    };

}

module.exports = Round;