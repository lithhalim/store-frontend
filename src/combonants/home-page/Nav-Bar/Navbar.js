import React, { useEffect } from "react";
import {motion} from "framer-motion";




//import items section 
import "./navbar.css"
import NavbarIcon from "./Navbar-element/Navbar-Icon";
import Navbarselect from "./Navbar-element/Navbar-select";
import Logo from "../../../assest/store-removebg-preview.png"
import { useDispatch } from "react-redux";
import { AllPostes } from "../../../redux/FetchData";
import { useNavigate } from "react-router-dom";


const Navbar=()=>{
    const dispatch=useDispatch();
    const Navi=useNavigate()
    useEffect(()=>{
        dispatch(AllPostes())
    },[dispatch])

    const gotopage=()=>{
        Navi("/")
    }

    return(
        <>
            <div className="Navbar-section">
                <Navbarselect/>
                <img src={Logo} style={{width:"100px",height:"60px",position:"absolute",left:"50%",top:"0px",cursor:"pointer", transform:"translateX(-50%)"}}  onClick={gotopage}/>
                <motion.div  initial="initial" animate="after" transition={{duration:1}} className="icon-serch-container">
                    <NavbarIcon/>
                </motion.div>
            </div>
        </>
    )
}

export default Navbar


