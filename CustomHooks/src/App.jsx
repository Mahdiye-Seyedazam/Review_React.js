import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useEffect}from 'react'
import './App.css'
import UseLogg from './Hooks/UseLogg'
import UseCount from './Hooks/UseCount'


// function App() {
//   const [value, setValue] = useState('')
//   UseLogg(value)

//   return (
//     <>
//     <h1>Enter value to log </h1>
//     <input  value={value} onChange={e=>setValue(e.target.value)} />
//     </>
//   )
// }

// export default App

// ===============Or this way : ====================


// function App() {
//   const [value, setValue] = UseLogg("")
  

//   return (
//     <>
//     <h1>Enter value to log </h1>
//     <input  value={value} onChange={e=>setValue(e.target.value)} />
//     </>
//   )
// }

// export default App


//============UseCount========================




// export default function App() {

//   const [count , Add , minus] = UseCount(0)



//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={Add}>+</button>
//       <button onClick={minus}>-</button>
//     </div>
//   )
// }


//============================fetch===============


function App() {
  const [posts, setPosts] = useState('')
  const [isPendindg, setIsPendindg] = useState(null)
  const [err, setErr] = useState(null)


  useEffect(()=>{
    setTimeout(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res=>res.json())
      .then(datas => {
        setPosts(datas)
        setIsPendindg(false)
        setErr(null)
      })
      .catch(err=>console.log(err))
    },2000)
  },[])

  return (
    <>
    

      {isPendindg && <div> is Loading :O </div> }  
      {posts && posts.map(post =>(
          <>
            <h2>{post.title}</h2>
            <hr />
          </>
      ))}
      {err && <div>{err}</div> }

    </>
  )
}

export default App
