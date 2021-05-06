let square = document.getElementById('square');
let angle = 0;

setInterval(() => {

    angle += 1
    square.style.transform = `rotate(${angle}deg)`;
}, 20);