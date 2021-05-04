const alertBtn = document.getElementById('alert_btn')
alertBtn.addEventListener('click', () => {
    alert('salam')
})


const confirmBtn = document.getElementById('confirm')
confirmBtn.addEventListener('click', () => {
    let answer = confirm('aya razi hastid')
    if (answer == true) {
        alert('thanx')
    } else {
        alert('why not?')
    }
})


const promptBtn = document.getElementById('prompt')
promptBtn.addEventListener('click', () => {
    let name = prompt('lotfan name khod ra vared konid')
    let age = prompt('lotfan age khod ra vared konid', '50')

    console.log('your name is ' + name + 'and your age is ' + age);


})