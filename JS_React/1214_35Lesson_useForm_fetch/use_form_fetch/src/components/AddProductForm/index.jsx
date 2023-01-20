import React, { useContext } from 'react'
import s from './index.module.css'
import { useForm } from 'react-hook-form'
import { Context } from '../../context'
import { addProduct } from '../../requests/products'

export default function AddProductForm() {

  const { createNewProduct } = useContext(Context);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: 'onBlur'
  });

  const titleRegister = register('title', {
    required: '* Mandatory field1'
  });

  const descrRegister = register('description', {
    required: '* Mandatory field2'
  });

  const priceRegister = register('price', {
    required: '* Mandatory field3'
  });

  const ratingRegister = register ('rating', {
    required: '* Mandatory field4'
});

  const submit = (data) => {
    addProduct(data, createNewProduct);
    reset();
  }

  return (
    <div>
      <form className={s.add_product_form} onSubmit={handleSubmit(submit)}>
        <input type='text' name='title' placeholder='Title' {...titleRegister} />
        <input type='text' name='description' placeholder='Description' {...descrRegister} />
        <input type='text' name='price' placeholder='Price' {...priceRegister} />
        <input type='text' name='rating' placeholder='Rating' {...ratingRegister} />

        <button>Add product</button>
      </form>

      <div>
        {errors?.title && <p style={{ color: 'red' }}>{errors?.title?.message}</p>}
        {errors?.description && <p style={{ color: 'red' }}>{errors?.description?.message}</p>}
        {errors?.price && <p style={{ color: 'red' }}>{errors?.price?.message}</p>}
        {errors?.rating && <p style={{ color: 'red' }}>{errors?.rating?.message}</p>}
      </div>
    </div>
  )
}