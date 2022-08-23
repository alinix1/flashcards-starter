const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
    let round;
    let deck;
    let turn;
    let card1;
    let card2;
    let card3;

    beforeEach(() => {
        card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ['object', 'array', 'function'], 'object');
        card2 = new Card(2, "What is a comma-separated list of related values?",  ["array", "object", "function"], 'array');
        card3 = new Card(3,  "What type of prototype method directly modifies the existing array?",  ["mutator method", "accessor method", "iteration method"], 'mutator method');
        deck = new Deck([card1, card2, card3]);
        round = new Round(deck);
    });

    it('should be a function', () => {
        expect(Round).to.be.a('function');
    });

    it('should be an instance of Round', () => {
        expect(round).to.be.an.instanceof(Round);
    });

    it('should return the current card', () => {
        expect(round.returnCurrentCard()).to.be.a('object')
    })

    it('should make the first card in the deck the current card by default', () => {
        expect(round.currentCard).to.equal(card1);
    });

    it('should take a turn', () => {
    });

    it('should evaluate guesses and give correct feedback', () => {
        turn = round.takeTurn('object');

        expect(turn).to.equal('correct!');
        expect(round.turns).to.equal(1);
    });

    it('should evaluate guesses and give incorrect feedback', () => {
        turn = round.takeTurn('array');

        expect(turn).to.equal('incorrect!');
        expect(round.turns).to.equal(1);

    });

    it('should calculate and return the percentage of correct guesses', () => {
        round.takeTurn('object');
        round.takeTurn('array');
        round.takeTurn('iteration method');

        expect(round.calculatePercentCorrect()).to.equal(67);
    });
});