let currentOperation = null
let firstNumber = ''
let secondNumber = ''

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
equalBtn.addEventListener('click', evaluate)

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
    firstNumber = ''
    secondNumber = ''
    currentOperation = null
}

function setOperation(operator) {
    if (currentOperation !== null && currentText.textContent == '0') {
        evaluate()
        return
    }
    if (currentOperation !== null) evaluate()
    firstNumber = currentText.textContent
    currentOperation = operator
    previousText.textContent = `${firstNumber} ${currentOperation}`
    currentText.textContent = '0'
}

function evaluate() {
    if (currentOperation === null) return
    secondNumber = currentText.textContent
    if (currentOperation === "÷" && currentText.textContent == 0) {
        alert("You cannot divide zero")
        return
    }
    previousText.textContent += ` ${currentText.textContent}`
    currentText.textContent = roundResult(operate(currentOperation, firstNumber, secondNumber))
    currentOperation = null
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000
  }

  function operate (operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
        case '+':
            return a+b
        case '-':
            return a-b
        case 'x':
            return a*b
        case '÷':
            return a/b
        default:
            return null
    }
  }

