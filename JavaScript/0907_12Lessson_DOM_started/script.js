
// DOM - Document Object Model

const header = document.querySelector('.header'); // ищу элемент в html документе

const paragraph = document.querySelector('#par');
const container = document.querySelector('.container');

//const a = document.querySelector("p")


//console.log(container);

// const a = document.getElementsByClassName("container")
// let b = document.getElementById("par")

// console.log(a);
// console.log(b);

// console.log(header);
// console.log(paragraph);

//header.style.color = 'blue';
paragraph.style.backgroundColor = 'grey';

//header.addEventListener("click", () => {
    header.classList.remove("new-class")
//})

//header.classList.add('class2');
//header.classList.remove('class1');


const text = document.createElement('p'); // создаю новый элемент
text.innerText = 'Какой-то текст'; // добавляем текст в р

const divElem = document.createElement('div');
divElem.innerText = 'Текст внутри нового div';

container.prepend(text, divElem); //добавляю p внутрь container


