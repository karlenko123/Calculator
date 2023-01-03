const currentOperation = null
const firstNumber = ''
const secondNumber = ''

const numberBtn = document.querySelectorAll('[data-number]')
const operationBtn = document.querySelectorAll('[data-operation')
const clearBtn = document.getElementById('clear')
const deleteBtn = document.getElementById('delete')
const pointBtn = document.getElementById('pointBtn')
const equalBtn = document.getElementById('equalBtn')
const previousText = document.getElementById('previousScreen')
const currentText = document.getElementById('currentScreen')

clearBtn.addEventListener('click', clear)
deleteBtn.addEventListener('click', deleteNumber)
pointBtn.addEventListener('click', appendPoint)
// equalBtn.addEventListener('click', evaluate)

numberBtn.forEach((button) => 
    button.addEventListener('click', () => appendNumber(button.textContent))
)

operationBtn.forEach((button) => 
    button.addEventListener('click', () => setOperation(button.textContent))
)

function appendNumber(number) {
    if (currentText.textContent === '0') currentText.textContent = ''
    currentText.textContent += number
}

function deleteNumber(number) {
    if (currentText.textContent === '0') return
    currentText.textContent = currentText.textContent
        .toString()
        .slice(0,-1)
    if (currentText.textContent === '') currentText.textContent = '0'
}

function appendPoint() {
    if (currentText.textContent === '') currentText.textContent = '0'
    if (currentText.textContent.includes('.')) return
    currentText.textContent += "."
}

function clear() {
    currentText.textContent = '0'
    previousText.textContent = ''
}

function setOperation(operator) {

}