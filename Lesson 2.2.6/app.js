let createBtn = document.querySelector('.btn_create')
let cardArr = [];

createBtn.addEventListener('click', addCard)

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
    cardBlock.insertAdjacentHTML('beforeend', `
        <div class="crd_number">${cardNumber}</div>
        <div class="crd_info">
           <div class="card_title">${card.title}</div>
            <div class="card_text">${card.text}</div>
            <div class="card_date">${card.date}</div>
        </div>
    `)

    let wrapper = document.querySelector('.wrapper')
    wrapper.insertAdjacentElement('beforeend', cardBlock)

    document.querySelector('.card_title').value = ''
    document.querySelector('.card_text').value = ''
    
    cardNumber++
}

//cardArr.push(card)