import React, { useState }from 'react'

export default function Counter() {

let [ likes, setLikes ] = useState(0);

// likes - переменная, которая зранит состояние
// setLikes - функция, которая отслеживает изменение состояния
// https://ru.reactjs.org/docs/hooks-overview.html

// let likes = 0;

  const incr = () => {
      setLikes(likes += 1);
  }
  
  const decr = () => {
      setLikes(likes -= 1);
  }

  return (
    <div>
        <p>{ likes }</p>
        <button onClick={decr}>-</button>
        <button onClick={incr}>+</button> 
    </div>
  )
}

