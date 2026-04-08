export default class Konami {
  constructor(callback) {
    this.callback = callback
    this.sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
    this.inputSequence = []

    document.addEventListener('keydown', (e) => {
      this.inputSequence.push(e.key)
      this.inputSequence = this.inputSequence.slice(-this.sequence.length)

      if (this.inputSequence.join(',') === this.sequence.join(',')) {
        this.callback()
        this.inputSequence = []
      }
    })
  }
}
