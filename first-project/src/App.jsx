import React from 'react'
import './App.css'
import Landing from './Compunents/Landing/Landing'
import Card from './Compunents/Card/Card' 


export default function App() {
  const allProducts = [
    {title:"Asus" , price:220 , image:"./img/sc1.jpg" , count: 10  },
    {title:"Mac" ,   image:"./img/sc2.jpg" , count:10  },
    {title:"Lenovo" , price:320 , image:"./img/sc3.jpg" , count:0  }
  ] 
  return (
    <div>
      
      <Landing axs='/img/landing.jpg'  />

      <div className="holder-card">
      <Card  {...allProducts[0]} />
      <Card  {...allProducts[1]} />
      <Card  {...allProducts[2]} />
      </div>

      <img src="./image/sc1.jpg" alt="" />
      

    </div>
  )
}
