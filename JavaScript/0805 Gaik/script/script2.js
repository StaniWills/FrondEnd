// const value_1 = 12

// console.log(''+value_1);                 //преобразование в строку
// console.log(typeof(''+value_1));         //Proverka chto v soydaly stroku


// const value_1 = '12';
// console.log(+value_1);                   //преобразование в число

// let result = ('b'+ 'a' + +'c').toLowerCase();
// console.log(result);


// const a = +prompt('Укажите первое число: ');  //открывает модальное окно и позволяет задать значения от самого пользователя
// const b = +prompt('Укажите первое число: ');   // "+"" преобразовывает строку в число 

// // console.log(a + b);

// //сформировать такой вывод // 12 + 45 = 57 // добавить в вывод вычисления разности, произведения и отношения
// const one = +a;
// const two = +b;

// console.log(`${a} + ${b} = ${one + two}`);
// console.log(`${a} - ${b} = ${one + two}`);
// console.log(`${a} * ${b} = ${one + two}`);
// console.log(`${a} / ${b} = ${one + two}`);

// Условный оператор
// const a = prompt('Укажите число: ');

// if (a > 0){
//     console.log(`число ${a} положительное`);
//     console.log('число ' + a + ' положительное');
// } else {
//     console.log(`число ${a} отрицательное`);
// }


// получить два числа через prompt и сравнив их друг с другом вывести сообщение 
// <a> больше <b> на <разница между a и b>

const a = +prompt('Укажите число: ');
const b = +prompt('Укажите число: ');

if (a > b){
        console.log(`${a} больше ${b} на ${a - b}`);
} else if (a < b) {
        console.log(`${b} больше ${b} на ${b - a}`);
} else {
        console.log('oни равны!');
}