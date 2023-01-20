import React from 'react'
import { words } from '../../data/words'
import styles from './index.module.css'



export default function Word({title}) {
  return (
    <p className={styles.word}>{title}</p>
  )
}
