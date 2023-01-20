// Стрелочные функции

// 1
// const pow = (value, p) => {
//     const result = value ** p;
//     return result
// }

// const pow = (value, p) => value ** p;

// console.log(pow(3, 2));
// console.log(pow(4, 2));

// 2
// необходимо написать стрелочную функцию, которая получает в качестве аргумента число
// и возвращает true, если оно больше 0 и false в ином случае

// const strFunkt = value => value > 0; //если один аргумент то скобки не нужны
// console.log(strFunkt(12));
// console.log(strFunkt(-12));

// 3
// написать стрелочную функцию, которая в качестве аргумента получает число (год)
// и возвращает true если год високосный и false в ином случае.

// const year = 2022

// if (year % 4 == 0 && year % 100 != 0 && year % 400 === 0){
// }

// const check_year = year => year % 4 == 0 && year % 100 != 0 || year % 400 === 0;

// console.log('2022',check_year(2022));
// console.log(check_year(2023));
// console.log(check_year(2024));
// console.log(check_year(2025));
// console.log(check_year(2026));
// console.log(check_year(2027));
// console.log(check_year(2028));

// 4
// написать функцию, которая получает в качестве аргумента число и возвращает true, 
// если оно четное
// и false если нечетное

// const check = value => value % 2 === 0;
// const a = check;
// console.log(check(12));
// console.log(a(12));

// 5 Call back funktion

const compare = (a, b) => {
    if (a > b){
        return a 
    }else{
        return b
    }
}
const run_with_input_data = (func) => {
    const value_1 = +prompt('укажите число');
    const value_2 = +prompt('укажите число');
    return func(value_1, value_2)
}
const result = run_with_input_data(compare);
console.log(result)