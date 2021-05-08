const back = document.getElementById('back');
const forward = document.getElementById('forward');
const go = document.getElementById('go');

back.addEventListener('click', () => {
    history.back();
})


forward.addEventListener('click', () => {
    history.forward();
})


go.addEventListener('click', () => {
    history.go(2);
})