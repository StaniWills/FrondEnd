// First level: ЗАДАЧА 1
// В index.html в тэге body есть два объекта: кнопка (button) и контейнер (div)
// При нажатии на кнопку в контейнере создается параграф с текстом зеленого цвета (текст взять произвольный)

const box = document.querySelector('.container');
const btn = document.querySelector('.btn');

btn.style.width = '100px';
btn.style.height = '100px';
btn.innerText = 'add text';


btn.addEventListener('click', () => {
  const textElem = document.createElement('p');
  textElem.innerText = 'Hello Stas!';
  textElem.style.color = 'green';

  box.append(textElem);
})

// Second level: ЗАДАЧА 2
// В index.html в тэге body есть два объекта: кнопка (button) и контейнер (div).
// При нажатии на кнопку в контейнере создаются желтые квадраты 300х300px. К контейнеру применить свойство grid.

const box2 = document.querySelector('.container2');
const btn2 = document.querySelector('.btn2');
btn2.style.width = '100px';
btn2.style.height = '50px';
box2.style.display = 'grid';

btn2.innerText = 'add square';

btn2.addEventListener('click', () => {
  const square = document.createElement('div');

  square.style.width = '300px';
  square.style.height = '300px';
  square.style.backgroundColor = 'yellow';
  square.style.margin = '10px'

  box2.append(square);
})