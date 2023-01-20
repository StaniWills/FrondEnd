
// DOM - Document Object Mode

// В файле html в тэге body есть один элемент div с классом root.
// Используя JS (DOM), создать карточку товара (div), которая должна включать в себя следующие
// данные: Артикул, наименование товара, цена. 
// Данные взять произвольные.
// Применить стили к карточке: width, background-color, border, border-radius, padding, margin.

// const container = document.querySelector(".root")

// const card = document.createElement('div');
// card.classList.add('card');
// card.style.width = '200px';
// card.style.height = '100px';
// card.style.backgroundColor = 'grey';
// card.style.border = '1px solid black';
// card.style.borderRadius = '5%';
// card.style.margin = '100px auto';
// card.style.padding = '10px 20px'

// const name = document.createElement('h1');
// name.innerText = 'Ball';
// name.style.textAlign = 'center';

// const art = document.createElement('i');
// art.innerText = 'sold123456789';
// art.style.fontSize = '10px';
// art.style.color = 'white';

// const praice = document.createElement('p');
// praice.innerText = 'cost $100';
// praice.style.fontSize = '15px';
// praice.style.marginTop = '25px';

// container.append(card);
// card.append(name);
// card.append(art);
// card.append(praice);

//Ver.2

// const rootElem = document.querySelector('.root');

// const card = document.createElement('div');
// const art = document.createElement('p');
// const title = document.createElement('p');
// const price = document.createElement('p');

// art.innerText = `Articul: 1234`;
// title.innerText = 'Title: iPhone 13 Pro';
// price.innerText = 'Price: 1300$';

// card.innerHTML = '<p>hello</p>';

// card.classList.add('card');

// card.append(art, title, price);
// rootElem.append(card);





