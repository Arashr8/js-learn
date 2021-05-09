const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
let adress
openBtn.addEventListener('click', () => {
    adress = open('https://github.com/');
})

closeBtn.addEventListener('click', () => {
    adress.close();
})