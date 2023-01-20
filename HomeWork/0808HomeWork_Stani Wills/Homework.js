// Напишите функцию, которая принимает в качестве аргумента строку, а возвращает ее длину. Выведите результат в консоль.
// 1.
function getString (string) {
    return string.length 
}
console.log (getString('Hello'));

// 2.
let getString1 = (string) => console.log (string.length);
getString1('Hello');


// Напишите функцию, которая принимает два аргумента (основание степени и саму степень) и возвращает число в указанной степени. 
// Значение степени должно быть указано по умолчанию 2. 
// 1.
function argumet (num1, num2 = 2) {
    return (num1 ** num2)
}
console.log (argumet(2, 3));

// 2.
let argumet1 = (num1, num2 = 2) => (num1 ** num2);
console.log (argumet1(5));


// Напишите функцию, которая принимает два аргумента с числовым значением и возвращает большее значение. Выведите результат в консоль. 
// Предложите два варианта решения (через условный оператор и Math.max()).

// 1.
let biggesNum = function (num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num1 < num2) {
        return num2;
    }
}
console.log(biggesNum(12,9));

// 2.
let biggesNum1 = (num1, num2) => {
    if (num1 > num2) {
        return num1;
    } else if (num1 < num2) {
        return num2;
    }
}
console.log (biggesNum1(16,42));

// 3.
let biggesNum2 = function (num1, num2) {
    return Math.max(num1, num2);
}
console.log (biggesNum2 (23,9));


// Second level: 4. Напишите функцию, принимающую в качестве аргументов три числа и выводящую в консоль отсортированные числа по убыванию. 
// Используйте условный оператор.

let descendingNum = function (num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        if (num2 > num3) {
            console.log(num1, num2, num3);
        } else if (num2 < num3) {
            console.log(num1, num3, num2);
        }
    } else if (num2 > num1 && num2 > num3) {
        if (num1 > num3) {
            console.log(num2, num1, num3);
        } else if (num1 < num3) {
            console.log(num2, num3, num1);
        }
    } else if (num3 > num1 && num3 > num2) {
        if (num1 > num2) {
            console.log(num3, num1, num2);
        } else if (num1 < num2) {
            console.log(num3, num2, num1);
        }
    }
}

descendingNum(123,210,300);

// Напишите функцию, принимающую в качестве аргументов пять чисел и выводящую в консоль наибольшее из них. 
// Используйте условный оператор.
