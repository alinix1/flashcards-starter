const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.cards = null;
    this.currentRound = null;
  }
  start() {
    this.cards = prototypeQuestions.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)
    });

    let deck = new Deck(this.cards)
    this.printMessage(deck);
    this.currentRound = new Round(deck)
    this.printQuestion(this.currentRound)
    return this.cards
  };

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  };

  printQuestion(round) {
      util.main(round);
  };
}

module.exports = Game;