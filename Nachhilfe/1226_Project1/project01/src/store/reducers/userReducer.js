const defaultState = [];

const ADD_USER = 'ADD_USER'

export const addUser = (payload) => ({ tape: ADD_USER, payload }); // собирает информацию в payload

export const userReducer = (state = defaultState, action) => {
if (action.tape === ADD_USER){
    return [...state, action.payload]
}
console.log(defaultState)
}




// позволяет добавлять информацию в редакс


