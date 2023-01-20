import React from 'react'
import UsersContainer from '../../components/UsersContainer'
import { Link } from 'react-router-dom'

export default function UsersPage() {
  return (
    <div>
      <Link to='/'>
        <button>На главную</button>
      </Link>
      <UsersContainer />
    </div>
  )
}