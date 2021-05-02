const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    let input = document.querySelector('input')
    if (input.value.length <= 0) {
        alert('empty')
        event.preventDefault()
    }
})