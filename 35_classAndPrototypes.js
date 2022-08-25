'use strict'
/* 1. Use constructor function to implement Car. 
2. Implement an "accelerate" method that will increase the car's speed by 10.
3. Implement a "brake" method that decrease car's speed by 5 
*/


const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
}


Car.prototype.accelerate = function () {
  this.speed +=10
  console.log(`${this.make} is going at ${this.speed} km/h`)
}

Car.prototype.brake = function () {
  this.speed -=5
  console.log(`${this.make} is going at ${this.speed} km/h`)
}

const firstCar = new Car('BMW', 110);
const secondCar = new Car("Mercedes", 100);
firstCar.accelerate()
firstCar.brake()
secondCar.accelerate()
secondCar.brake()
