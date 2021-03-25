const main = document.getElementById('main')
main.addEventListener('touchmove', handler);

function handler(event) {
    console.log(event.touches.length);

}