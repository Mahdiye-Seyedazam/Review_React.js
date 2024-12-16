import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({id,title,info}) => {

  const [showInfo , setShowInfo] = useState(false) 

  const ShowBtn = () =>{
    setShowInfo(prevShow => !prevShow)
  }


  return (
    <article className='question' onClick={ShowBtn}>
      <header>
            <h4>{ title }</h4> 
        <button className='btn'>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />} 
        </button>
      </header>
       {showInfo && <p>{info}</p>} 
    </article>
  );
};

export default Question;
