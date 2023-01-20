// const ist = [12,4,32,-45,67,-23];

// ist.forEach(el=> console.log(el));


// function forEach(ist, callback){                //rabota forEach pod kapotom
//     for (let i = 0; i < ist.length; i++){
//         callback(ist[i],i,ist)
//     }
// }
// forEach(ist, el=> console.log(el))


// написать forEach, который выводит только четные числа в консоль
// ist.forEach(el => {
//     if(el % 2 === 0){
//         console.log(el);
//     }
// })


// написать forEach который выводит в консоль наибольше значения из массива
// let max = ist[0];
// ist.forEach(el => {
//     if(el < max){
//         max = el;
//     }
// })
// console.log(max);


// MAP
// const result = ist.map(el => el ** 2);
// console.log(result);

// function map(lst, callback){                    //rabota forEach pod kapotom
//     const new_array = [];
//     for (let i = 0; i < lst.length; i++){
//         const new_elem = callback(ist[i], i, ist);
//         new_array.push(new_elem);
//     }
//     return new_array
// }

const ist = [12,4,32,-45,67,-23];

// написать функцию, которая получает число и возвращает положительное число
// func(12) -> 12
// func(-12) -> 12
function funk(value){
    if(value < 0){
        value *= -1;            //value = -value
    }
    return value
}
console.log(funk(12));
console.log(funk(-12));
console.log(ist.map(funk));


// написать метод map, который возвращает массив, в котором все отрицательные значения 
// преобразованы в положительныe