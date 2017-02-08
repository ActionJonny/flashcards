import { expect } from 'chai';
import Card from '../scripts/cards'

describe('cards', () => {

  it('should be able to create a new card', () => {
    var card = new Card({question: 'How good are the Detroit Red Wings', answer: 'Not very good'})
  })

  it('should accept a question', () => {
    var card = new Card({question: 'How good are the Detroit Red Wings', answer: 'Not very good'})
    expect(card.question, 'How good are the Detroit Red Wings')
  })

  it('should accept a answer', () => {
    var card = new Card({question: 'How good are the Detroit Red Wings', answer: 'Not very good'})
    expect(card.answer, 'Not very good')
  })

})
