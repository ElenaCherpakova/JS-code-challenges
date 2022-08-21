//create a poll object
//Based on input number, update the "answer" array property.For example, if the option is 3 increase the value at 3 of the array by one.
const poll = {
  question: "What is your favorite programming language?",
  options: ["0: JavaScript", '1: Python', '2: Rust', "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    //Get answer
    const answer = Number(prompt(`${this.question}\n${this.options.join("\n")}\n(Write option number)`));

    //Register
    typeof answer === 'number' && answer.length < this.answers.length && this.answers[answer]++;
    this.displayResults()
  },
  displayResults: function (type = 'array') {
    if (type === "array") {
      console.log(this.answers)
      //Poll results are 13,2,4,1
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(", ")}`)
    }
  }
}

//using call method to set this keyword to a new object which has as answers property has that new array
poll.displayResults.call({ answers: [5, 2, 3] }, "string")

//once we click the button poll
// document.querySelector(".poll").addEventListener('click', poll.registerNewAnswer.bind(poll))


