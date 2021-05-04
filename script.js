/* function test() {
    a = 10
}
test()

console.log(a);
console.log(window.a); */

function test() {
    window.a = 10
    window.b = function() {
        console.log('salam');
    }
}
test()
console.log(a);
b()