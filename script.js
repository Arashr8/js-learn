const href = document.getElementById('href');
const google = document.getElementById('google');
const assign = document.getElementById('assign');
const replace = document.getElementById('replace')
const reload = document.getElementById('reload');
const details = document.getElementById('details');
const p = document.querySelector('p');

href.addEventListener('click', () => {
    console.log(location.href);
})

google.addEventListener('click', () => {
    location.href = 'https://google.com'
})

assigne.addEventListener('click', () => {
    location.assign('https://google.com')
})


replace.addEventListener('click', () => {
    location.replace('https://google.com')
})


reload.addEventListener('click', () => {
    location.reload();
})

details.addEventListener('click', () => {
    console.log(location.href);
    console.log(location.hash);
    console.log(location.host);
    console.log(location.hostname);
    console.log(location.pathname);
    console.log(location.port);
    console.log(location.protocol);
    console.log(location.search);
})