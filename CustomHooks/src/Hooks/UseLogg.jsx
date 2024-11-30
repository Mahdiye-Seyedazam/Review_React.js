
import React from 'react'
import {useEffect}from 'react'
import { useState } from 'react'


// export default function UseLogg(value) {

//     

//     useEffect(()=>{
//         console.log(value);
//     } ,[value])

//     
// }


//=================or this way: ===============

export default function UseLogg(title) {

    const [value , setValue] = useState(title)

    useEffect(()=>{
        console.log(value);
    } ,[value])

    return[value,setValue]
}