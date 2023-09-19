const button = document.querySelector('button');
const ul = document.querySelector('ul');
const lis = document.querySelectorAll('li');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'Novo item';
    ul.append(li);

    const lisArray = Array.from(lis);

    let juntaTudo = lisArray.concat(li)

    test(juntaTudo);
});

const test = (arr) => {
    arr.forEach((li) => {
        li.addEventListener('click', (event) => {
            const clickedElement = event.target;
            const verificaEstilo = clickedElement.style.textDecoration === 'line-through';

            console.log(verificaEstilo);

            if (verificaEstilo) {
                clickedElement.style.textDecoration = '';
            } else {
                clickedElement.style.textDecoration = 'line-through';
            }
        });
    });
};

test(lis);
