import { assert } from 'chai'
import Card from '../scripts/cards'
import CardGenerator from '../scripts/cardGenerator'


let fs = require('fs')
let words = fs.readFileSync('./scripts/cards.txt', 'utf8').trim().split('\n')

const filename = "cards.txt"

describe('card generator', () => {

  it('should be able to generate a card', () => {
    let cardGenerator = new CardGenerator(filename)
  })

  it('should be able to grab the first question of the text file', () => {
    let cardGenerator = new CardGenerator(filename)

    assert.equal(cardGenerator.cards[0].question, 'What is 5 + 5?');
  })

  it('should be able to grab the first answer of the text file', () => {
    let cardGenerator = new CardGenerator(filename)

    assert.equal(cardGenerator.cards[0].answer, '10');
  })

  it('should be able to grab the second question of the text file', () => {
    let cardGenerator = new CardGenerator(filename)

    assert.equal(cardGenerator.cards[1].question, "What is yung-jhun's favorite ice cream flavor?");
  })

  it('should be able to grab the second answer of the text file', () => {
    let cardGenerator = new CardGenerator(filename)

    assert.equal(cardGenerator.cards[1].answer, 'vanilla');
  })

  it('should be able to grab the third question of the text file', () => {
    let cardGenerator = new CardGenerator(filename)

    assert.equal(cardGenerator.cards[2].question, "What is alter-nate's middle name?");
  })

  it('should be able to grab the third answer of the text file', () => {
    let cardGenerator = new CardGenerator(filename)

    assert.equal(cardGenerator.cards[2].answer, 'nobody knows');
  })

  it('should be able to grab the fourth question of the text file', () => {
    let cardGenerator = new CardGenerator(filename)

    assert.equal(cardGenerator.cards[3].question, "What cardboard cutout lives at Turing?");
  })

  it('should be able to grab the fourth answer of the text file', () => {
    let cardGenerator = new CardGenerator(filename)

    assert.equal(cardGenerator.cards[3].answer, 'Pat Whey');
  })

  it('should be able to grab the amount of cards in our text file', () => {
    let cardGenerator = new CardGenerator(filename)

    assert.equal(cardGenerator.getCardQuestionAndAnswer[0].length, 4);
  })
})
