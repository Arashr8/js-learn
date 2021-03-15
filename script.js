let ul = document.querySelector('ul')
    /* console.log(ul.style.color);
    console.log(ul.style.border); */

let styles = getComputedStyle(ul)
console.log(styles.getPropertyValue('color'));
console.log(styles.getPropertyValue('font-size'));
console.log(styles.getPropertyValue('width'));