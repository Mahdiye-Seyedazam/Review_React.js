import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Todo from './copmponent/Todo'
export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='title'>todo list</h1>
        <div className="holder">
        <input type="text" className='input-box' /><img className='plus-icon' src="Icon/ph_plus-fill (1).svg" alt="" /> 
        <img className='arrow-icom' src="Icon/ep_arrow-down-bold.svg" alt="" />
        <select name="" id="" className='select-box'> <img src="Icon/ep_arrow-down-bold.svg" alt="" />

        </select>

        <Todo />
        </div>
      </div>
    
    </>
  )
}
