import { expect } from 'chai';
import { assert } from 'chai';
import Guess from '../scripts/guess'
import Card from '../scripts/cards'

describe('guess', () => {

  it('should be able to make a card', () => {
    let card1  = new Card({question: 'What is the name of the Detroit Red Wings arena?', answer: 'Joe Louis'})
  })

  it('should be able to get a card', () => {
    let card1  = new Card({question: 'What is the name of the Detroit Red Wings arena?', answer: 'Joe Louis Arena'})

    let guess = new Guess('Joe Louis Arena', card1)

    assert.equal(guess.card, card1)
  })

  it('should be able to make a guess', () => {
    let card1  = new Card({question: 'What is the name of the Detroit Red Wings arena?', answer: 'Joe Louis Arena'})

    let guess = new Guess('Joe Louis Arena', card1)

    assert.equal(guess.response, 'Joe Louis Arena')
  })

  it('should be able to see if guess.correct was not right it should return false', () => {
    let card1  = new Card({question: 'What is the name of the Detroit Red Wings arena?', answer: 'Joe Louis Arena'})

    let guess = new Guess('Pepsi Center', card1)

    assert.notEqual('Joe Louis Arena', 'Pepsi Center', false)
  })

  it('should be able to see if guess.correct was right it should return true', () => {
    let card1  = new Card({question: 'What is the name of the Detroit Red Wings arena?', answer: 'Joe Louis Arena'})

    let guess = new Guess('Joe Louis Arena', card1)

    assert.equal(guess.correct, true)
  })

  it('should have a feedback()', () => {
    let card1  = new Card({question: 'What is the name of the Detroit Red Wings arena?', answer: 'Joe Louis Arena'})

    let guess = new Guess('Joe Louis Arena', card1)

    assert.isFunction(guess.feedback)
  })

  it('if guess.correct was false the feedback() should return "Incorrect"', () => {
    let card1  = new Card({question: 'What is the name of the Detroit Red Wings arena?', answer: 'Joe Louis Arena'})

    let guess = new Guess('Pepsi Center', card1)

    assert.equal(guess.feedback(), 'Incorrect')
  })

  it('if guess.correct was true the feedback() should return "Correct!"', () => {
    let card1  = new Card({question: 'What is the name of the Detroit Red Wings arena?', answer: 'Joe Louis Arena'})

    let guess = new Guess('Joe Louis Arena', card1)

    assert.equal(guess.feedback(), 'Correct!')
  })
})
