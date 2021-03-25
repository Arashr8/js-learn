const main = document.getElementById('main')
const body = document.body
main.addEventListener('click', divHandler);
/* body.addEventListener('click', bodyHandler, true);
 */
body.addEventListener('click', bodyHandler);


function divHandler(event) {
    console.log('i am divHandler');
    event.stopPropagation()
}

function bodyHandler(event) {
    console.log('i am bodyHandler');

}