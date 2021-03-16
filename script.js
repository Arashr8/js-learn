const main = document.getElementById('main');
main.addEventListener('click', handler)

function handler(event) {
    console.log(event.type);
    console.log(event.target.nodeName);
    /*  console.log(event.clientX);
     console.log(event.clientY); */
    /* console.log(event.offsetX);
    console.log(event.offsetY); */
    /* console.log(event.pageX);
    console.log(event.pageY); */
    /* console.log(event.screenX);
    console.log(event.screenY); */
    console.log(event.altKey);
    console.log(event.ctrlKey);
    console.log(event.shiftKey);
}