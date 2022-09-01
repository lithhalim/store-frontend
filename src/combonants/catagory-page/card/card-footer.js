import React from 'react'
import Button from '@mui/material/Button';

import { addtocart } from '../../../redux/addToCart';
import { useDispatch } from 'react-redux';
import Show_details_modal from './show-details-modal';


function Card_footer({dataCard}) {
  const dispatch=useDispatch();
  const addToCartDetail=()=>{dispatch(addtocart(dataCard))};



  return (
    <div >
      <ul >
        <li onClick={addToCartDetail}>
        <Button variant="contained"style={{width:"100%",marginBottom:"15px",fontWeight:"bold"}} >Add To Cart</Button>
        </li>
        <li >
        <Show_details_modal dataUse={dataCard}/>
        </li>
      </ul>

    </div>
  )
}

export default Card_footer


