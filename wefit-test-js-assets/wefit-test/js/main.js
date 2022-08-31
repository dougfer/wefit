
const changeNav = () => {
  const nav = document.querySelector('.btn-group-vertical')

  nav.style.display = 'flex'
  nav.style.justifyContent = 'space-between'
  nav.style.flexDirection = 'row'
  nav.style.gap = '10px'
  
  const buttons = document.querySelectorAll('.btn-secondary')

  buttons.forEach((button) => {
    button.style.borderRadius = '4px'
  })
}

const changeCards = () => {
  const cards = document.querySelectorAll('.card')

  cards.forEach((card) => {
    const button = card.children[1].querySelector('.btn.btn-primary')

    button.addEventListener('mouseover', () => {
      console.log('oioio')
      button.style.backgroundColor = 'green'
    })
    button.addEventListener('mouseout', () => {
      button.style.backgroundColor = '#007bff'
    })
  })
}

const changeHeader = () => {
  const div = document.querySelector('.jumbotron')
  div.style.backgroundColor = '#6c757d'
  div.style.color = '#FFFFFF'
  div.style.display = 'flex'
  div.style.flexDirection = 'column'
  div.style.alignItems = 'flex-end'
  div.style.textAlign = 'end'

  const button = div.querySelector('.btn.btn-primary')
  button.style.backgroundColor = 'green'
  button.style.border = 'none'
}

const createLiElement = (innerText) => {
  const li = document.createElement('li')
  li.innerText = innerText
  li.classList.add('list-group-item')
  return li
}

const changeList = () => {
  const ul = document.querySelector('.list-group')
  const fourthli = createLiElement('Quarto item')
  const fifthLi = createLiElement('Quinto item')
  
  ul.appendChild(fourthli)
  ul.appendChild(fifthLi)

  document.querySelectorAll('.list-group-item').forEach((li) => {
    li.classList.remove('active')
    li.addEventListener('mouseover', () => {
      li.classList.toggle('active')
    })
    li.addEventListener('mouseout', () => {
      li.classList.toggle('active')
    })
  })
}

changeNav()
changeCards()
changeHeader()
changeList()
