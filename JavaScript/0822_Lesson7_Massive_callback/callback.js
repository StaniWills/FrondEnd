// Коллбэк (CallBack) - это функция, переданная в другую функцию в качестве аргумента
// Функция высшего порядка - это функция, внутрь которой передана другая функция (коллбэк)


const multTree = () => {
    return 3 * 2
}
const multFree = () => {
    return 4 * 2
}
const multFive = () => {
    return 5 * 2
}

const multNumber = (num) => {
    return num * 2
}
multNumber(6);
multNumber(7);

////////////////////////////////

// let nums = [1,2,3,4,5];
// const divideNums = (arr) => {
//     let array = [];
//     for (let i = 0; i < arr.length; i++){
//         array.push(arr[i] / 2)
//     }
//     return array
// }





// const multNums = (arr) => {
//     let array = [];
//     for (let i = 0; i < arr.length; i++){
//         array.push(arr[i] * 2)
//     }
//     return array; 
// }

// console.log(divideNums(nums));
// console.log(multNums(nums));


// let nums = [1,2,3,4,5];
// const divide = (num) => num / 2;        //callback funktion
// const mult = (num) => num * 2;          //callback funktion
// const plus = (num) => num + 2;          //callback funktion

// const changeNums = (arr, callback) =>{  //делает шаблон типа копия  
//     let array = [];
//     for (let i = 0; i < arr.length; i++){
//         array.push(callback(arr[i]))
//         array.push(plus = (num) => num / 2 )
//     }
//     return array
// }

// console.log(changeNums(nums,divide));   //делает шаблон типа копия
// console.log(changeNums(nums,mult));
// console.log(changeNums(nums,plus));

// МЕТОДЫ МАССИВОВ

// .forEach() - выполяняет переданную функцию один раз для каждого элемента массива, 
// ничего не возвращает (undefined)

// let age = [40, 45, 53, 23, 12, 7];

// let newAge = [];
// for(let i = 0; i < age.length; i++){
//     if(age[i] >= 18){
//         newAge.push(age[i])
//         console.log(age[i]);
//     }
// }


// let age = [40, 45, 53, 23, 12, 7];

// age.forEach((element) => {
//     if(element >= 18){
//         console.log(element)
//     }
// });                                         // age.forEach(el => {})


// let age = [40, 45, 53, 23, 12, 7];
// let neuAge = [];
// age.forEach(element1 => neuAge.push(element1 + 1));

// console.log(age);
// console.log(neuAge);



