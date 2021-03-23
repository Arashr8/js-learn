const outer = document.getElementById('outer');
/* outer.addEventListener('click', handler) */
/* outer.addEventListener('mouseover', handler) */
/* outer.addEventListener('mouseout', handler) */
/* outer.addEventListener('mouseenter', handler)
 */
/* outer.addEventListener('mouseleave', handler)*/
outer.addEventListener('mousemove', handler)

function handler(event) {
    console.log(event.type);
}