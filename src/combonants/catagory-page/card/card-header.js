import React from 'react'




function Card_header({dataCard}) {

  return (
    <div className='header-card'>
      <p>{dataCard.Name_Product}</p>
      <p> Number Product: {dataCard.number_item}</p>
    </div>
  )
}

export default Card_header