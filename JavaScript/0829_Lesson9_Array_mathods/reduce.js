// REDUCE .reduce() - служит для того, что мы получили какое-то финальное значение, совершив итерацию по массиву. 
// Возвращает финальное занчение, число.

let num = [1,2,3,4,5];
// // Massive durch Zikl
// let sum = 0;
// for(let i = 0; i < num.length; i++){
//     sum += num[i]
// }
// console.log(sum);

// // Massive durch reduce
// // V.1
// let result = num.reduce((total, el) => {
//     return total + el
// }, 0);

// // V.2
// let result = num.reduce((total, el) => total + el, 0);

// console.log(result);


// =============================================================


// Дан массив
let num1 = [3, 6, 7, 1];
// (3 + 6 + 7 + 1) / 4 = 4.25

//Найти среднеарифмитическое всех элементов массиов
// // V.1
let avg = num1.reduce((a, b) => a + b) / num1.length;
console.log(avg);

// // V.2
let sum1 = nums.reduce((total, el) => total + el); // 17
console.log(sum1 / nums.length);

// =============================================================


// //ИМПЕРАТИВНОЕ ПРОГРАММИРОВАНИЕ & ДЕКЛАРАТИВНОЕ ПРОГРАММИРОВАНИЕ

// // Создайте функцию, принимающую массив и возвращающую массив с отрицательными числами
// // Создайте новый массив, состоящий только из отрицательных чисел
// let array = [1, -6, 4, 0, 9, -5, 16];

// //ИМПЕРАТИВНЫЙ СПОСОБ - говорим программе КАК выполнить задачу

// let new_array = [];
// for (let i = 0; i < array.length; i++){
//   if(array[i] < 0) {
//     new_array.push(array[i])
//   }
// }

// //ДЕКЛАРАТИВНОЕ СПОСОБ - говорим программе ЧТО надо сделать

// let new_array2 = array.filter(el => el < 0);


// =============================================================

// // Создайте функцию, принимающую массив и возвращающую массив с отрицательными числами

// let arr = [1, 34, -10, 8, -5, -3];

// const negative_nums = (arr) => {
//   let new_arr = [];
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] < 0){
//       new_arr.push(arr[i])
//     }
//   }
//   return new_arr
// }


// // Создайте функцию, принимающую массив и возвращающую массив с положительными числами

// const positive_nums = (arr) => {
//   let new_arr = [];
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] > 0){
//       new_arr.push(arr[i])
//     }
//   }
//   return new_arr
// }



// let arr2 = [1, 34, -10, 8, -5, -3];

// let new_arr2 = [];
// for(let i = 0; i < arr2.length; i++){
//   if(arr[i] < 0){
//     new_arr2.push(arr[i])
//   }
// }

// console.log(i);

// =============================================================


// Задачи:
// 1. Добавьте в начало массива число 67, используя метод .unshift(). Затем добавьте в конец массива число 56. Далее решайте задачи с обновленным массивом.
// 2. Сформируйте массив из чисел меньше 100. Выведите в консоль результат.
// 3. Сформируйте массив, состоящий только из чисел, кончающихся на 7.

