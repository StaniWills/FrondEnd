const cardsContainer = document.querySelector('.cardsContainer');

const [firstButton, secondButton] = document.querySelectorAll('.triggers button');
firstButton.addEventListener('click',() => request(1));
secondButton.addEventListener('click',() => request(2));

function request (num) {
    fetch(`https://reqres.in/api/users?page=${num}`)
        .then(resp => resp.json())
        .then(result => render(result.data))
}

function render (datainfo) {
    cardsContainer.innerText = '';
    const arrayCards = datainfo.map(({first_name, email, avatar}) => {
        const card = document.createElement('div');
        const nameElem = document.createElement('p');
        const emailElem = document.createElement('a');
        const avatarElem = document.createElement('img');

        nameElem.innerText = first_name;

        emailElem.href = `mailto:${email}`;
        emailElem.innerText = `@: ${email} `;

        avatarElem.src = avatar;
        avatarElem.alt = `Pic`;

        card.append(avatarElem, nameElem, emailElem,);
        
        return card
    })
    cardsContainer.append(...arrayCards)            //... => [1,2,3,4] = 1,2,3,4
    // console.log(...arrayCards);

    
}



