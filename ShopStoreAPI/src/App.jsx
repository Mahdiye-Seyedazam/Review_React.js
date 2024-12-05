import { useState }  from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header/header'
import { useEffect } from 'react'
import Cart from './header/Cart'

function App() {

  const [product,setProduct] = useState([])
useEffect(() => {
  fetch("https://fakestoreapi.com/products")
  .then(res=>res.json())
  .then(data=>setProduct(data))
},[])
console.log(product)
  return (
    <>
      <Header/>
      <div className="cardContainer">
      {

        product.map(item=>(
          <Cart key={item.id} {...item} />
        ))
        
      }
      </div>

    </>
  )
}

export default App
