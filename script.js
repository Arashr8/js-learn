const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    let userName = document.getElementById('userName')

    if (userName.value.length < 5 || userName.value.length > 15) {
        event.preventDefault()
        alert('Error')


    }
    let password = document.getElementById('pass')

    if (password.value.length < 8) {
        event.preventDefault()
        alert('Password most be 8 character')

    }


})