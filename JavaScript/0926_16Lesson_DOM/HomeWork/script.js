// Создайте форму сбора данных работников с пятью полями: Имя, Фамилия, Email, Ссылка на фото, Прогресс. Поля ввода должны включать "текст-подсказку". 

// Email должен быть кликабельным.
// Фото должно отображаться.

// Форма должна собирать полученные данные, а затем формировать карточки работников с полученной информацией.

// После отправки необходимо очистить инпуты.

const form = document.querySelector('.form');
const cardsContainer = document.querySelector('.cards_container');
let cardsInfo = [];

//1. при отправке формы данные записываются в массив cards_info в виде объектов

form.addEventListener('submit', event => {
    event.preventDefault();
    //console.log(event.target.firstname.value);
    
    const { firstname,  lastname, email, photo, progress } = event.target;
    console.log(firstname.value);
    
  
    cardsInfo.push({
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      photo: photo.value
    });
  
    firstname.value = '';
    lastname.value = '';
    email.value = '';
    photo.value = '';
  
    render();
    // render (cardsInfo[cardsInfo.length -1]) v.2!!! chtobi card ne povtorjalis
  });

  //2. из массива с {} достаем данные и рендерим из них карточки
//   const render = ({firstname, lastname, email, photo}) => v.2 !!! chtobi bez el.firstname u.s.weiter!!!
  const render = () => {
    cardsContainer.innerText = '';
    console.log(cardsInfo);
    cardsInfo.forEach((el) =>{
        const cardElem = document.createElement('div');
        const nameElem = document.createElement('p');
        const emailContainer = document.createElement('div');
        const emailElem = document.createElement('a');
        const emailTextElem = document.createElement('span');
        const photoElem = document.createElement('img');
        const progressContainer = document.createElement('div');
        const progressLine = document.createElement('div');
        const progressValue = document.createElement('p');

nameElem.innerText = `Name: ${el.firstname} ${el.lastname}`;
emailElem.innerText = el.email;
emailTextElem.innerText = 'Email: ';

emailElem.href = `mailto:${el.email}`;
photoElem.src = el.photo;
photoElem.alt = 'photo';
//   https://reqres.in/img/faces/12-image.jpg

cardElem.classList.add('card');
photoElem.classList.add('photo');

emailContainer.append(emailTextElem, emailElem);
cardElem.append(nameElem, emailContainer, photoElem, progressContainer, progressLine, progressValue);
cardsContainer.append(cardElem);

  })
} 




