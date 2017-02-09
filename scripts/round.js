import Guess from './guess'

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
    guess.correct ? this.numberCorrect++ : null
    return this.guesses
  }

  percentCorrect() {
    let amountOfCards  = this.guesses.length
    let correctAnswers = this.numberCorrect
    let percentage     = correctAnswers / amountOfCards * 100

    return percentage
  }
}

export default Round
