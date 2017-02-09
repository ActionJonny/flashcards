import { assert } from 'chai'
import Guess from '../scripts/guess'
import Card from '../scripts/cards'
import Deck from '../scripts/deck'
import Round from '../scripts/round'
import CardGenerator from '../scripts/cardGenerator'

describe('round', () => {

  it('should be able to make a deck', () => {
    let card1  = new Card({question: 'When was the Detroit Red Wings last Stanley Cup win?', answer: '2007'})
    let card2  = new Card({question: 'Who wore number 19 and had their number retired?', answer: 'Steve Yzerman'})

    let deck = new Deck([card1, card2])

    let round = new Round(deck)

    assert.instanceOf(deck, Deck, card1, card2)
  })

  it('round.guesses should be an array', () => {
    let deck = new Deck([])

    let round = new Round(deck)

    assert.isArray(round.guesses)
  })

  it('should be able to make a have a deck in a round', () => {
    let card1  = new Card({question: 'When was the Detroit Red Wings last Stanley Cup win?', answer: '2007'})
    let card2  = new Card({question: 'Who wore number 19 and had their number retired?', answer: 'Steve Yzerman'})

    let deck = new Deck([card1, card2])

    let round = new Round(deck)

    assert.equal(round.currentCard(), card1)
  })

  it('should be able take a response in', () => {
    let card1  = new Card({question: 'When was the Detroit Red Wings last Stanley Cup win?', answer: '2007'})
    let card2  = new Card({question: 'Who wore number 19 and had their number retired?', answer: 'Steve Yzerman'})

    let deck = new Deck([card1, card2])

    let round = new Round(deck)


    assert(round.recordGuess('2007', card1), '2007')
  })

  it('should be able to keep track of the amount of guesses', () => {
    let card1  = new Card({question: 'When was the Detroit Red Wings last Stanley Cup win?', answer: '2007'})
    let card2  = new Card({question: 'Who wore number 19 and had their number retired?', answer: 'Steve Yzerman'})

    let deck = new Deck([card1, card2])

    let round = new Round(deck)

    round.recordGuess('2007', card1)

    assert.equal(round.guesses.length, 1)
  })


    it('should be able to keep track of the amount of guesses', () => {
      let card1  = new Card({question: 'When was the Detroit Red Wings last Stanley Cup win?', answer: '2007'})
      let card2  = new Card({question: 'Who wore number 19 and had their number retired?', answer: 'Steve Yzerman'})

      let deck = new Deck([card1, card2])

      let round = new Round(deck)

      round.recordGuess('2007', card1)
      round.recordGuess('Steve Yzerman', card2)

      assert.equal(round.guesses.length, 2)
    })

    it('should be able to answer if the guess was correct', () => {
      let card1  = new Card({question: 'When was the Detroit Red Wings last Stanley Cup win?', answer: '2007'})
      let card2  = new Card({question: 'Who wore number 19 and had their number retired?', answer: 'Steve Yzerman'})

      let deck = new Deck([card1, card2])

      let round = new Round(deck)

      round.recordGuess('2007', card1)
      round.recordGuess('Steve Yzerman', card2)

      assert.equal(round.guesses[0].feedback(), 'Correct!')
    })

    it('should be able to answer if the guess was incorrect', () => {
      let card1  = new Card({question: 'When was the Detroit Red Wings last Stanley Cup win?', answer: '2007'})
      let card2  = new Card({question: 'Who wore number 19 and had their number retired?', answer: 'Steve Yzerman'})

      let deck = new Deck([card1, card2])

      let round = new Round(deck)

      round.recordGuess('2007', card1)
      round.recordGuess('Gordie Howe', card2)

      assert.equal(round.guesses[1].feedback(), 'Incorrect')
    })

    it('should be able to count correct answers', () => {
      let card1  = new Card({question: 'When was the Detroit Red Wings last Stanley Cup win?', answer: '2007'})
      let card2  = new Card({question: 'Who wore number 19 and had their number retired?', answer: 'Steve Yzerman'})

      let deck = new Deck([card1, card2])

      let round = new Round(deck)

      round.recordGuess('2007', card1)
      round.recordGuess('Steve Yzerman', card2)
      assert.equal(round.numberCorrect, 2)
    })

    it('should be able to see the length of guesses', () => {
      let card1  = new Card({question: 'When was the Detroit Red Wings last Stanley Cup win?', answer: '2007'})
      let card2  = new Card({question: 'Who wore number 19 and had their number retired?', answer: 'Steve Yzerman'})

      let deck = new Deck([card1, card2])

      let round = new Round(deck)

      round.recordGuess('2007', card1)
      round.recordGuess('Gordie Howe', card2)

      assert.equal(round.guesses.length, 2)
    })

    it('should be able to see the length of correct answers', () => {
      let card1  = new Card({question: 'When was the Detroit Red Wings last Stanley Cup win?', answer: '2007'})
      let card2  = new Card({question: 'Who wore number 19 and had their number retired?', answer: 'Steve Yzerman'})

      let deck = new Deck([card1, card2])

      let round = new Round(deck)

      round.recordGuess('2007', card1)
      round.recordGuess('Gordie Howe', card2)

      assert.equal(round.numberCorrect, 1)
    })

    it('should be able to count correct answers', () => {
      let card1  = new Card({question: 'When was the Detroit Red Wings last Stanley Cup win?', answer: '2007'})
      let card2  = new Card({question: 'Who wore number 19 and had their number retired?', answer: 'Steve Yzerman'})

      let deck = new Deck([card1, card2])

      let round = new Round(deck)

      round.recordGuess('2007', card1)
      round.recordGuess('Gordie Howe', card2)

      assert.equal(round.percentCorrect(), 50)
    })
})
