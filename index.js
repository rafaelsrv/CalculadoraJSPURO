const showResult = document.getElementById('showResult')
const sumFunc = document.getElementById('sum')
const subFunc = document.getElementById('sub')
const multFunc = document.getElementById('mult')
const divFunc = document.getElementById('div')
const equalFunc = document.getElementById('done')
const inputNumber = document.getElementById('inputNumber')


let finalValue = 0;
let arrayNumbers = []


const bt1 = document.getElementById('bt1')
const bt2 = document.getElementById('bt2')
const bt3 = document.getElementById('bt3')
const bt4 = document.getElementById('bt4')
const bt5 = document.getElementById('bt5')
const bt6 = document.getElementById('bt6')
const bt7 = document.getElementById('bt7')
const bt8 = document.getElementById('bt8')
const bt9 = document.getElementById('bt9')
const bt0 = document.getElementById('bt0')

sumFunc.addEventListener('click', sum)
subFunc.addEventListener('click', sub)
multFunc.addEventListener('click', mult)
divFunc.addEventListener('click', div)
equalFunc.addEventListener('click', equal)
inputNumber.addEventListener('input', getInputValue )

bt1.addEventListener('click', bt1Click)
bt2.addEventListener('click', bt2Click)
bt3.addEventListener('click', bt3Click)
bt4.addEventListener('click', bt4Click)
bt5.addEventListener('click', bt5Click)
bt6.addEventListener('click', bt6Click)
bt7.addEventListener('click', bt7Click)
bt8.addEventListener('click', bt8Click)
bt9.addEventListener('click', bt9Click)
bt0.addEventListener('click', bt0Click)

function showInput(joinArray) {
    inputNumber.value = joinArray
}

function getInputValue(){
    console.log(inputNumber.value)
}

function bt1Click () {
    inputNumber.value = inputNumber.value + bt1.value
}
function bt2Click () {
    inputNumber.value = inputNumber.value + bt2.value
}
function bt3Click () {
    inputNumber.value = inputNumber.value + bt3.value
}
function bt4Click () {
    inputNumber.value = inputNumber.value + bt4.value
}
function bt5Click () {
    inputNumber.value = inputNumber.value + bt5.value
}
function bt6Click () {
    inputNumber.value = inputNumber.value + bt6.value
}
function bt7Click () {
    inputNumber.value = inputNumber.value + bt7.value
}
function bt8Click () {
    inputNumber.value = inputNumber.value + bt8.value
}
function bt9Click () {
    inputNumber.value = inputNumber.value + bt9.value
}
function bt0Click () {
    inputNumber.value = inputNumber.value + bt0.value
}

function insert (operator){
    inputNumber.value = inputNumber.value + operator
}
function equal (){
    showResult.value = eval(inputNumber.value)
}
function reset (){
    inputNumber.value = ""
    showResult.value = ''
}



