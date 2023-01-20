import React from 'react'
import ToDoItem from './ToDoItem';

export default function ToDoContainer(props) {
    console.log(props.todo);
    
  return (
    <div>
        <ToDoItem title={'der tisch reparieren'} descr={'ich brauche ihm aber nicht'}/>
    </div>
  )
}
