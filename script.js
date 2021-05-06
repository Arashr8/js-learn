const set = document.getElementById('set');
const clear = document.getElementById('clear');
const text = document.querySelector('p')
let count = 0;
let timer

set.addEventListener('click', () => {
    timer = setInterval(() => {
        count++
        text.innerHTML = count;
    }, 1000)

})

clear.addEventListener('click', () => {
    clearInterval(timer);
})