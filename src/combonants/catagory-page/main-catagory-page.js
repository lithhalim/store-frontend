import React, { useEffect, useState } from 'react'
import Card_Catagory_page from './card/card-catagorypage'
import "./catagory.css"
import {motion} from "framer-motion";
import {Catagory_Create_Context} from "../../context-api/catagory-context";
import { useContext } from 'react';
import axios from 'axios';


function Main_catagory_page() {
  //select the all data  fetching from databse
  const [dataUse,setdataUse]=useState(false);
  const CatagoryContext=useContext(Catagory_Create_Context);

  

  //select the data depend on catagory 
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_DATA}allpostes/${CatagoryContext.catagory}`).then((data)=>{
        setdataUse(data)
    })
  },[CatagoryContext])


  return (

    
    <motion.div className='main-all-catagory'  initial={{x:"-100vh"}} animate={{x:0}} transition={{duration:.5}}>
      {dataUse!==false? dataUse.data.map((a,i)=>( <Card_Catagory_page key={i} dataCard={a}/>)):<></>}
    </motion.div>
  )
}

export default  Main_catagory_page