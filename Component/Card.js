import React from 'react'
import '../Custom.css';

function Card(prop) {
  return (
     
    <div className='border'>
     <h2>{prop.title}</h2>   
     <img width={"300px"} height={"300px"} src={prop.image} alt="" />
     <p>{prop.desc}</p>
     <b>{prop.price}</b>
    </div>
    

  )
}

export default Card