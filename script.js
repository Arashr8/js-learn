const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    let userName = document.getElementById('userName')

    if (userName.value.length < 5 || userName.value.length > 15) {
        event.preventDefault()
        alert('Username Error')


    }
    let password = document.getElementById('pass')

    if (password.value.length < 8) {
        event.preventDefault()
        alert('Password most be 8 character')

    }

    let age = document.getElementById('age')
    if (!Number.isInteger(Number(age.value)) && (age.value < 1 || age.value > 100)) {
        event.preventDefault()
        alert('not valid')
    }


})