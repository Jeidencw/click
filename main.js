const button = document.querySelector('button')
const lis = document.querySelectorAll('li')
const ul = document.querySelector('ul')



button.addEventListener('click', () => {
    const li = document.createElement('li')

    li.textContent = 'Novo item'
    ul.append(li)
})

lis.forEach(li => {
    li.addEventListener('click', event => {
        const clickedElement = event.target
        const verificaEstilo = clickedElement.style.textDecoration === 'line-through'

        console.log(verificaEstilo);

        if(verificaEstilo){
            clickedElement.style.textDecoration = ''
        }else{
            clickedElement.style.textDecoration = 'line-through'
        }
    })
})