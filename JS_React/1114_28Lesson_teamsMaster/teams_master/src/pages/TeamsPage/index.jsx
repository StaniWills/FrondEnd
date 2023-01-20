import React, { useContext } from 'react'
import { Context } from '../../context'
import User from '../../components/User';

export default function TeamsPage() {

  const { users } = useContext(Context);

  return (
    <div>
      {
        users.length
        ? users.map(el => <User key={el.id} {...el} />)
        : 'No users'
      }
    </div>
  )
}

// На странице TeamsPage из состояния users достать информацию 
// и сформировать из объектов компоненты User. Если массив пустой, вывести сообщение 'No users'