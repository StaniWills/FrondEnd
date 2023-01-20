// 1
// function pow(value, p) {
//     const result = value ** p;
//     console.log (result);
// }

// const hip = pow(pow(3, 2) + pow(4, 2), 0,5); 
// console.log(hip);

// pow(12, 2)
// pow(12, 3)
// pow(12, 4)
// pow(12, 5)

// const result_1 = pow(12, 2);
// const result_2 = pow(12, 3);
// const result_3 = pow(12, 4);
// const result_4 = pow(12, 5);

// console.log(result_1);
// console.log(result_2);
// console.log(result_3);
// console.log(result_4);

// console.log(result_1 + result_2 + result_3 + result_4);

// 2
// опишите функцию, которая в качестве аргументов получает два числа
// и возвращает наибольшее
// function pow(a, b){
// if (a > b) {
//     return a; 
// } else {
//     return b
//     }
// }

// console.log(pow(12 ,3))
// console.log(pow(3 ,12))

// 3
// описать функцию, которая получает в качестве аргумента число и 
// возрващает true, если оно больше или равно нулю и false в ином случае
// a
// function check(value) {
//     if (value >= 0) {
//         return true
//     } else {
//         return false
//     }
// } 
// // b
// function check(value){
//     return value >= 0
// }
// console.log(check(12));
// console.log(check(-12));

// 4
// написать функцию, которая принимает 3 числовых аргумента и проверяет возможность
// построения треугольника с указанными сторонами

// Если построить можно, функция возвращает true, а в ином случае false

// function triangle_check(n1,n2,n3){
//     if (n1 + n2 > n3 &&
//         n3 + n2 > n1 &&
//         n3 + n1 .n2
//     ){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(triangle_check(3, 4, 5))
// console.log(triangle_check(4, 5, 3))
// console.log(triangle_check(5, 3, 4))

// 5
// c использованием Math.random() и Math.round() реализуйте функцию, которая возвращает
// случайное число от 1 до 6

// function random (){
//     return Math.round(Math.random() * 5 + 1)
// }
// console.log(random());