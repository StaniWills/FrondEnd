// Массивы и Цыклы

// const arr = [12, 4, 32, 34, 5, 32, 34];


// for (let i = 0; i < 10; i++){
//     console.log(i);
// }
// console.log(arr[2])


// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }


// вывести из массива arr только положительные числа
// const arr = [12, -4, 32, -34, 5, -32, 34];

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] >= 0) {                 
//     console.log(arr[i]);
//     }
// }


// arr[2] = -1;                           
// console.log(arr);


// написать цикл, который позволяет преобразовать все отрицательные числа в положительные
// после цикла выведите массив
// const arr = [12, -4, 32, -34, 5, -32, 34];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] < 0){
//         arr[i] = arr[i] * -1;
//           arr[i] *= -1 
//     }
// }
// console.log(arr);


// написать цикл, который преобразует все нечетные числа в четные (прибавляет 1)
// в конце выведите массив
// const arr = [12, 3, 32, 33, 5, 32, 34];

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 === 0){
//         arr[i] += 1;
//         arr[i] = arr[i] + 1
//     }
// }
// console.log(arr)


// написать цикл, который выводит только числа, квадрат которых меньше 1000
// const arr = [12, 3, 32, 33, 5, 32, 34];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] ** 2 < 1000){
//         console.log(arr[i]);
//     }
// }


// найти сумму чисел из массива и вывести ее
// const arr = [12, 3, 32, 33, 5, 32, 34];
// let sum = 0;
// for (let i = 0; i < arr.length; i++){
//     sum += arr[i];
//     }
//     console.log(sum);


// let num = 1;
// num = num + 2
// num += 2


// доработать цикл таким образом, чтобы он рассчитывал сумму чутных чисел
// const arr = [12, 3, 32, 33, 5, 32, 34];
// let sum = 0;
// for (let i = 0; i < arr.length; i++){
//     if (arr [i] % 2 ===0){
//         sum += arr[i];
//     }
// }
//     console.log(sum);


// написать цикл (один), который находит сумму четных чисел и сумму нечетных
// после цикла выведите эти значения

// const arr = [12, 3, 32, 33, 5, 32, 34];
// let sumEven = 0;
// let sumOdd = 0;

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 === 0){
//         sumEven += arr[i];
//     }else{
//         sumOdd += arr[i];
//     }
// }
//     console.log('sumEven: ', sumEven);
//     console.log('sumOdd: ', sumOdd);


// найти сумму положительных чисел и отрицательных из массива
// использовать только один цикл
// сумму отрицательных чисел нужно посчетать без минуса

// const arr = [12, 3, -32, 33, -5, 32, -34];
// let sumPos = 0;
// let sumNeg = 0;

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 0){
//         sumPos += arr[i];
//     }else{
//         sumNeg -= arr[i];
//     }
// }
//     console.log('sumPos: ', sumPos);
//     console.log('sumNeg: ', sumNeg);


// найти максимальное число из массива
// все числа в массиве потожительные
// const arr = [12, 3, 32, 33, 5, 32, 34];
// let result = 0;

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > result){
//         result = arr[i];
//     }
// }
//     console.log(result);


// найти максимальное число из массива
// const arr = [-12, -3, -32, -33, -5, -32, -34]

// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     } 
// }
// console.log(max);

// написать цикл, который находит индекс максимального числа
// если максим альных чисел несколько, то в мы сохраняем индекс 
// первого максимального числа

// const arr = [-12, -3, -32, -33, -5, -32, -34]
// let maxResult = arr[0];
// let maxIndex = 0;

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxResult) {
//         maxResult = arr[i];
//         maxIndex = i;
//     } 
// }
// console.log(maxIndex);


// найти в массиве преднеибольшое число
// const arr = [ 4, 7, 12, 11];

// let max_result = arr[0];
// let pred_max_result = arr[0];

// for (let i = 1; i < arr.length; i++){
//     if (arr[i] > max_result){
//         pred_max_result = max_result;
//         max_result = arr[i];
//     }else if (arr[i] > pred_max_result){
//         pred_max_result = arr[i];
//     }
// }
// console.log(pred_max_result);