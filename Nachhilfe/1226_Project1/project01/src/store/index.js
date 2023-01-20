import { createStore, combineReducers } from 'redux'

const rootReducers =  combineReducers({
    users: userReducer
}) //набор функций для наполнения store

export const store = createStore(rootReducers) //cоздаем ячейку для хранения иформации