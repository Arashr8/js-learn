const componentA = document.querySelector("#componenet_a")
const componentB = document.querySelector("#componenet_b")

const btnA = document.querySelector("#btn_a")
const btnB = document.querySelector("#btn_b")

btnA.addEventListener('click', handelColorA)

function handelColorA() {
    componentA.classList.add('pink')
    componentB.classList.remove('pink')
}


btnB.addEventListener('click', handelColorB)

function handelColorB() {
    componentB.classList.add('pink')
    componentA.classList.remove('pink')
}