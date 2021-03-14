function createElement(tag, text) {
    let element = document.createElement(tag)
    element.textContent = text
    return element
}

let ul = document.querySelector('ul')
let second = ul.firstElementChild.nextElementSibling
    /* console.log(second); */

let removed = ul.removeChild(second)
console.log(removed);
ul.appendChild(removed)