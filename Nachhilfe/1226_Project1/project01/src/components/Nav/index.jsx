import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className={s.nav}>
      <Link to='/'>Main</Link>
      <Link to='users'>Users</Link>
      <Link to='posts'>Posts</Link>

  {/* <a href="#">Main</a>  
  <a href="#">Users</a>  
  <a href="#">Posts</a>   */}
</nav>

  )
}

// to - адрес к нужной странице
