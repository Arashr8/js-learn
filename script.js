function createElement(tag, text) {
    let element = document.createElement(tag)
    element.textContent = text
    return element
}
let main = document.getElementById('main')
let ul = document.querySelector('ul')
let p = createElement('p', 'this is p tag')
main.insertBefore(p, ul)