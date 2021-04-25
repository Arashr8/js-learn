const button = document.getElementById('btn')
button.addEventListener('click', duplicate)

function duplicate() {
    const input = document.getElementById('mytxt')
    input.value += input.value
}