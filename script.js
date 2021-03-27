const ul = document.querySelector('ul');

ul.addEventListener('click', handler);

function handler(event) {
    console.log(event.target.textContent);
}

const button = document.querySelector('button');
button.addEventListener('click', addHandler);

function addHandler() {
    ul.innerHTML += '<li>onion</li>'
    button.removeEventListener('click', addHandler);
}