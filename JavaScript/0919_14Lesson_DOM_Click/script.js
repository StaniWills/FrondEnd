const square = document.querySelector('.square');
const container = document.querySelector('.container');

square.addEventListener('click', () =>  {
const textElem = document.createElement('p');
textElem.innerText = 'hello,World!';
container.append(textElem);
textElem.style.color = 'red';
textElem.style.fontSize = '40px'
});

//v.2
// square.addEventListener('click', () => container.innerText = 'Hello !!!'


// const btn =  document.querySelector('.btn');
// const container =  document.querySelector('#container');

// btn.addEventListener('click', () => {
//   const text = document.createElement('p');
//   text.innerText = 'Hello!';
//   text.style.color = 'red';
//   container.append(text);
// })
