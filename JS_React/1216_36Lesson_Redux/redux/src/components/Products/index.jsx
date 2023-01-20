import React from 'react'
import { addProduct, deleteProduct } from '../../store/reducers/productReducer';
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from '../ProductItem';

export default function Products() {

  const dispatch = useDispatch(); // отправить данные в Redux
  const state = useSelector(state => state.products); //получить данные из Redux

  const submit = event => {
      event.preventDefault();
      const { title, price } = event.target;
      dispatch(addProduct({
          title: title.value,
          price: price.value
      }))
      title.value = '';
      price.value = '';
  }

  const delete_product = id => dispatch(deleteProduct(id))

  return (
    <div>
        <form onSubmit={submit}>
            <input type="text" name='title'  placeholder='Title'/>
            <input type="text" name='price' placeholder='Price' />
            <button>Add</button>
        </form>
        <div>
            {
                state.map(el => <ProductItem key={el.id} {...el} delete_product={delete_product}/>)
            }
        </div>
    </div>
  )
}