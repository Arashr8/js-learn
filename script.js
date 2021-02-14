function Car(color, maxSpeed) {
    this.color = color;
    this.maxSpeed = maxSpeed;
}
let car1 = new Car('red', 200)
let car2 = new Car('blue', 300)
console.log(car1);
console.log(car2);
console.log(typeof car1);

console.log(car1 instanceof Car);
console.log(car1 instanceof Object);
console.log(car1 instanceof Array);