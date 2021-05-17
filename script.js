const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

let id = Symbol('id');
person[id] = 140353;
// Now Person[id] = 140353
// but person.id is still undefined

console.log(Symbol('id') == Symbol('id'));

function myFunction(x, y = 10) {
    // y is 10 if not passed or undefined
    return x + y;
}
myFunction(5); // will return 15




function sum(...args) {
    let total = 0;
    for (let arg of args)
        total += arg;
    return total;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);