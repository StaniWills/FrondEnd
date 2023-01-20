import User from "./User";
import users from "../data/users";


function App() {

  return (

    <div >
      {users.map(elem => <User {...elem}  key={elem.id}/> )}
    </div>

  )
}

export default App;


// 1. Создать react-приложение через npx create-react-app app_name
// 2. Удалить ненужные файлы => подготовить приложение к работе
// 3. Запустить приложение через npm start (предварительно перейти в папку проекта app_name)
// 4. Создать компонент User с параграфами 'First name', 'Last name', 'Address', 'Salary'
// 5. В компоненте App создать массив users с объектами. Пример:
// const users = [
//     {
//       id: 1,
//       firstname: 'Oleg',
//       lastname: 'Petrov',
//       address: 'Moscow, Russia',
//       salary: 280
//     },
//     {
//       id: 2,
//       firstname: 'Anna',
//       lastname: 'Ivanova',
//       address: 'Berlin, Germany',
//       salary: 500
//     }
// ]

// 6. Из массива users достать информацию и передать ее через пропсы в компоненты User
