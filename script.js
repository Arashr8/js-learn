const button = document.querySelector('button')
const input = document.querySelector('input')

button.addEventListener('click', buttonHandler)

function buttonHandler() {
    console.log('i am buttonHandler');
    button.removeEventListener('click', buttonHandler)
}