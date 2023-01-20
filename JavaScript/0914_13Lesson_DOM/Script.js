const rootElem = document.querySelector('.root');

const card = document.createElement('div');
const art = document.createElement('p');
const title = document.createElement('p');
const price = document.createElement('p');
const firstnameElem = document.createElement('p');
const lastnameElem = document.createElement('p');
const imgElem = document.createElement('img');
const emailElem = document.createElement('a');
const idElem = document.createElement('p');
const ageElem = document.createElement('p');
const salaryElem = document.createElement('p');
const emailTextElem = document.createElement("p");

idElem.innerText = 'ID: 1';
firstnameElem.innerText = 'First name: Olga';
lastnameElem.innerText = 'Last name: Petrova';
emailTextElem.innerText = 'Email: ';
emailElem.innerText = 'example@gmail.com';
ageElem.innerText = 'Age: 18';
salaryElem.innerText = 'Salary: 1500';

art.innerText = `Articul: 1234`;
title.innerText = 'Title: iPhone 13 Pro';
price.innerText = 'Price: 1300$';

card.classList.add('card'); //добавляем класс элементу card
imgElem.classList.add('photo');

//card.innerHTML = '<p>hello</p>';
//let par = document.createElement("p")
//par.innerText = "hello"
//card.append(par)


imgElem.setAttribute('src', 'https://reqres.in/img/faces/12-image.jpg'); // добавляем атрибут src к imgElem
imgElem.setAttribute('alt', 'photo'); // добавляем атрибут alt к imgElem
emailElem.setAttribute('href', 'mailto:example@gmail.com');

card.classList.add('card');
// Короткий способ добавления атрибутов к img
// imgElem.src = 'https://reqres.in/img/faces/12-image.jpg';
// imgElem.alt = 'photo';
// emailElem.href = 'mailto:example@gmail.com';

card.append(art, title, price);
card.append(idElem, firstnameElem, lastnameElem, ageElem, salaryElem, imgElem, emailTextElem, emailElem);
rootElem.append(card);

// <img src='https://reqres.in/img/faces/12-image.jpg' alt='photo'>
// <a href='mailto:example@gmail.com'> example@gmail.com </a>
// <a href='example.com'> Ссылка </a>