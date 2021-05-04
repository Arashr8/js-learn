let form = document.querySelector('form')
form.addEventListener('submit', () => {
    let password = document.getElementById('pass').value
    let confirmPassword = document.getElementById('confirm_pass').value

    if (password != confirmPassword) {
        alert('error')
    }
})