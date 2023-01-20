import { createStore, combineReducers } from 'redux'
import { userReducer } from './reducer/userReducer';
import { postReducer } from './reducer/postReducer';

const rootReducer = combineReducers({
  users: userReducer,
  posts: postReducer
});

export const store = createStore(rootReducer);