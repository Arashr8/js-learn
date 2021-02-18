/* let a = document.getElementById('heading')
console.log(a);
console.log(a.nodeType);
console.log(a.nodeName); */

let elem = document.getElementById('test')
console.log(elem.nodeName);
if (elem.nodeName === 'SPAN') {
    alert('it is Span')

} else {
    alert('it is not Span')
}