let count = 0
const btnDecrease = document.querySelector('.decrease')
const btnReset = document.querySelector('.reset')
const btnIncrease = document.querySelector('.increase')

let number = document.querySelector('.number')

btnIncrease.addEventListener('click', increase)

function increase() {

    count++
    number.textContent = count

    if (count >= 0) {
        number.style.color = 'green'
    } else {
        number.style.color = 'red'
    }

}

btnReset.addEventListener('click', reset)

function reset() {
    count = 0
    number.textContent = count
}

btnDecrease.addEventListener('click', decrease)

function decrease() {

    count--
    number.textContent = count


    if (count >= 0) {
        number.style.color = 'green'
    } else {
        number.style.color = 'red'
    }

}