//variables
let counter = 0

//references
let counterEl = document.getElementById('counter')
let inputVal = document.getElementById("input").value = 1
let upBtnEl = document.getElementById('upBtn')
let downBtnEl = document.getElementById('downBtn')

//event listeners
upBtnEl.addEventListener('click', addValue)
downBtnEl.addEventListener('click', minusValue)

//functions
function addValue(){
    let input = parseInt(document.getElementById("input").value)
    counter = counter + input
    counterEl.innerHTML = counter
    render()
}

function minusValue() {
    let input = parseInt(document.getElementById("input").value)
    counter = counter - input
    counterEl.innerHTML = counter
    render()
}

function render() {
    if (counter > 0) {
        counterEl.style.color = 'black'
       
    } else if (counter < 0) {
        counterEl.style.color = 'red' 
    }   
}

