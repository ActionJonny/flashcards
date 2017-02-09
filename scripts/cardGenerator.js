import Card from '../scripts/cards'
let fs = require('fs')
let words = fs.readFileSync('./scripts/cards.txt', 'utf8').trim().split('\n')

class CardGenerator {
  constructor() {
    this.cards = []

    this.getCardQuestionAndAnswer = words.map((value) => {
      this.key         = value.split(',')
      this.questionVal = this.key[0]
      this.answerVal   = this.key[1]
      this.someCard    = new Card({question: this.questionVal, answer: this.answerVal})
      this.cards.push(this.someCard)
      return this.cards
    })
  }
}

export default CardGenerator
