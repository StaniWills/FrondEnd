// Создайте функцию, которая принимает в качестве аргументов объект и ключ объекта, 
// а возвращает значение объекта, доступное по этому ключу.

// Пример: ({ key: 'property' }, 'key') => 'property'
// Пример: ({ first_name: 'Nelli', last_name: 'Efremyan' }, 'first_name') => 'Nelli'
// Пример: ({ first_name: 'Nelli', last_name: 'Efremyan', age: 27 }, 'last_name') => 'Efremyan'
// Пример: ({ first_name: 'Nelli', last_name: 'Efremyan', age: 27 }, 'age') => 27

// const user = {
//     first_name: 'Nelli',
//     last_name: 'Efremyan'
// }

// const get_value = (obj, key) => obj[key];

// console.log(get_value(user,'last_name'));
// console.log(get_value({first_name: 'Nelli', last_name: 'Efremyan', age: 27}, 'age'));

// ===========================================================

// 2. Проверьте, что массив не пустой - в нем есть хотя бы один объект с ключом age.

// const people = [
//     {
//       first_name: 'Ivan',
//       last_name: 'Ivanov',
//       age: 20,
//       city: 'Moscow',
//       country: 'Russia',
//       active: true
//     },
//     {
//       first_name: 'dmitry',
//       last_name: 'Petrov',
//       age: 7,
//       city: 'Berlin',
//       country: 'Germany',
//       active: true
//     },
//     {
//       first_name: 'Irina',
//       last_name: 'Alexandrova',
//       age: 46,
//       city: 'Paris',
//       country: 'France',
//       active: false
//     },
//     {
//       first_name: 'Denis',
//       last_name: 'Sokolov',
//       age: 10,
//       city: 'Rome',
//       country: 'Italy',
//       active: false
//     }
//   ];

//   console.log(people[0].age);
//   console.log(people[0].hasOwnProperty('age'));
//   console.log('age' in people[0]);

// ===========================================================

// class Car {
//     constructor(name, model, country, volume, color, year){
//         this.name = name;
//         this.model = model;
//         this.country = country;
//         this.volume = volume;
//         this.color = color;
//         this.year = year;
    
//     }
    
//     get_info(){
//         console.log(`Car: ${this.name} ${this.model},from Country ${this.country}`);
//     }

// }

// const car_1 = new Car('Toyota', 'Rav4', 'Japan', 2.4, 'red', 2020);
// const car_2 = new Car('BMW', 'x3', 'German', 2.4, 'Yellou', 2022);

// console.log(car_1)

// car_1.get_info()

// ===========================================================

// ЗАДАЧА
// Реализуйте класс Country (Страна), который будет иметь следующие свойства: 
// name (имя), capital (столица), population (численность населения), climat (климат)
// Создайте 3 экземпляра этого класса с разными свойствами
// Выведите в консоль по 1 свойству на выбор из каждого экземпляра класса
class Country {
    constructor(name, capital, population, climat){
        this.name = name;
        this.capital = capital;
        this.population = population;
        this.climat = climat;
    }

    // get capital(){
    //     console.log()
    // }
}
 const cont_1 = new Country('Germany', 'Berlin', 200000, 'cold');
 const cont_2 = new Country('Italy', 'Rom', 200000, 'hot');
 const cont_3 = new Country('Schweiz', 'Zurich', 200000, 'cold');

 console.log(cont_1.name);


  