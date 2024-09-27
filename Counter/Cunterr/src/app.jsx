import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p className="title">this is Your click counter</p>
        <h1 className='nember'>{count}</h1>
        <div className="btn-holder">
          
        <button onClick={()=>setCount(count-1)} className="muines-btn">-</button>
        
        <button onClick={()=>setCount(count+1)} className="plus-btn">+</button>
        </div>
        <div className="sub-holder">
          <p className='decrease'>click to decrease</p>
          <p className='increase'>click to increase</p>
        </div>
      </div>
    </>
  )
}
