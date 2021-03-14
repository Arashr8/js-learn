function createElement(tag, text) {
    let element = document.createElement(tag)
    element.textContent = text
    return element
}

let ul = document.querySelector('ul')
let second = ul.firstElementChild.nextElementSibling
    /* console.log(second); */

let removed = ul.removeChild(second)
ul.appendChild(removed)

let newItem = createElement('li', 'lemon')
let oldItem = removed.previousElementSibling
console.log(removed);
console.log(newItem);
console.log(oldItem);
let replaced = ul.replaceChild(newItem, oldItem)