import React from "react";
import {motion} from "framer-motion"



//import items section 
import "./navbar.css"
import NavbarIcon from "./Navbar-element/Navbar-Icon";
import Navbarselect from "./Navbar-element/Navbar-select";
import Logo from "../../../assest/store-removebg-preview.png"


const Navbar=()=>{


    return(
        <>
            <div className="Navbar-section">
                <Navbarselect/>
                <img src={Logo} style={{width:"100px",height:"60px",position:"absolute",left:"50%",top:"0px",transform:"translateX(-50%)"}}/>
                <motion.div  initial="initial" animate="after" transition={{duration:1}} className="icon-serch-container">
                    <NavbarIcon/>
                </motion.div>
            </div>
        </>
    )
}

export default Navbar


