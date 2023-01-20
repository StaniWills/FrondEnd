import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import User from '../User';
import { deleteUser } from '../../store/reducer/userReducer';

export default function UsersContainer() {

  const state = useSelector(state => state.users);
  const dispatch = useDispatch();

  const delete_user = id => dispatch(deleteUser(id));

  return (
    <div>
      {
        state.map(el => <User key={el.id} {...el} delete_user={delete_user} />)
      }
    </div>
  )
}