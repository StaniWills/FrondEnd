// Отправляем запрос по ссылке: https://jsonplaceholder.typicode.com/todos
// Получаем результат как на приложенном скрине

const container = document.querySelector('.container');

fetch('https://jsonplaceholder.typicode.com/todos')
.then(respons => respons.json())
.then(json => render(json))

const render = (json) => {
    json.forEach(({title, completed}) => {
        const card = document.createElement('div');
        const titleElem = document.createElement('h4');
        const completedElem = document.createElement('p');


        titleElem.innerText = `Task: ${title}`;


        if (completed) { 
            completedElem.innerText = `Status: done ` 
            card.style.backgroundColor = `green`
        } else {
            completedElem.innerText = `Status: not done`
            card.style.backgroundColor = `grey`
        }

    //     const status = completed ? 'done' : 'not done';
    //   const background = completed ? 'lightgreen' : 'lightgray';

        

        card.classList.add('card');
        titleElem.classList.add('title');


        card.append(titleElem, completedElem);
        container.append(card)
    });
}