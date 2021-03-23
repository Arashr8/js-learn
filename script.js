const input = document.querySelector('input')
    /* input.addEventListener('keydown', handler)
     */
    /* input.addEventListener('keyup', handler)
     */
input.addEventListener('keypress', handler)

function handler(event) {
    console.log(event.keyCode);
    console.log(event.charCode);


    if (event.keyCode == 104) {
        alert('hello')
    } else if (event.keyCode == 98) {
        alert('bye')
    }
}