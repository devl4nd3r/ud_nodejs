const readline = require("readline")
function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  var exam1,
    exam2,
    exam3 = 0
  rl.question("Exam1", (answer) => {
    return (exam1 = answer)
  })
  rl.question("Exam2", (answer) => {
    exam2 = answer
  })
  rl.question("Exam3", (answer) => {
    exam3 = answer
  })

  console.log(Exams.average(exam1, exam2, exam3))
}

class Exams {
  constructor(note) {
    this.note = note
  }

  static average(...notes) {
    let av = 0
    for (let note of notes) {
      av += note
    }
    return av / notes.length
  }
}

main()
