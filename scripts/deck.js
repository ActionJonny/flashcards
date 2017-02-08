import Card from './cards'
import Guess from './guess'

class Deck {
  constructor(card) {
    this.cards = card
  }

  count() {
    return this.cards.length
  }
}

export default Deck
