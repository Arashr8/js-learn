let circle = document.getElementById('outer')
circle.addEventListener('mouseenter', handler)

function handler() {
    let body = document.querySelector('body')
    body.classList.add('bg-red')
    alert('warning')
}