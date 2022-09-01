import React, { useEffect, useRef } from 'react'
import ReorderIcon from '@mui/icons-material/Reorder';

import {motion} from "framer-motion"
import { useNavigate } from 'react-router';
import { Catagory_Create_Context } from '../../../../context-api/catagory-context';
import { useContext } from 'react';



function Navbarselect() {
  const getbar=useRef();
  const Navi=useNavigate();
  const Catagory_select=useContext(Catagory_Create_Context);

  const showElement=()=>{
    getbar.current.classList.toggle("active")
  }

  //go to select catagory page 
  const selectCatagory=(e)=>{
    Catagory_select.setcatagory(e.target.textContent)
  }


  return (

    <>
    <div  className='icon-bar'>
    <ReorderIcon onClick={showElement} />
    </div>
    <motion.ul className="select-element" initial={{x:-500}} animate={{x:0}}  ref={getbar} variants={imageVaariens} onClick={selectCatagory} >
        <li>electronics</li>
        <li>food</li>
    </motion.ul>

    </>


  )
}

export default Navbarselect


const imageVaariens={
  initial:{x:-500,opacity:0}
  ,
  after:{x:0,opacity:1}
}

