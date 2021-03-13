function createElement(tag, text) {
    let element = document.createElement(tag)
    element.textContent = text
    return element
}
/* let main = document.getElementById('main')
let h3 = createElement('h3', 'hello')
let h4 = createElement('h4', 'salam h4')
main.appendChild(h3)
main.appendChild(h4) */

let main = document.getElementById('main')
let heading = createElement('h1', 'list of fruits')
let ul = createElement('ul', '')
let li = createElement('li', 'apple')
let li2 = createElement('li', 'orange')
let li3 = createElement('li', 'banana')
let li4 = createElement('li', 'cherry')
ul.appendChild(li)
ul.appendChild(li2)
ul.appendChild(li3)
ul.appendChild(li4)
main.appendChild(heading)
main.appendChild(ul)