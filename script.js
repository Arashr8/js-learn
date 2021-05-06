const button = document.querySelector('button');
button.addEventListener('click', () => {
    print()
})

window.addEventListener('beforeprint', () => {
    button.style.display = 'none'
})

window.addEventListener('afterprint', () => {
    button.style.display = 'inline-block'
})