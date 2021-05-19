/* const person = {
    firstName: 'Danial',
    lastName: 'Hosseini',
    age: 26
}

console.log(Object.entries(person));
console.log(Object.values(person));

 */

/* async function hi() {

    return 1
}

hi().then(alert) */

/* async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });

    let result = await promise; // wait until the promise resolves (*)

    alert(result); // "done!"
}

f();
 */

async function myDisplay() {
    let myPromise = new Promise(function(myResolve, myReject) {
        setTimeout(function() { myResolve("I love You !!"); }, 3000);
    });
    document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();