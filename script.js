const form2 = document.getElementById('form2');
form2.addEventListener('submit', validateEmail);

function validateEmail(event) {
    const email = document.getElementById('email');
    const emailPattern = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!emailPattern.test(email.value)) {
        email.nextElementSibling.innerHTML = 'error';
        event.preventDefault();
    }
}