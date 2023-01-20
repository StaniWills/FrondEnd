import React from 'react'
import { useForm } from 'react-hook-form'
import s from './index.module.css'

export default function FormExample() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const submit = data => {
    console.log(data);
    reset();
  }

  const emailRegister = register('email', {
    required: '*The field "email" is required',
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: '*Not valid email-format'
    }
  });
// https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
  const passwordRegister = register('password', {
    required: '*The field "password" is required',
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      message: '*Minimum eight characters, at least one letter and one number, Минимум восемь символов, по крайней мере, одна буква и одна цифра'
    }
  });

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <input 
          type='text' 
          name='email' 
          placeholder='Email' 
          {...emailRegister} 
        />
        
        <input 
          type='password' 
          name='password' 
          placeholder='Password' 
          {...passwordRegister} 
        />

        <button>Send</button>
      </form>

      <div className={s.error_message}>
        {errors.email && <p>{errors.email?.message}</p>}
        {errors.password && <p>{errors.password?.message}</p>}
      </div>
    </div>
  )
}







