import React from 'react'
import { Link } from 'react-router-dom'
import AddUsersForm from '../../components/AddUsersForm'


export default function UsersPage() {
  return (
    <div>
      <Link to='/'>
       <button>Back to Main</button>
      </Link>

      <AddUsersForm/>
    </div>
  )
}
