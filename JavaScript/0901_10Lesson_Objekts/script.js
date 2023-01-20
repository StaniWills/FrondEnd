let user = {
    firstname: 'Nelli',
    lastname: 'Efremyan',
    age: 27,
    active: true
  }
//   
  let a = 'firstname';
  
  //console.log(`Hello ${user.firstname}! You are ${user.age} years old`);
  
  //console.log(`Hello ${user[a]}! You are ${user['age']} years old`);
  // 1. если ключ состоит из двух и более слов
  // 2. если ключ - это переменная
  
  
  
  
  //===============================
  
  const users = [
    {
      first_name: 'Ivan',
      last_name: 'Ivanov',
      age: 20,
      salary: 500
    },
  
    {
      first_name: 'Olga',
      last_name: 'Petrova',
      age: 12,
      salary: 250
    },
  
    {
      first_name: 'irina',
      last_name: 'Alexandrova',
      age: 46,
      salary: 1500
    },
  
    {
      first_name: 'Denis',
      last_name: 'Sokolov',
      age: 30,
      salary: 760
    }
  ];
  
  // let arr = [1, 'hello', true];
  // console.log(arr[1]);
  
  //console.log(`Hello ${users[0].first_name}!`);

  //1. Пройдитесь по массиву с объектами циклом forEach и выведите каждый элемент в консоль

 //users.forEach(el => console.log(el));

//2. Пройдитесь по массиву с объектами циклом forEach и выведите в консоль значения first_name из каждого объекта

 //users.forEach(el => console.log(el.first_name));

// 3. Добавить в конец массива объект со следующими значениями:
// {
//   first_name: 'Anton',
//   last_name: 'Gribov',
//   age: 36,
//   salary: 1760
// }


users.push({
  first_name: 'Anton',
  last_name: 'Gribov',
  age: 36,
  salary: 1760
});

//console.log(users);


// 4. Сформируйте массив из совершеннолетних пользователей (18+)

const users_adults = users.filter(el => el.age >= 18);

 //console.log(users_adults);


// 5. Получите из всех объектов значения last_name и сформируйте из этих фамилий массив.
// => ['Ivanov', 'Petrova', 'Alexandrova', 'Sokolov', 'Gribov']


const users_last_names = users.map(el => el.last_name);

//onsole.log(users_last_names);


// 6. Сформируйте массив, состоящий только из имен и фамилий пользователей. Выведите результат в консоль.
// => ['Ivan Ivanov', 'Olga Petrova', 'Irina Alexandrova', 'Denis Sokolov', 'Anton Gribov']

const users_full_names = users.map(el => `${el.first_name} ${el.last_name}`);

//console.log(users_full_names);


// 7. Получите из этого массива объект, где first_name == "Olga", и сохраните это в какой-нибудь переменной => .find()

const user_olga_find = users.find(el => el.first_name === 'Olga');
const user_olga_filter = users.filter(el => el.first_name === 'Olga');

// console.log(user_olga_find); // {...} - возвращается элемент
// console.log(user_olga_filter); // [ {...} ] - возвращается массив



// 8. Сформировать массив со всеми пользователями, чьи first_name начинаются с буквы I/i

const users_i = users.filter(el => el.first_name[0] === 'I' || el.first_name[0] === 'i');

const users_i_2 = users.filter(el => el.first_name[0].toLowerCase() === 'i');

//console.log(users_i_2);

// 9. Сформируйте массив из совершеннолетних пользователей. И выведите в консоль результат в формате: <Имя> <Фамилия> (<возраст>): <зарплата>.
// => ['Ivan Ivanov (20): 500', 'Irina Alexandrova (46): 1500', 'Denis Sokolov (30): 760', 'Anton Grobov (36)'];

//const users_adults_info = users.filter(el => el.age >= 18).map(el => `${el.first_name} ${el.last_name} (${el.age}): ${el.salary}`);


// Коллеги, всем спасибо за занятие! Ловите домашку :легкая_улыбка:
// // Дан массив с данными
const people = [
  {
    first_name: 'Ivan',
    last_name: 'Ivanov',
    age: 20,
    city: 'Moscow',
    country: 'Russia',
    active: true
  },
  {
    first_name: 'dmitry',
    last_name: 'Petrov',
    age: 7,
    city: 'Berlin',
    country: 'Germany',
    active: true
  },
  {
    first_name: 'Irina',
    last_name: 'Alexandrova',
    age: 46,
    city: 'Paris',
    country: 'France',
    active: false
  },
  {
    first_name: 'Denis',
    last_name: 'Sokolov',
    age: 10,
    city: 'Rome',
    country: 'Italy',
    active: false
  }
];


// 1. Сформируйте массив строк - каждая строка включает в себя информацию по каждому человеку в следующем формате: "<Имя> <Фамилия>
// (<Город>, <Страна>)". Пример => ['Ivan Ivanov (Moscow, Russia)', {...}, {...}, ...]
// let peopleInfo = people.map(el => `${el.first_name} ${el.last_name} ${el.city} ${el.country}`);
// console.log(peopleInfo);


// 2. Сформируйте массив из активных людей
// let peopleActive = people.filter(el => el.active === true);
// console.log(peopleActive);


// 3. Сформируйте массив из людей, чьи имена начинаются на 'D' (регистр буквы может быть и нижним)
// let peopleNamesD = people.filter(el => el.first_name[0].toLowerCase() === 'd');
// console.log(peopleNamesD);


// 4. Получите из массива объект, где страной проживания человека является 'Germany'
// let peopleCount = people.find(el => el.country === 'Germany');
// console.log(peopleCount);


// 5. Сформируйте массив из совершеннолетних пользователей. И выведите в консоль результат в формате: [ {<Имя> <Фамилия> (<возраст>), 
// <Страна> (<Город>)}, {...}, {...}, ...]
let people_adults_info = people.filter(el => el.age >= 18).map(el => `${el.first_name} ${el.last_name} ${el.age} ${el.country} ${el.city}`);
console.log(people_adults_info);

// 6. Измените у первого элемента значение first_name на "Petr" и age на 99;

