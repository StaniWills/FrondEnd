// 1) создать параграф
// 2) записать в него текст
// 3) добавить его в root
const root = document.querySelector('#root');
const pElem = document.createElement('p');
// pElem.innerText = 'Hello World!';
root.append(pElem);

// создать массив из текстов (минимум 3 элемента)
// для каждого элемента создать параграф и записать в него текст
// параграфы необходимо добавить в root элемент
const words = ['Hello World!','Hi', 'Ciao', 'Chiess'];
words.forEach(word => {
    const pElem = document.createElement('p');
    pElem.innerText = word;
    root.append(pElem);

// podkluchit card
pElem.classList.add('card');

// повесить обработчик события клика на параграфы 
// при клике на параграф в консоль должно выводиться слово
pElem.addEventListener('click', () => {
    // console.log(word);

// по нажатию на параграф ему должен присваиваться 
// класс active
// pElem.classList.add('active');           //v1
// event.target.classList.add('active');    //v2 toje samoe
event.target.classList.toggle('active');    //v3
})

// преобразовать процесс таким образом, чтобы по нажатию на 
// pElem active добавлялся, если его нет и удалялся, если он есть

})
