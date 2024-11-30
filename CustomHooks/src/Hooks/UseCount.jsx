import React from 'react'
import { useState } from 'react'

export default function UseCount(init) {
    const [count , setCount] = useState(init)

const Add = () => {
  setCount(prevCount=> prevCount+1)
}

const minus = () => {
  setCount(prevCount=> prevCount-1)
}

return[count,Add,minus]

}
