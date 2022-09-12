import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';

import { useDispatch, useSelector } from 'react-redux';
import Show_details_modal from './show-details-modal';
import { addtocart } from '../../../redux/addToCart';
import { modifyquantity } from '../../../redux/addToCart';


function Card_footer({dataCard}) {
  const select_Item=useSelector((state)=>(state.addToCartSlice))
  const dispatch=useDispatch();

  const addToCartDetail=()=>{
      //check if the item on cart just increse number
      let DataCheck=select_Item.allProduct.findIndex((data)=>(data.id==dataCard.id));
      if(DataCheck==-1){
        //add new Object Have Quantity
        let AddQuintyty={quantity:1}
        let newObject={...dataCard,...AddQuintyty}
        dispatch(addtocart(newObject))
      }else{
        dispatch(modifyquantity(dataCard))

      }
  };




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


