import React from 'react'
import Footer from '../Footer';
import Nav from '../Nav'
import { Outlet } from 'react-router-dom';
import s from './index.module.css'

export default function Layout() {
  return (
<div>
    <Nav/>
    <main className={s.outlet}>
    <Outlet/>
    </main>
    
    <Footer/>
</div>

  )
}

// Outlet встроенный компонент react-router, который отвечает за внутренний изменяемый контент
// Layout - Skelet seite