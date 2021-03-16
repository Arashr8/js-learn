let btn = document.querySelector('button')
btn.addEventListener('click', handler)

function handler() {
    let div = document.getElementById('main')
    div.innerHTML += '<p>click shode </p>'
}