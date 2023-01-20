//Создайте форму сбора данных работников с тремя полями: Имя, Фамилия, Возраст. Поля ввода должны включать "текст-подсказку". 
// Форма должна собирать полученные данные, а затем формировать карточки работников с полученной информацией.

//Добавьте к форме поля ввода для ставки (rate), количества дней (days) и добавьте в карточку работника его зарплату. 
// Зарплата рассчитывается через умножение ставки на количество дней.

//Добавьте к форме поле ввода для ссылки на фото. Карточки должны включать отображение фотографии.

const workers_form = document.querySelector('.workers_form');
const cards_container = document.querySelector('.cards_container');

workers_form.addEventListener('submit', (event) => {
  event.preventDefault();
  const card = document.createElement('div');
  const nameElem = document.createElement('p');
  const ageElem = document.createElement('p');
  const salaryElem = document.createElement('p');
  const photoElem = document.createElement('img');

  const { firstname, lastname, age, rate, days, photo } = event.target;

  nameElem.innerText = `Name: ${firstname.value} ${lastname.value}`;
  ageElem.innerText = `Age: ${age.value}`;
  salaryElem.innerText = `Salary: ${rate.value * days.value}`

  photoElem.setAttribute('src', photo.value);
  photoElem.setAttribute('alt', 'photo');

  card.classList.add('card');

  card.append(nameElem, ageElem, salaryElem, photoElem);
  cards_container.append(card);

  firstname.value = '';
  lastname.value = '';
  age.value = '';
  rate.value = '';
  days.value = '';
  photo.value = '';
})