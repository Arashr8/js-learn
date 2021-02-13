/* let a = 20
let b = a
b = 50
console.log(a);
console.log(b); */
/* 
let a = {
    m: 10,
    n: 20,
};
let b = a
b.m = 40
console.log(a.m);
console.log(b.m); */

/* let a = {
    m: 10,
    n: 20,
};
let b = Object.assign({}, a)
b.m = 40
console.log(a.m);
console.log(b.m); */

let a = {
    m: 10,
    n: 20,
};

let b = {...a }
b.m = 40
console.log(a.m);
console.log(b.m);