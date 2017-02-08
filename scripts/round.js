import Card from './cards'
import Guess from './guess'
import Deck from './deck'

class Round {
  constructor(deck) {
    this.deck          = deck
    this.guesses       = []
    this.numberCorrect = 0
  }

  currentCard() {
    return this.deck.cards[0]
  }

  recordGuess(response, card) {
    let guess = new Guess(response, card)
    this.guesses.push(guess)
    return this.guesses
  }
}

export default Round
