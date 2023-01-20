// 1. Напишите функцию, которая принимает в качестве аргумента строку, 
// а возвращает ее длину. Выведите результат в консоль.

// A
// function getLength(string) {
//   return string.length
// };
// console.log(getLength('hello'));

// B
// let getLength1 = (string) => string.length;
// console.log(getLength('hello'));


// 2. Напишите функцию, которая принимает два аргумента (основание степени и саму степень) 
// и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

//A
function getExp(num1, num2 = 2) {
  return num1 ** num2 // return Math.pow(num1, num2)
}

//B
// let getExp1 = (num1, num2 = 2) => num1 ** num2; // Math.pow(num1, num2)

// console.log(getExp1(2, 3)); // 8
// console.log(getExp1(2)); // 4

// 4. Напишите функцию, принимающую в качестве аргументов три числа и выводящую в консоль 
отсортированные числа по убыванию. Используйте условный оператор.

function sortNums(num1, num2, num3) {
  if(num1 > num2 && num1 > num3){
    if(num2 > num3){
      console.log(num1, num2, num3)
    } else {
      console.log(num1, num3, num2)
    }
  } else if (num2 > num1 && num2 > num3) {
    if(num1 > num3) {
      console.log(num2, num1, num3)
    } else {
      console.log(num2, num3, num1)
    }
  } else {
    if(num1 > num2) {
      console.log(num3, num1, num2)
    } else {
      console.log(num3, num2, num1)
    }
  }
}

// 5.Напишите функцию, принимающую в качестве аргументов пять чисел и выводящую в консоль наибольшее из них. 
// Используйте условный оператор.

// a
function maxOfFive(a, b, c, d, e){
  let max = a;
  if (b > a) {
      max = b;
  } 
  if (max < c) {
      max = c;
  } 
  if (max < d) {
      max = d;
  }
  if (max < e) {
      max = e;
  }
  
  return max;
}

sortNums(3, 8, 2); // 8, 3, 2
sortNums(-3, 88, 12); // 88, 12, -3

// b
function getMaxNum_3(a, b, c, d, e) {
  return Math.max(a, b, c, d ,e)
}
console.log(getMaxNum_3(9, 7, 1, 5, 10));
