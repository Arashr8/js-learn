function createElement(tag, text) {
    let element = document.createElement(tag)
    element.textContent = text
    return element
}

let ul = document.querySelector('ul')
    /* ul.replaceChild(ul.firstElementChild, ul.lastElementChild)
     */
let copyNode = ul.firstElementChild.cloneNode(true)
ul.appendChild(copyNode)