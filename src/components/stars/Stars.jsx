import React from 'react'
import { FaStar } from 'react-icons/fa6'

function Stars({star}) {
  return (
    <div style={{fontSize: "18px"}} className='star-img'>
        {Array.from({length: 5}, (_, index) =>(
            <FaStar style={{marginRight: "6px"}}
            key={index} 
            color={index < star ? "gold" : "gray"}
            />
            
        ))}
    </div>
  )
}

export default Stars