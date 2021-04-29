const firstName = document.getElementById('firstName')
firstName.addEventListener('focus', (event) => {
    event.target.select()
})

const lastName = document.getElementById('lastName')
lastName.focus()