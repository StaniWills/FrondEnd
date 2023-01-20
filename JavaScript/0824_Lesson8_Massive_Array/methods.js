// МЕТОДЫ МАССИВОВ

// .forEach() - выполяняет переданную функцию один раз для каждого элемента массива, ничего не возвращает (undefined)

// .filter() - возращает новый массив со всеми элементами, прошедшими проверку. Длина нового массива может быть меньше длины оригинального массива.

// .map() - возвращает новый массив с результатом вызова указанной функции для каждого элемента (изменяет каждый элемент). Длина нового массива всегда равна длине оригинального массива.


// .reduce() -



let array = [200, 45, 65, 670, 352, 32, 1, 0, 7];

// Сформируйте новый массив с числами меньше 100. 

let new_array = array.filter(el => el < 100);



// Сформируйте новый массив с именами длиннее 5 букв
let users = ['Ivan', 'Victoria', 'Olga', 'Elena', 'Anton'];

let new_users = users.filter(user => user.length >= 5);




// Дан массив из строк. Вывести только слова, длиннее 10 символов

let arr = ['hello', 'bye', 'good morning', 'good evening', 'good night'];

let new_arr = arr.filter(str => str.length >= 10);


// Вернуть новый массив с каждым элементом, умноженным на 2

let mult_on_2 = array.map(el => el * 2);




//======================

let age = [23, 15, 18, 56, 43, 28];

// Сформировать новый массив с совершеннолетними
// Сформировать новый массив, где возраст всех совершеннолетних заменен на 100

let age_adult = age.filter(el => el >= 18).map(el => el = 'hello');

// let age_changed = age_adult.map(el => el = 100);



// Сформировать массив, где несовершеннолетние заменены на 'child', а совершеннолетние на 'adult'

let adults = age.map(el => {
  if (el < 18){
    return 'child'
  } else {
    return 'adult'
  }
});

let adults1 = age.map(el => el < 18 ? 'child' : 'adult');


// Тернарный оператор

// условие ? true : false



// Сформировать массив из последних цифр элементов => [3, 5, 8, 6, 3, 8]

let new_age = age.map(el => el % 10);

let new_age1 = [];
age.forEach(el => new_age1.push(el % 10));

console.log(new_age);
console.log(new_age1);


// Filter


// Сформируйте новый массив с числами, которые кратны 2. Предложите два способа 
// решения (цикл for и метод .forEach).
// let array = [1, 35, 67, 125, 321, 56, 0, 672];

// let newArray = array.filter(el => el % 2 === 0 && el !==0);
// console.log(newArray);


// Сформируйте новый массив с числами, которые заканчиваются на 5.
// let newArray1 = array.filter(el => el % 10 === 5);
// console.log(newArray1);


// Дан массив из строк. Вывести только слова, длиннее 10 символов
// let arr = ['hello', 'bye', 'good morning', 'good evening', 'good night'];

// let newArray2 = arr.filter(el => el.length >= 10);
// console.log(newArray2);


//====================== Map

// Вернуть новый массив с каждым элементом, умноженным на 2
// let mult = array.map(el => el * 2);
// console.log(mult);


let age = [23, 15, 18, 56, 43, 28];

// Сформировать новый массив с совершеннолетними
// Сформировать новый массив, где возраст всех совершеннолетних заменен на 100

// let ageArray = age.filter(el => el >= 18).map(el => el = 100);

// console.log(age);
// console.log(ageArray);


// Сформировать массив, где несовершеннолетние заменены на 'child', а совершеннолетние на 'adult'
// v1.
// let adults = age.map(el => {
//     if(el < 18) {
//         return 'child'
//     } else {
//         return 'adults'
//     }
// });
// console.log (adults);

// // v2. ternar operator
// let adults1 = age.map(el => (el < 18 ? "child" : "adult"));

// console.log(age)
// console.log (adults);


// Сформируйте массив, в котором числа больше 100 заменены на строку '>100', а числа меньше ста - на '<100'.
//  Предложите два способа решения (цикл for и метод .forEach).
// let arr = [1, 35, 67, 125, 321, 56, 0, 672];

// let string = arr.map(el => el >= 100 ? '>100' : '<100');
// console.log(string)


// Сформировать массив из последних цифр элементов => [3, 5, 8, 6, 3, 8]

// let age = [23, 15, 18, 56, 43, 28];
// let arr1 = age.map (el => el % 10);
// console.log(arr1);

