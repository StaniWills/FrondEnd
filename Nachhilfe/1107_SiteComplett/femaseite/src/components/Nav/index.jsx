import React from 'react'
import logo from './media/Logo.png'
import s from './index.module.css'

export default function Nav() {
  return (
    <nav className={['wrapper', s.nav_block].join(' ')}>
        <a href='/#'>
          <img src={logo} alt='logo'/>
        </a>

        <ul className={s.nav_menu}>
          <li>Главная</li>
		      <li>услуги</li>
		      <li>кейсы</li>
		      <li>о компании</li>
		      <li>контакты</li>
        </ul>
    </nav>
  )
}
