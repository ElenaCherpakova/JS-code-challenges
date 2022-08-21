'use strict'

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = { name: 'Mike', age: 34, job: 'Frontend' }
const person2 = { name: 'Elena', age: 33, job: 'Fullstack' }

//create a bind function
function bind(context, func) {
  return function (...args) {
    func.apply(context, args)
  }
}

bind(person1, logPerson)()
bind(person2, logPerson)()
