import React from 'react'
// import { useDispatch } from 'react-redux'
// import { addUser } from '../../store/reducers/userReducer'

export default function AddUsersForm() {

const submit = (event) => {
  event.preventDefault(); // отменяет перезагрузку страницы
  const { name, age, country } = event.target; // доступ к данным внутри формы

console.log(country.value)

}


  return (
    <form onSubmit={submit}> 
        <input type='text' name='name' placeholder='Enter your Name'/>
        <input type='text' name='age' placeholder='Enter your Age' />
        <input type='text' name='country' placeholder='Enter your Country'/>
        <button>Add User</button>
    </form>
  )
}

// onSubmit - событие которое происходит после нажатия кнопки формы