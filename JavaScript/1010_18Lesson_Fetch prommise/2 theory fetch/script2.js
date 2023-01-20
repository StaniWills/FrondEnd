//// 1
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(jsonData => console.log(jsonData))


//// 2
//     fetch('')
//     .then(res => json())
//     .then(json => console.log(json.data))


//// 3
const card_container = document.querySelector('.container');

fetch('https://jsonplaceholder.typicode.com/users/2')
    .then(resp1 => resp1.json())
    .then(json => render(json))

    const render = (json) => {
        const card = document.createElement('div');
        const nameElem =  document.createElement('p');
        const usernameElem =  document.createElement('p');
        const phoneElem =  document.createElement('p');

        nameElem.innerText = `Name: ${json.name}`;
        usernameElem.innerText = `User Name: ${json.username}`;
        phoneElem.innerText = `Phone: ${json.phone}`;

        card.append(nameElem, usernameElem, phoneElem);
        card_container.append(card);
    }

//// Homework https://jsonplaceholder.typicode.com/todos