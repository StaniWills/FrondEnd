// Homework 05.09.22

//ЗАДАЧА 1
// Реализуйте класс Language (Язык), который будет иметь следующие свойства:
// name (имя), alphabet, (латинский, кирилица и т.д.), country (страна, в которой говорят на этом языке)
// Создайте экземпляр этого класса
// Выведете в консоль все свойства созданного класса
// Реализуйте метод get_info (выводит в консоль строку 'Язык: <name>, Алфавит: <alphabet>, Страна, в которой говорят на этом языке <country>)

// class Language {
//     constructor(name, alphabet, country){
//         this.name = name;
//         this.alphabet = alphabet
//         this.country = country
//     }
//     get_info(){
//         console.log(`Язык: ${this.name}, Алфавит: ${this.alphabet}, Страна, в которой говорят на этом языке ${this.country}`);
//     }
// }

// const lang_1 = new Language('Germany', 'Latin', 'German, Liechtenstein');
// console.log(lang_1);

// lang_1.get_info()


//ЗАДАЧА 2 (*посложнее)
// Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия),
//rate (ставка за день работы), days (количество отработанных дней).
//Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
//Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
//С помощью класса создайте двух рабочих и найдите сумму их зарплат.
// Реализуйте методы add_days (увеличивает количество дней на amount) и delete_days (уменьшает количество дней на amount)

// class Worker{
//     constructor(name, surname, rate, days){
//         this.name = name;
//         this.surname = surname;
//         this.rate = rate;
//         this.days = days;
//     }
//     get_salary(){
//         console.log(`зарплатa работника:${this.name} ${this.surname} ${parseInt(this.rate) * this.days}$`);
//     }

//     add_days(amount){
//         this.days = this.days + amount
//         console.log(this.days);
//     }

//     delete_days(amount1){
//         this.days -= amount1
//         console.log(this.days);
//     }
// }

// const worker1 = new Worker('Ivan', 'Kotov', "100$", 20);
// const worker2 = new Worker('Steffan', 'Bruhl', "200$", 15);

// console.log(worker1);
// console.log(worker2);
// worker1.get_salary();
// worker2.get_salary();

// worker1.add_days(10);
// worker2.delete_days(6);