const addForm = document.querySelector('.add_form');
const formResult = document.querySelector('.form_result');  // 1 находим элемент, в который будем добавлять созданный 
// нами элемент, из полученной информации с инпутов.

addForm.addEventListener('submit', (event) => {             // 2 Отслеживам действие на форме (сабмит формы (первый параметр) - клик по кнопке формы), то что будет происходить по сабмиту формы
    event.preventDefault();                                 // 3 Отменяем стандартное поведение браузера при сабмите - отмена перезагрузки страницы
    
    let type = event.target.type;                           // 4 создаем переменную, в которую кладем конкретный инпут по его name(index) из объекта event (вся наша форма)
    let content = event.target.content;
    let color = event.target.color;

    // const (type, content, color) = event.target
    // const contentValue = content

const elem = document.createElement(type.value);             // 5 создаем элемент на основании того, что ввел пользователь в инпут (в переменной type), что бы отобразить его ниже
elem.innerText = content.value
elem.style.color = color.value

formResult.append(elem);

type.value = '';                                              // 6 Очищаем наши поля ввода (инпуты) ПОСЛЕ того, как на их основании создали элемент 
content.value = '';
color.value = '';

})
