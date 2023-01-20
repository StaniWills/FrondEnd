// ЗАДАЧА 1
// Дан массив с числами.
// Создайте новый массив, состоящий только из отрицательных чисел.
// Создайте новый массив, состоящий только из четных чисел.
// Напишите программу, высчитывающую количество отрицательных чисел в этом массиве.

// let arr = [1, -6, 4, 0, 9, -5, 16];
// let negNums = arr.filter(el => el < 0);
// console.log(negNums);

// let evenNums = arr.filter(el => el % 2 === 0);
// console.log(evenNums);

// let sum = 0;
// arr.forEach(el => (el < 0 ? sum += 1: null))

// console.log(sum);


// ЗАДАЧА 2
// Дан массив с числами.
// Оставьте в нем только положительные числа. Затем извлеките квадратный корень из этих чисел.
// let arr2 = [1, -6, 4, 0, 9, -5, 16];
// let posNums = arr2.filter(el => el > 0).map((el) => Math.sqrt(el));
// console.log(posNums);


// ЗАДАЧА 3
// Дан массив из разных типов данных.
// Необходимо сформировать массив из чисел (если значение не число, то подставить -1)
// let arr = [8, 'hello', true, false, 'bye', 122, undefined, 15];
// let arrNums = arr.map(el => typeof(el) === "number" ? el : el = -1);
// console.log(arrNums);


// ЗАДАЧА 4
// Дан массив из массивов. Вложенные массивы хранят в себе данные о пользователе (имя, фамилия и активность).
// Напишите filter, который оставляет только активных пользователей (true).
// Добавьте map, который в отфильтрованном списке преобразует вложенные массивы в строки.
let arr = [
  ['Максим', 'Грибов', true],
  ['Антон', 'Куликов', true],
  ['Светлана', 'Иванова', false],
  ['Ольга', 'Петрова', true],
  ['Сидр', 'Сидоров', false]
]
let activeUsers = arr.filter(el => el[el.length - 1] === true).map(el => el.toString())

console.log(activeUsers);
