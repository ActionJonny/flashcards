class Guess {
  constructor(response, card) {
    this.response = response
    this.card     = card
    this.correct  = response === card.answer ? true : false
  }

  feedback() {
    return this.correct ? 'Correct!' : 'Incorrect'
  }
}

export default Guess
