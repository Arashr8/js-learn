let p1 = document.createElement('p')
let text = document.createTextNode('this is text')
p1.appendChild(text)
let main = document.getElementById('main')
main.appendChild(p1)

let div = document.createElement('div')
    /* let textDiv = document.createTextNode('this is div')
    div.appendChild(textDiv) */
p1.appendChild(div)

p1.id = 'firstId'

div.textContent = 'this is div'
div.textContent = '<a>link</a>'