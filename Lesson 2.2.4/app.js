let isBlock = false
let blockTop = 0
let size;
let blockRight = 0

let btnDown = document.querySelector('.end')
let btnUp = document.querySelector('.start')
let btnRight = document.querySelector('.right')
let btnLeft = document.querySelector('.left')
let btnCreate = document.querySelector('.add_button')
let input = document.querySelector('.color')

btnDown.addEventListener('click', down)
btnUp.addEventListener('click', up)
btnLeft.addEventListener('click', left)
btnRight.addEventListener('click', right)
btnCreate.addEventListener('click', addBlock)
input.addEventListener('change', changeColor)

function addBlock(){

    let sizeWidth = document.querySelector('.size_input_width').value
    let sizeHeight = document.querySelector('.size_input_height').value
    let wrapper = document.querySelector('.wrapper_block')
    if (isBlock == true) return

    if (+sizeWidth <= 50 || +sizeHeight >= 500) return size

    let block = document.createElement('div')
    block.classList.add('block')

    block.style.width = sizeWidth + 'px'
    block.style.height = sizeHeight + 'px'
    block.style.background = 'black'

    block.addEventListener('click', removeBlock)

    /*block.addEventListener('click', radiusBlock)*/

    wrapper.insertAdjacentElement('afterbegin', block)
    isBlock = true
}

function down(){
    let block = document.querySelector('.block')

    if (size + blockTop + 10 > 500) return

    blockTop += 10

    block.style.marginTop = blockTop +'px'
}

function up(){
    let block = document.querySelector('.block')

    if(blockTop <= 0) return

    blockTop -= 10

    block.style.marginTop = blockTop + 'px'
}


function right(){
    let block = document.querySelector('.block')

    if (size + blockRight + 10 > 500) return

    blockRight += 10

    block.style.marginLeft = blockRight + 'px'
}

function left(){
    let block = document.querySelector('.block')

    if(blockRight <= 0) return

    blockRight -= 10

    block.style.marginLeft = blockRight + 'px'
}

function changeColor(){
    let colorInput = document.querySelector('.color').value
    let block = document.querySelector('.block')
    block.style.background = colorInput
}

function removeBlock(){
    let block = document.querySelector('.block')
    block.remove()

    isBlock = false
}

/*function createBlock(){
    let block = document.querySelector('.block')
    block = true
}*/

/*function createBlock(){
    let sizeWidth = document.querySelector('.size_input_width').value
    let sizeHeight = document.querySelector('.size_input_height').value
    let wrapper = document.querySelector('.wrapper_block')
    if (isBlock == true) return

    if (+sizeWidth <= 50 || +sizeHeight >= 500) return size

    let block = document.createElement('div')
    block.classList.add('block')

    block.style.width = sizeWidth + 'px'
    block.style.height = sizeHeight + 'px'

    block.addEventListener('click', removeBlock)
    block.addEventListener('click', addBlock)

    //block.addEventListener('click', radiusBlock)

    wrapper.insertAdjacentElement('afterbegin', block)
    isBlock = true
}*/

/*function radiusBlock(){
    let block = document.querySelector('.block')
    let radius = '50'
    block.style.border-radius = radius + '%'
}*/