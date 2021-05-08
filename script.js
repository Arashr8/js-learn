const total = document.getElementById('total');
const available = document.getElementById('available');
const browser = document.getElementById('browser');
const viewport = document.getElementById('viewport');

total.addEventListener('click', () => {
    console.log(screen.width);
    console.log(screen.height);
})

available.addEventListener('click', () => {
    console.log(screen.availWidth);
    console.log(screen.availHeight);
})

browser.addEventListener('click', () => {
    console.log(window.outerWidth);
    console.log(window.outerHeight);
})

viewport.addEventListener('click', () => {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
})