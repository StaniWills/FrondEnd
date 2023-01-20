// localStorage - хранилище/память браузера

localStorage.setItem('number_15', JSON.stringify(15));      // кладем информацию в localStorage
const a = JSON.parse(localStorage.getItem('number_15'));    // вытаскиваем информацию из localStorage по ключу

// console.log(a);
// console.log(typeof a);

const numbers = [1, 2, 3, 4, 5];
localStorage.setItem('numbers_array', JSON.stringify(numbers));
const b = JSON.parse(localStorage.getItem('numbers_array'));

// console.log(b);
// console.log(typeof b);

// console.log(JSON.stringify(numbers));

const c = '1,2,3,4,5';      // без JSON.stringify()
const d = '[1,2,3,4,5]';    // с JSON.stringify()

console.log(JSON.parse(d));