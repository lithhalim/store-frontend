import React from 'react'




function Card_header({dataCard}) {

  return (
    <div className='header-card'>
      <p>{dataCard.Name_Product}</p>
    </div>
  )
}

export default Card_header