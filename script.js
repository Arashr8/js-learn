const firstName = document.getElementById('firstName')
const check = document.getElementById('check')
const textarea = document.getElementById('textarea')
const select = document.getElementById('select')




firstName.addEventListener('change', () => {
    console.log('salam');
})


check.addEventListener('change', () => {
    console.log('salam');
})

textarea.addEventListener('change', () => {
    console.log('salam');
})

select.addEventListener('change', () => {
    const span = document.querySelector('span')
    span.innerHTML = 'changed!!'
})