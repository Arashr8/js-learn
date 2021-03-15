let ul = document.querySelector('ul')
    /* ul.style.color = 'blue'
    ul.style.fontSize = '30px'
    ul.style.backgroundColor = 'red' */

ul.style['font-size'] = '30px'
ul.classList.add('border')
    /* ul.classList.add('red') */
ul.classList.toggle('red')