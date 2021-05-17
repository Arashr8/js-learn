/* class Car {

    constractor(color, model) {
        this.color = colorName;
        this.model = models;
    }
    getColor() { return this.color }
}
let bmw = new Car('red', 'bmw');
let pride = new Car('blue', 'pride');

console.log(pride.getColor); */

class Rectangle {
    constructor(height, width) {
            this.height = height;
            this.width = width;
        }
        // Getter
    get area() {
            return this.calcArea();
        }
        // Method
    calcArea() {
        return this.height * this.width;
    }

    hi() {
        return 'salam'
    }
}

const circle = new Rectangle(10, 10)

const square = new Rectangle(10, 10);

console.log(square.area);
console.log(square.hi());
console.log(circle.hi());