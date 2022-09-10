import React, { useEffect, useState } from 'react'
import Card_Catagory_page from './card/card-catagorypage'
import "./catagory.css"
import {motion} from "framer-motion";
import {Catagory_Create_Context} from "../../context-api/catagory-context";
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function Main_catagory_page() {
  //select the all data  fetching from databse
  const selectData=useSelector(state=>(state.allpostes.value))
  const dispatch=useDispatch()

  const [dataUse,setdataUse]=useState(false);
  const CatagoryContext=useContext(Catagory_Create_Context);

  

  //select the data depend on catagory 
  useEffect(()=>{
    if(selectData.payload!==undefined){
      let dataWillUse=selectData.payload.data.filter((data)=>(data.catagories==CatagoryContext.catagory));
      setdataUse(dataWillUse)
    }
  },[CatagoryContext.catagory,selectData,dispatch])


  return (

    <motion.div className='main-all-catagory'  initial={{x:"-100vh"}} animate={{x:0}} transition={{duration:.5}}>

      {dataUse!==false? dataUse.map((a,i)=>( <Card_Catagory_page key={i} dataCard={a}/>)):<></>}
    </motion.div>
  )
}

export default  Main_catagory_page