const input = document.querySelector('input')

input.addEventListener('keydown', handler)

function handler(event) {
    if (event.code == 'KeyC' && event.ctrlKey) {
        alert('you have copied this text ')
    }

}