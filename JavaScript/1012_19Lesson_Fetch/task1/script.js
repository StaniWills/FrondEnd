//// FETCH - json

const cards_container = document.querySelector('.cards_container');

fetch('https://reqres.in/api/users')                // отправляем запрос
  .then(resp => resp.json())                        // получаем ответ, преобразовываем в json
  .then(json => render(json.data))                  // получаем json, что-то делаем с json
                                                    //json.data => json_data (переменная, может быть любое название)

  const render = (json_data) => {                   // finden durch forEach, info wird von json.data ubernommen in (json_data)
    json_data.forEach(el => {                       // el. VS destruktorisazia ({ first_name, email, avatar })
        const card = document.createElement('div');
        const avatarElem = document.createElement('img');
        const firstnameElem = document.createElement('p');
        const emailElem = document.createElement('a');

        firstnameElem.innerText = el.first_name;
        emailElem.innerText = el.email;

        emailElem.classList.add('email_elem')       // class fur css.
        card.classList.add('card');

        avatarElem.src = el.avatar;
        avatarElem.alt = 'avatar';
        emailElem.href = `mailto: ${el.email}` 

        card.append(avatarElem, firstnameElem, emailElem);
        cards_container.append(card);
    })
}
