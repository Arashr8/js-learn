const button = document.querySelector('button')
const input = document.querySelector('input')

input.addEventListener('keypress', inputHandler)

function inputHandler(event) {
    event.preventDefault()
}