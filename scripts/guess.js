import Card from './cards'
import Round from './round'

class Guess {
  constructor(response, card) {
    this.response = response
    this.card     = card
    this.correct  = response === card.answer ? true : false
  }

  feedback() {
    if(this.correct) {
      return 'Correct!'
      round.numberCorrect++
    } else {
      return 'Incorrect'
    }
  }
}

export default Guess
