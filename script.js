let btn = document.querySelector('button')
btn.addEventListener('click', handler)

function handler() {
    btn.textContent = 'click2'
    let p = document.createElement('p')
    let div = document.getElementById('main')

    p.textContent = 'salam'
    div.appendChild(p)
}