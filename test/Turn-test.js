const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
    let turn1;
    let card1;
    let turn2;
    beforeEach(() => {
        card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        turn1 = new Turn('object', card1);
        turn2 = new Turn('function', card1);
    });

    it('should be a function', () => {
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', () => {
        expect(turn1).to.be.an.instanceOf(Turn);
    });

    it('should store a card', () => {
       let card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
       let turn1 = new Turn('object', card1);

       expect(turn1.card).to.equal(card1);
       expect(turn1.guess).to.equal('object');
    });

    it('should store a guess', () => {
        expect(turn1.guess).to.equal('object');
    });

    it('should return the guess', () => {

        turn1.returnGuess();

        expect(turn1.returnGuess()).to.equal('object');
    });

    it('should return the card', () => {

        turn1.returnCard();

        expect(turn1.returnCard()).to.equal(card1);
    });

    it('should evaluate the user\'s correct guess', () => {
        expect(turn1.evaluateGuess()).to.equal(true);
    });

    it('should evaluate the user\'s incorrect guess', () => {
        expect(turn2.evaluateGuess()).to.equal(false);
    });

    it('should give correct feedback', () => {
        
        turn1.evaluateGuess();
        turn1.giveFeedback();

        expect(turn1.giveFeedback()).to.equal('correct!');
    });

    it('should give incorrect feedback', () => {
        
        turn1.evaluateGuess();
        turn1.giveFeedback();

        expect(turn2.giveFeedback()).to.equal('incorrect!');
    });

})