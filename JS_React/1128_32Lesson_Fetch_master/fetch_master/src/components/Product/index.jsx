import React from 'react'

export default function Product({ title, description }) {
  return (
    <div>
      <p>Title: { title }</p>
      <p>Description: { description }</p>
    </div>
  )
}