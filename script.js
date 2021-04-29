const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    console.log('salam');
    event.preventDefault()
})


form.addEventListener('reset', (event) => {
    console.log('reset');

})