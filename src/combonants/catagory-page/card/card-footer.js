import React from 'react'
import Button from '@mui/material/Button';

import { useDispatch, useSelector } from 'react-redux';
import Show_details_modal from './show-details-modal';
import axios from 'axios';
import { AllPostes } from '../../../redux/FetchData';
import { addtocart } from '../../../redux/addToCart';



function Card_footer({dataCard}) {
    const dispatch=useDispatch();


    const addToCartDetail=()=>{
      if(Number(dataCard.number_item)>1){
        axios.post(`${process.env.REACT_APP_DATA}updateData`,{dataCard:dataCard,type:"add Cart"})
        dispatch(AllPostes())
        dispatch(addtocart(dataCard))
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


