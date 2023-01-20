// Вывести текст, введенный в инпут, в консоль
const showTextBtn = document.querySelector('.show_text_btn');
const showTextInput = document.querySelector('.show_text_input');

showTextBtn.addEventListener('click', () => console.log(showTextInput.value));

//Поменять текст в инпуте с ??? на !!!
const changeTextBtn = document.querySelector('.change_text_btn');
const changeTextInput = document.querySelector('.change_text_input');

changeTextBtn.addEventListener('click', () => changeTextInput.value = '!!!');

//Поменять цвет фона на черный
const black_mode_btn = document.querySelector('.black_mode_btn');
black_mode_btn.addEventListener('click', () => document.body.style.
backgroundColor = 'black');

//Поменять цвет фона на черный & White V.1
const change_mode_btn = document.querySelector('.change_mode_btn');
change_mode_btn.addEventListener('click', () => document.body.classList.
toggle('black_mode'));

// classList.add('class') // добавляет класс
// classList.remove('class') // удаляет класс
// classList.toggle('class') // удаляет класс, если он есть. добавляет класс,если его нет.

// // V.2
// change_mode_btn.addEventListener('click', () => {
//   const backgroundColor = document.body.style.backgroundColor === 'black' ? 'white' : 'black';
//   document.body.style.backgroundColor = backgroundColor;
// });

//Поменять цвет knopki
const random_color_btn = document.querySelector('.random_color_btn');
const getRandomNum = () => Math.round(Math.random() * 255);
//Math.random() => дробное от 0 до 1
//Math.random() * 255 => дробное от 0 до 255
//Math.round(Math.random() * 255) => целое число от 0 до 255
random_color_btn.addEventListener('click', (event) => event.target.style.
backgroundColor = `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()} )`);

//Менять цвет фон на случайный
const random_mode_btn = document.querySelector('.random_mode_btn');
random_mode_btn.addEventListener('click', () => document.body.style.
backgroundColor = `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`);

//Менять содержимое инпута на значение из массива
const change_btn = document.querySelector('.change_btn');
const change_input = document.querySelector('.change_input');
const symbols = ['...', '!!!', '+++', '@@@'];
let symbols_index = 0;
change_btn.addEventListener('click', () => change_input.value = symbols
[symbols_index++ % symbols.length]);


//Создать слайдер с фотографиями из массива
const photos = [
  'https://icdn.lenta.ru/images/2022/06/13/19/20220613193918938/square_320_606658bb7374481a05a664f151a8d888.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/African_Elephant_%28Loxodonta_africana%29_male_%2817289351322%29.jpg/1200px-African_Elephant_%28Loxodonta_africana%29_male_%2817289351322%29.jpg',
  'https://i.ytimg.com/vi/ViAath1B5WY/maxresdefault.jpg',
  'https://cdnn21.img.ria.ru/images/153009/29/1530092975_240:0:1680:1440_1920x0_80_0_0_9df118e773d0e9f5c788eabb7b6f2aad.jpg'
]

let photoIndex = 0;
const img_slider = document.querySelector('.img_slider');
img_slider.addEventListener('click', (event) => event.target.src = photos
[photoIndex++ % photos.length]);

// HomeWork

//Execise 1

const img_slider2 = document.querySelector('.img_slider2');
const rightBtn = document.querySelector('.right_button');
const leftBtn = document.querySelector('.left_button');

const photos2 = [
'https://icdn.lenta.ru/images/2022/06/13/19/20220613193918938/square_320_606658bb7374481a05a664f151a8d888.jpg',
'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/African_Elephant_%28Loxodonta_africana%29_male_%2817289351322%29.jpg/1200px-African_Elephant_%28Loxodonta_africana%29_male_%2817289351322%29.jpg',
'https://i.ytimg.com/vi/ViAath1B5WY/maxresdefault.jpg',
'https://cdnn21.img.ria.ru/images/153009/29/1530092975_240:0:1680:1440_1920x0_80_0_0_9df118e773d0e9f5c788eabb7b6f2aad.jpg'
]

let photoIndex2 = 0;
rightBtn.addEventListener('click', () => {img_slider2.src = photos2
[++photoIndex2 % photos2.length]
console.log(photoIndex2)});

leftBtn.addEventListener('click', () => {img_slider2.src = photos2
[Math.abs(--photoIndex2) % photos2.length]
console.log(photoIndex2);});


// a++ - сначала возвращает значение, а потом увеличивает его на единицу
// ++a - сначала увеличивает на единицу, а потом возвращает

//Execise 2

const increaseBtn = document.querySelector('.increaseButton');
increaseBtn.addEventListener('click', (event) => {
let currentWidthElem = event.target.clientWidth
event.target.style.width = currentWidthElem + 50 + 'px'

let currentHeightElem = event.target.offsetHeight
event.target.style.height =currentHeightElem + 50 + 'px'
})


//Создать генератор бросаемых костей
const game_btn = document.querySelector('.game_btn');
const game_result = document.querySelector('.game_result');

const get_num = () => Math.round(Math.random() * 5 + 1) // 1-6

//0,5454 * 5 = 2,5 = 3 + 1 = 4
//0,034 * 5 = 0,17 = 0 + 1 = 1

//Math.random() => дробное от 0 до 1
//Math.random() * 5 => дробное от 0 до 5
//Math.random() * 5 + 1 => дробное от 1 до 6
//Math.round(Math.random() * 5 + 1) => целое от 1 до 6

game_btn.addEventListener('click', () => game_result.innerText = `${get_num()} X ${get_num()}`);


// Создать описанный в форме элемент
const add_form = document.querySelector('.add_form');
const form_result = document.querySelector('.form_result');

add_form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { type, content, color } = event.target

  //const type1 = event.target.type.value


  form_result.innerText = '';

  const elem = document.createElement(type.value);

  elem.innerText = content.value;
  elem.style.color = color.value;

  form_result.append(elem);

  type.value = '';
  content.value = '';
  color.value = '';
})