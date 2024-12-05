import { useRef  } from 'react'
import {useEffect}from 'react'
import './App.css'



export default function App() {

  const titleRef = useRef()
  const inputRef = useRef()

  useEffect (()=>{
    inputRef.current.focus()
  },[])

  const AddNewValue = ()=>{
    inputRef.current.value = 'please write a value'
  }
  const ChangeColor = ()=>{
    titleRef.current.classList.add('set-color')
  }

  return (
    <div>
      <h1 ref={titleRef} className=''>Write Your Note</h1>
    <input type="text" ref={inputRef}  />
    <br />
    <br /><br /><br />
    <button onClick={AddNewValue} >Add New Value</button>
    <button onClick={ChangeColor} >Change Title Color </button>
    
    </div>
  )
}
