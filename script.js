const once = document.getElementById('once');
const repeat = document.getElementById('repeat');

once.addEventListener('click', () => {
    setTimeout(() => {
        alert('Hi')

    }, 3000);
})


repeat.addEventListener('click', () => {
    setTimeout(myfunc, 2000);
})

function myfunc() {
    alert('Hi')
    setTimeout(myfunc, 2000);
}