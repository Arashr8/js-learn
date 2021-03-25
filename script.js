 /* const main = document.getElementById('main')
  const body = document.body

  main.addEventListener('click', handler) */


 function handler(event) {
     console.log(event.currentTarget.nodeName);
     console.log(event.eventPhase);
 }