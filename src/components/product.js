import React from 'react'

const product = ({id,name,price,image}) => {
  
   
  return (
<div className='container'>
    <div className='d-flex justify-content-betwen align-item-center'>
      <div className='box'>
      <h3>{id}</h3>
      </div>
     <div className='box'>
     <h3>{name}</h3>
     </div>
    <div className='box'>
    <h3>{price}</h3>
    </div>
   <div className='box'>
   <img src={image} alt="" />
   </div>

    </div>

</div>
  )
}

export default product