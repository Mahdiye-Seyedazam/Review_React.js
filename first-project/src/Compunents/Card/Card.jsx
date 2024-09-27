import React from 'react'
import '../Card/Card.css'

export default function Card({axs,image,title,price}) {
  return (
    <div>

    
    <img height={200} width={200} src={image} alt=""  />
    <h1>{title}</h1>
    <p>${price}</p>

    </div>
  )
}
