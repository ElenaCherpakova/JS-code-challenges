'use strict'


class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10
    console.log(`${this.make} is going at ${this.speed} km/h`)
  }
  brake() {
    this.speed -= 5
    console.log(`${this.make} is going at ${this.speed} km/h`)
  }
  get speedUS() {
    return this.speed / 1.6
  }
  set speedUS(speed) {
    return this.speed = speed * 1.6;
  }
}



const bmw = new Car('BMW', 110);
const mercedes = new Car("Mercedes", 100);
bmw.accelerate()
bmw.brake()
mercedes.accelerate()
mercedes.brake()
bmw.speedUS = 50
console.log(mercedes.speedUS)
console.log(bmw.speedUS)
console.log(bmw)