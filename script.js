function creatCar(color, maxSpeed) {
    return {
        color,
        maxSpeed,
        stop() {
            console.log(stop);
        }
    }

}
let car1 = creatCar('black', 300)
let car2 = creatCar('red', 200)

console.log(car1);
console.log(car2);