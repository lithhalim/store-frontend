import React from 'react'
import Moment from 'react-moment';




function Card_header({dataCard}) {

  return (
    <div className='header-card'>
      <p>{dataCard.Name_Product}</p>
    </div>
  )
}

export default Card_header