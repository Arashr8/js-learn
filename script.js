let car = new Object()
car.speed = 100;
car.name = 'benz';
car.year = 2000;
car.start = function() {
    console.log('started');
}
car.break = function() {
    console.log('slow');
}
console.log('speed is ' + car.speed);
console.log('name is ' + car.name);
console.log('year is ' + car.year);

car.start()
car.break()