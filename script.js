let div = document.getElementById('myid')
console.log(div.getAttribute('class'));
console.log(div.getAttribute('title'));
div.setAttribute('title', 'mytitle')
div.setAttribute('class', 'newclass')

div.removeAttribute('id')
console.log(div.getAttribute('id'));
console.log(div.id);
console.log(div.className);
console.log(div.myattr);
console.log(div.getAttribute('myattr'));
div.newattr = 'newvalue'
console.log(div.getAttribute('newattr'));
console.log(div.newattr);