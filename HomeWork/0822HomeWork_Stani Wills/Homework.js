// Homework

// Дан массив
// let array = [200, 45, 65, 670, 352, 32, 1, 0, 7];

// Сформируйте новый массив с числами меньше 100. Предложите два способа решения (цикл for и метод .forEach).
// let array = [200, 45, 65, 670, 352, 32, 1, 0, 7];

// let newArr = [];
// for (let i = 1; i < array.length; i++){
//     if (array[i] < 100) {
//         newArr.push(array[i]);
//     }
// }
// console.log(newArr);

// console.log(array[2]);

// let newArr1 = [];
// array.forEach((element)  => {
//     if (element < 100){
//         newArr1.push(element);
//     }
// })
// console.log(newArr1);


// Сформируйте новый массив с числами, которые кратны 2. Предложите два способа решения (цикл for и 
// метод .forEach).

let array = [200, 45, 65, 670, 352, 32, 1, 0, 7];
// let arrEven = [];
// for(let i = 0; i <= array.length; i++){
//     if(array[i] % 2 === 0){
//         arrEven.push(array[i])
//     }
// }
// console.log(arrEven);

// let arrEven1 = [];
// array.forEach((element) => {
//     if (element % 2 === 0) {
//         arrEven1.push(element);
//     }
// })
// console.log(arrEven1);

// Сформируйте новый массив с числами, которые заканчиваются на 5. Предложите два способа решения (цикл 
// for и метод .forEach).
// let array = [200, 45, 65, 670, 352, 32, 1, 0, 7];
// let arrEven = [];
// for (let i = 0; i <= array.length; i++){
//         // console.log(String(array[i]));
//         if(String(array[i])[String (array[i]).length - 1] == 5) {
//         arrEven.push(array[i]);
//     }
// }
// console.log(arrEven);


// Сформируйте массив, в котором числа больше 100 заменены на строку '>100', а числа меньше ста - на '<100'. 
// Предложите два способа решения (цикл for и метод .forEach).

let new_array_7 = [];
for(let i = 0; i < array.length; i++) {
  if(array[i] >= 100){
    new_array_7.push('>100')
  } else {
    new_array_7.push('<100')
  }
}

let new_array_8 = [];
array.forEach(el => {
  if(el >= 100){
    new_array_8.push('>100')
  } else {
    new_array_8.push('<100')
  }
})
