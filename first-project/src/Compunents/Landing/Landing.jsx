import React from 'react'
import './Landing.css'

export default function Landing(props) {
  console.log(props)
  return (
    <div >
        <img className='img-landing' src={props.axs} alt="" />
    </div>
  )
}
