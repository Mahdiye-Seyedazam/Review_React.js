import './Header.css'
import { LuShoppingBasket } from "react-icons/lu";
import React from 'react'
import './Cart'

export default function Header() {
  return (
    <header >
    <p className='Logo'>Mah shop</p>
    <div className="product-title header-title">
        All products
      </div>
    <span className='basket-icon'>
    <LuShoppingBasket  />
    </span>
    
  </header>
  )
}
