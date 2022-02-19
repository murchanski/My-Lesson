let createBtn = document.querySelector('.btn_create')
let cardArr = [];

createBtn.addEventListener('click', addCard)



function addCard(){

    let title = document.querySelector('.card_title').value
    let text = document.querySelector('.card_text').value

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

    let cardBlock = document.querySelector('div')
    cardBlock.classList.add('card')
    cardBlock.insertAdjacentHTML('beforeend', `
        <div class="crd_number">1</div>
        <div class="crd_info">
           <div class="card_title">${card.title}</div>
            <div class="card_text">${card.text}</div>
            <div class="card_date">${card.date}</div>
        </div>
    `)

    let wrapper = document.querySelector('.wrapper')
    wrapper.insertAdjacentElement('beforeend', cardBlock)
    
}

//cardArr.push(card)