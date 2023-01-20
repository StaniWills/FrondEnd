import React from 'react'

export default function User({id, firstname, lastname, age}) { 
  
    const user_style = {
        border: '1px solid black',
        borderRadius: '10px',
        padding: '10px',
        width: '200px'
    }
  
    return (              
    //sozdaem schablon
    <div style={user_style}>
        <p>ID: { id } </p>
        <p>Fist name:   {firstname}</p>
        <p>Last name:   {lastname}</p>
        <p>Age:         {age}</p>
    </div>
  )
}
