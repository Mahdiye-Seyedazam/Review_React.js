import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name,setName]=useState('Mahi')



  return (
    <>
      <div>
        <p onClick={()=>setName('Mahdiye')}>her Name is : {name}</p>

      </div>
      
    </>
  )
}

export default App
