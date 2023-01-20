import React from 'react'

export default function User({firstname, lastname, address, salary} ) {

    let styles = {
        border: '1px solid black',
        borderRadius: '15px',
        width: '300px',
        padding:'15px',
        margin: '10px',
        backgroundColor: 'yellow'
    }


  return (
    <div style={styles}>
        <p >First Name: {firstname}</p>
        <p >Last Name: {lastname}</p>
        <p >Address: {address}</p>
        <p >Salary: {salary}</p>

    </div>
  )
}
