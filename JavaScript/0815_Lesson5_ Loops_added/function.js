// Напишите цикл for, который выводить в консоль числа от 1 до 10

// for(let i = 0; i < 5; i = i + 1) {
//   console.log(i)
// }

// i = i + 1
// i += 1
// i++

// выражение 1 - начальное значение счетчика
// выражение 2 - условие повторения цикла
// выражение 3 - изменение счетчика

// Напишите цикл for, который выводить в консоль числа от 15 до 65 с шагом 5 
// => 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65

// for (let i = 15; i <= 65; i += 5) {
//   console.log (i)
// }

// Напишите цикл for, который выводить в консоль числа от 65 до 15 с шагом 5 

// for (let i = 65; i >= 15; i -=5) {
//   console.log (i)
// }

// В программе заданы две переменные n и m с числовым значением каждая. Число n больше числа m. 
// Напишите цикл, который выводит в консоль все четные числа от m до n. 

// function getNums(n, m) {
//   for(let i = m; i <= n; i++){
//     if(i % 2 === 0){
//       console.log(i)
//     }
//   }
// }

// getNums(10, 5);



// const getNums_arrow = (n, m) => {
//     for(let i = m; i <= n; i++){
//       if(i % 2 === 0){
//         console.log(i)
//       }
//     }
//   }
  
//   getNums_arrow(10, 4);
  
  
  
  // В программе заданы две переменные n и m с числовым значением каждая. Напишите цикл, который выводит в консоль числа от большего числа до меньшего. Если числа равны, то вывести сообщение "The numbers are equal"
  
  // const getNums_2 = (n, m) => {
  //   if(n > m) {
  //     for(let i = n; i >= m; i--){
  //       console.log(i)
  //     }
  //   } else if (m > n) {
  //     for(let i = m; i >= n; i--){
  //       console.log(i)
  //     }
  //   } else {
  //     console.log('The numbers are equal')
  //   }
  // }
  
  
  // const getNums_3 = (n, m) => {
  //   if(n === m){
  //     console.log('The numbers are equal')
  //     return
  //   }
  
  //   for(let i = Math.max(n, m); i >= Math.min(n, m); i--){
  //     console.log(i)
  //   }
  // }
  
  // getNums_3(16, 9);

  // Напишите программу, которая с помощью цикла считает сумму чисел от 1 до 10 и выводит в консоль.

// const getSum = () => {
//   let sum = 0;
//   for(let i = 1; i <= 10; i++){
//     sum += i 
//   }
//   return sum
// }


// const getMult = () => {
//   let result = 1;
//   for(let i = 1; i <= 10; i++){
//     result *= i 
//   }
//   return result
// }




// Напишите программу, которая с помощью цикла считает сумму четных чисел от 1 до 10 и выводит в консоль => 30

// const getSum1 = () => {
//   let sum = 0
//   for(let i = 1; i <= 10; i++){
//     if(i % 2 === 0){
//       sum += i
//     }
//   }
//   return sum
// }

// console.log(getSum1());


// First level: 1. Напишите функцию, которая принимает в качестве аргумента имя (строку), 
// а возвращает сообщение в формате: Dear ИМЯ, welcome. Выведите результат в консоль. 
// Запишите функцию в двух форматах (function declaration и arrow function).

//function declaration
function massage(name){
  return (`Dear, ${name} Welcome`)
}
console.log(massage('John'));

//arrow function
const massage1 = name => `Dear, ${name} Welcome`; 
console.log(massage1('Alex'));


// Напишите функцию, которая принимает в качестве аргументов два значения: имя и возраст. 
// Если переданный возраст меньше 18, то функция возвращает сообщение в формате: Dear ИМЯ, 
// you are younger than 18. Если возраст больше или равен 18, то функция возвращает сообщение 
// в формате: Dear ИМЯ, you are adult. 
// Запишите функцию в двух форматах (function declaration и arrow function).

//function declaration
// function helloFunc (name, age){
//   if (age < 18){
//     return `Dear ${name}, you are younger than 18.`
//   } else {
//     return `Dear ${name}, you are adult.`
//   }
// }
// console.log(helloFunc ('Stas', 10));

// arrow function
// const helloFunc1 = (name, age) => {
//   if (age < 18){
//     return `Dear ${name}, you are younger than 18.`
//   } else {
//     return `Dear ${name}, you are adult.`
//   }
// }
// console.log(helloFunc1 ('Stas', 18));


// Second level: 3. Напишите функцию, которая принимает два числовых аргумента и возвращает 
// результат их умножения. Значение второго аргумента должно быть указано по умолчанию 
// 2. Запишите функцию в двух форматах (function declaration и arrow function).

// function declaration
// function multiFunc (a, b = 2){
//   return a * b
// }
// console.log(multiFunc(5));

// arrow function
// const multiFunc1 = (a, b = 2) => a * b;
// console.log(multiFunc1(10))


// Напишите функцию, которая принимает два аргумента с числовым значением и возвращает меньшее 
// значение. Выведите результат в консоль. Предложите два варианта решения. Запишите функцию в 
// двух форматах (function declaration и arrow function).

// function declaration
function minValue (num1, num2){
  if(num1 > num2){
    return num2
  }else{
    return num1
  }
}
console.log(minValue (25,20));

// arrow function
const minValue1 = (num1, num2) => {
  if(num1 > num2){
    return num2
  }else{
    return num1
  }
}
console.log(minValue1 (12,45));

// Math.min вариант
function minValue2 (num1, num2){
  return Math.min(num1,num2);
}
console.log(minValue2 (25,15));