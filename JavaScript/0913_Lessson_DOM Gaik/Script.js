// const root = document.querySelector('#root')

// const div_elem = document.createElement('div');
// const img_elem = document.createElement('img');
// const text_elem = document.createElement('p');
// img_elem.src = 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Alexandr_Ivanov_001.jpg';
// text_elem.innerText = 'Kartina - Hello'

// div_elem.append(img_elem, text_elem);
// div_elem.classList.add('card');

// root.append(div_elem);

// --------------------------------------------------------------------------

// добавить div и 4 параграфа внутри него с каким-либо текстом
// созданный div должен быть помещен в #root

// // 1.
// const p1 = document.createElement('p');
// const p2 = document.createElement('p');
// const p3 = document.createElement('p');
// const p4 = document.createElement('p');

// p1.innerText = 'Text 1';
// p2.innerText = 'Text 2';
// p3.innerText = 'Text 3';
// p4.innerText = 'Text 4';

// container.append(p1,p2, p3, p4);
// root.append(container);


// 2.
// const container = document.createElement('div');
// const texts = ['Текст 1', 'Текст 2', 'Текст 3', 'Текст 4'];

// texts.forEach(text => {
//     const p_elem = document.createElement('p');
//     p_elem.innerHTML = text;
//     container.append(p_elem);
// })
// root.append(container);


// 3.
const container = document.createElement('div');
const texts = ['Текст 1', 'Текст 2', 'Текст 3', 'Текст 4'];

const p_list = texts.map(text => {
    const p_elem = document.createElement('p');
    p_elem.innerText = text;
    return p_elem
})

container.append(...p_list); //spei operator
root.append(container);




