// querySelector метод, возвращающий элемент по селектору
// const main_p = document.querySelector('.main');

// querySelectorAll метод, возвращающий итерируемый объект (NodeList) по селектору
// const p_list = document.querySelectorAll('p');
// console.log(p_list);

// getElementsByClassName метод, возвращающий итерируемый объект 
// (HTMLCollection) по селектору
// const main_p = document.getElementsByClassName('main')[0];
// console.log(main_p);

// 1.
// const prod_d = document.getElementsByClassName('products')[0].getElementsByTagName('p')[0];
// 2.
// const prod_p = document.querySelector('.products p');
// console.log(prod_p);

// const prod_p = document.querySelector('.products p');
// prod_p.innerText = 'Ware';

// addEventListener позволяет повесить событие (в данном случае click) на параграф prod_p
// и при этом событии выполнится callback функция
// prod_p.addEventListener('click', () => {
//     prod_p.innerText = 'Ware';
// })


// // 1) найти параграф с тектом "Важный текст" и заменить его на "Не такой уж и важный текст"
// const p_elem = document.querySelector('.main p');
// p_elem.innerText = 'Не такой уж и важный текст';

// // 2) заменить fb на facebook
// const fbElem = document.querySelector('.media .fb a');
// fbElem.innerText = 'Facebook';

// // 3) Zamenit * na clova
// const point1El = document.querySelector('.menu .point_1');  
// point1El.addEventListener('click', () => {
//     point1El.innerText = 'Punkt 1';
// })

// const main_elem = document.querySelector('.main');
// main_elem.addEventListener('click', () => {
//     main_elem.style.color = 'white';
//     main_elem.style.backgroundColor = 'gray';
//     main_elem.style.padding = '20px'
// })

// реализовать функцию random_color, которая возвращает случайный цвет в формате rgb   ???
// const main_elem = document.querySelector('.main');
// const random_color = () => {
//     const r = Math.round(Math.random() *255);
//     const g = Math.round(Math.random() *255);
//     const b = Math.round(Math.random() *255);
//     return `rgb(${r},${g},${b})`
// }

// main_elem.addEventListener('click', () => {
//     main_elem.style.color = random_color(); //"rgb (241, 432, 432)"
//     main_elem.style.backgroundColor = random_color();
//     main_elem.style.padding = '20px'
// })

// menjaem chislo
// const main_elem = document.querySelector('.main');

// main_elem.addEventListener('click', ()=>{
//     const value = main_elem.innerText;
//     main_elem.innerText = +value + 1;
// })


// const elem1 = document.createElement('div');

// elem1.style.width = '200px';
// elem1.style.height = '200px';
// elem1.style.border = '1px solid black';
// elem1.style.backgroundColor = 'rgb(12, 132, 17)';

// const mainElem = document.querySelector('.main');
// mainElem.append(elem1);

// elem1.addEventListener('click', ()=> {
//     const title = document.createElement('h1');
//     title.innerText = 'Hello Stas';
//     title.style.background = 'grey';
//     title.style.color = 'white';
//     elem1.append(title)
// })