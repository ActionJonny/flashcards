import { assert } from 'chai';
import Deck from '../scripts/deck'
import Card from '../scripts/cards'

describe('deck', () => {

  it('should be able to make a deck', () => {
    var deck = new Deck()
  })

  it('should be able to accept a card', () => {
    let card3  = new Card({question: 'Who wore number 19 and had their number retired?', answer: 'Steve Yzerman'})

    let deck = new Deck([card3])

    assert(deck.cards.length, 1)
  })

  it('should be able to see how many cards are in a deck', () => {
    let card1  = new Card({question: 'What is the name of the Detroit Red Wings arena?', answer: 'Joe Louis'})
    let card2  = new Card({question: 'When was the Detroit Red Wings last Stanley Cup win?', answer: '2007'})
    let card3  = new Card({question: 'Who wore number 19 and had their number retired?', answer: 'Steve Yzerman'})

    let deck = new Deck([card1, card2, card3])

    assert(deck.count(), 3)
  })
})
