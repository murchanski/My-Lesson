let createBtn = document.querySelector('.btn_create')
let cardArr = [];

createBtn.addEventListener('click', addCard)

let btnPlus = document.querySelector('.btn_plus')
btnPlus.addEventListener('click', createWrapper)

let cardNumber = 1

function addCard(){

    let title = document.querySelector('.card_title').value
    let text = document.querySelector('.card_text').value
    
    if (title.length == 0 || text.length == 0) return

    if (title.length > 20 || text.length > 20) return

    let currentdate = new Date()

    let date = currentdate.getFullYear() + '.'
        + (Number(currentdate.getMonth())+1) + '.'
        + currentdate.getDate()
    console.log(date)

    const card = {
        'title': title,
        'text': text,
        'date': date,
    }

    cardArr.push(card)

    let cardBlock = document.createElement('div')
    cardBlock.classList.add('card')
    cardBlock.setAttribute('draggable', true)
    cardBlock.insertAdjacentHTML('beforeend', `
    <div class="card1" draggable="true">
        <div class="crd_number">${cardNumber}</div>
        <div class="crd_info">
            <div class="card_title1">title</div>
            <div class="card_text1">text</div>
            <div class="card_date1">date</div>
        </div>
    </div>
    `)
    cardBlock.addEventListener('dragstart', dragStart)
    cardBlock.addEventListener('dragend', dragEnd)
    
    let wrapper = document.querySelector('.wrapper')
    wrapper.insertAdjacentElement('beforeend', cardBlock)

    document.querySelector('.card_title1').value = ''
    document.querySelector('.card_text1').value = ''
    
    cardNumber++
}

let draggableCard

function dragStart(){
    draggableCard = this
}

function dragEnd(){
    draggableCard = null
}

let wrappers = document.querySelectorAll('.wrapper')

/*for (let i = 0; i < wrappers.length; i++){
    console.log(wrappers[i])
}*/

wrappers.forEach(wrapper=>{
    wrapper.addEventListener('dragover', dragOver)
})

function dragOver(){
    this.insertAdjacentElement('beforeend', draggableCard)
}

function createWrapper(){
    let wrapperBlock = document.createElement('div')
    wrapperBlock.classList.add('wrapper')
    btnPlus.insertAdjacentElement('afterend', wrapperBlock)

    let wrappere = document.querySelectorAll('.wrapper_block')
    wrappere.forEach(wrapperBlock=>{
        wrapperBlock.addEventListener('dragover', dragOver)
    })
}