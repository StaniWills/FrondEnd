import React from 'react'
import s from './index.module.css'
import {aboutUs} from '../../data/aboutUs'
import AboutUsCard from '../AboutUsCard'

export default function AboutUs() {
  return (
    <section className={s.aboutUs_selection}>
    <div className={['wrapper',s.aboutUs_block].join (' ')}>
    
        <div className={s.about_us_article}>
            <p className='subheader'>О нас</p>
            <h2 className='h2'>Компания <br/><span className={s.title_modify}>ИвановПром</span></h2>
            <p className={s.text}>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. 
            Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. 
            В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, 
            используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил 
            без заметных изменений пять веков, но и перешагнул в электронный дизайн.</p>
        </div>

        <div className={s.services_container}>

    {
        aboutUs.map(el => <AboutUsCard key=
            {el.id} {...el}/>)
    }
        </div>
    </div>
    </section>

  )
}
