//ФУНКЦИИ

//Функция - это всегда какое-то действие

//Правила наименования функций
//1. использовать настоящие английские слова
//2. использовать snake_case или camalCase
//3. первое слово глагол (get, show, sum, divide и т.д.)


// ОБЪЯВЛЕНИЕ ФУНКЦИИ (Function declaration)

// function sum() {
//   let a = 3 + 4;
//   return a
// }

// function sum() {
//   let a = 5 + 6;
//   return a
// }

function getSum(num1 = 6, num2 = 3) {
    return num1 + num2;
  }
  
  // console.log(getSum(1, 2)); // 3
  // console.log(getSum(5, 8)); // 13
  // console.log(getSum(5)); // 8
  // console.log(getSum()); // 9
  
  //NaN - not a number
  // 5 + undefined = NaN
  // 5 + '5' = 55
  // 5 + true = NaN
  
  
  function getGreeting(firstName = 'Elena') {
    return `Hello, ${firstName}`
  }
  
  // console.log(getGreeting('Olga'));
  // console.log(getGreeting('Anton'));
  // console.log(getGreeting('Sergey'));
  // console.log(getGreeting());
  
  
  //Напишите функцию, принимающую 3 аргумента с числовым значением и возвращающую результат умножения чисел друг на друга. Значение последнего аргумента по умолчанию должно быть равно 1.
  //Выведите в консоль результат вызова функции.
  
  function getMultiplication(num1, num2, num3 = 1) {
    return num1 * num2 * num3
  }
  
  // console.log(getMultiplication(1, 2, 3)); // 6
  // console.log(getMultiplication(1, 2)); // 2
  
  
  // Напишите функцию, принимающую 2 аргумента firstname и age и возвращающую сообщение 
  // в формате "Hello, FIRSTNAME. Your age is AGE". По умолчанию указать значения 'Elena' 
  // для firstname и 18 для age
  
  // function getGreeting1(firstname = 'Elena', age = 18) {
  //   return `Hello, ${firstname}. Your age is ${age}`
  // };
  
  // console.log(getGreeting1('Olga', 44));
  // console.log(getGreeting1('Anton', 84));
  // console.log(getGreeting1('Artem'));
  // console.log(getGreeting1());

  //Напишите функцию, которая принимается в себя 2 аргумента и возвращает результат 
  // деления большего числа на меньшее.

  function divideNums(num1 ,num2){
    if(num1 > num2) {
      return num1 / num2
    } else {
      return num2 / num1
    }
  }

  console.log(divideNums(1, 7));
  console.log(divideNums(4, 2));

  
//ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ
let greeting = function getHello(name, lastname) {
  return `Hello ${name} ${lastname}!`
}


//СТРЕЛОЧНЫЕ ФУНКЦИИ (Arrow functions)

let greeting_arrow = (name, lastname) => `Hello ${name} ${lastname}!`;
console.log(greeting_arrow('Olga', 'Petrova'));

// 1.
// function getString (name, lastname) {
//     console.log(`Hello ${name} ${lastname}`)
// }
// getString("john", "smit")

// 2.
// let getString2 = function () {
//     return ('Hello Stas')
// }
// console.log(getString2());

// 3.
// let getString3 = () => console.log('Hello Stas');
// getString3()