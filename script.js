const agent = document.getElementById('agent');
const details = document.getElementById('details');

agent.addEventListener('click', () => {
    console.log(navigator.userAgent);
})

details.addEventListener('click', () => {
    console.log(navigator.cookieEnabled);
    console.log(navigator.language);
    console.log(navigator.onLine);
    console.log(navigator.platform);
})