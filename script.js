const google = document.getElementById('google');
const blank = document.getElementById('blank');
const self = document.getElementById('self');


google.addEventListener('click', () => {
    open('https://google.com', 'google')
})

blank.addEventListener('click', () => {
    open('https://google.com', '_blank')
})

self.addEventListener('click', () => {
    open('https://google.com', '_self')
})