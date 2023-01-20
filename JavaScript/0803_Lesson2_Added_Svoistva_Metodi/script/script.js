let a = Math.pow(10,3);
let b = Math.abs(5);
let c = Math.abs(-5);

let d = Math.ceil(4.33);  // 5 - округляет до первого верхнего значения
let e = Math.floor(4.33); // 4 - округляет до первого нижнего значения
let f = Math.round(4.33); // 4 - округляет по правилам математики

console.log(a);
console.log(b);
console.log(c);

console.log(d);
console.log(e);
console.log(f);

/* 5 - Math.ceil()
4.33
4 - Math.floor()
3
2
1
0
-1
-2
-3
-4 - Math.ceil()
-4.33
-5 - Math.floor() */


let min = Math.min (5, 34, -100);
let max = Math.max (5, 24, -100);

console.log(min);
console.log(max);


let random = Math.random();
console.log(random);


let step_1 = Math.random();         // выводит случайно число от 0 до 1
let step_2 = step_1 * 10;           // случайно число из step_1 умножаем на 10
let step_3 = Math.round(step_2);    // округляет число из step_2

console.log(step_1);
console.log(step_2);
console.log(step_3);


let random_num = Math.round(Math.random() * 10);        // 0 - 10
let random_num2 = Math.round(Math.random() * 10 + 1);   // 1 - 11
let random_num3 = Math.round(Math.random() * 10 + 2);   // 2 - 12 

let random_num4 = Math.round(Math.random() * 9);        // 0 - 9
let random_num5 = Math.round(Math.random() * 9 + 1);    // 1 - 10

console.log(random_num4)
console.log(random_num5)

//Напишите программу, которая выводит случайное число от 15 до 25

let rand = Math.round(Math.random() * 10 + 15); // 10 - величина диапазона, 15 - сдигает число в плюс *10 = 0-10 | +15 = 15 - 25
// let rand = 15 + Math.round(Math.random() * 10);
console.log(rand);