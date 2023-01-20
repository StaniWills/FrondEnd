const header = document.querySelector('.header');
const title = document.createElement('h1');
title.innerText = 'Hello World';
header.append(title);


header.style.backgroundColor = 'yellow';
header.style.color = 'red';

title.classList.add('main-title');

// title.classList.remove("main-title")

//-----------------------------------------------------

const container = document.querySelector('.container');
const subTitle = document.createElement('h2');
subTitle.innerText = 'my name is Stas';
container.append(subTitle);


subTitle.style.backgroundColor = 'green';
subTitle.classList.add('sub-title');
// subTitle.classList.remove('sub-title');




const age = document.createElement('div');
age.innerText = 'i am 20 years old';
container.prepend(age);

