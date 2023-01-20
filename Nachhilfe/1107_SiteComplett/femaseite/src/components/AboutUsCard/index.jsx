import React from 'react'
import s from './index.module.css'


export default function AboutUsCard({value, title, link_title, link_url}) {
  return (
    <div className={s.about_us_card}>
      <p className={s.card_value}>{value}</p>
      <h3 className={s.card_title}>{title}</h3>
      <a className={s.card_link} href={link_url}>{link_title}</a>
    </div>
  )
}
