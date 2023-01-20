import React, { forwardRef } from 'react'
import s from './index.module.css'

export const Input = forwardRef((props, ref) => {

  return (
    <input {...props} ref={ref} className={s.form_input} />
  )
})

export default Input;


// import React from 'react'

// const Input = (props) => {
//   return (
//     <input {...props} />
//   )
// }

// export default Input;