//Создайте функцию, которая принимает в качестве аргумента строку и выводит 
//каждый символ этой строки в консоль.
// const get_letter = (str) => {
//     for(let i = 0; i < str.length; i++){
//         console.log(str[i])
//     }
// }
// get_letter('hello');


// Найти длину последнего элемента массива. Заранее не известна длина массива
// let str = 'hello, world!!!!!';
// let elements = ['hello', 5, true, false, 23, 'bye', 76, true, undefined, null, str];


// let last_elem = elements[elements.length - 1];
// console.log(last_elem[last_elem.length - 1]); // !

// console.log(elements.length); // 11 длина массива
// console.log(elements.length - 1); // 10 индекс последнего элемента
// console.log(elements[elements.length - 1]); // elements[10] - str = 'hello, world'
// console.log(elements[elements.length - 1].length); // длина str

// console.log(elements[0][0]); // h


// let text = 'good morning';
// console.log(text[0]); // g

// let arr = [1, 2, 3, 4, 5, 'hello'];
// console.log(arr[0]); // 1
// console.log(arr[arr.length - 1]); 

// длина массива - 1 = индекс последнего элемента


// Создайте функцию, которая принимает в качестве аргументов массив строк, а возвращает 
// первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null.
// Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов.
// Для начала пропишите аргументы функции. Пример: [ 'one', 'two', 'three' ] => 'three'

// const get_longest_string = (array) => {

//   if(array.length === 0) {
//     return null
//   }

//   let result = array[0];

//   for(let i = 1; i < array.length; i++){
//     if(array[i].length > result.length){
//       result = array[i]
//     }
//   }
//   return result
// }

// console.log(get_longest_string([])); // null
// console.log(get_longest_string([ 'one', 'two', '12345', 'three' ])); // 'three'



let arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr);

let array = [];
for(let i = 1; i <= 100; i++){
    array.push(i)
}
console.log(array);